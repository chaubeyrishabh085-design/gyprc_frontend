import React, { useEffect } from "react";
import { useState } from "react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendenceList } from "../../Redux/slices/adminSlice";
import { AttendanceType } from "../../Employee/pages/AttendanceType";
import { Loader } from "../../components/loader";
import { MdCancelPresentation } from "react-icons/md";
const ViewAttendance = () => {
  const dispatch = useDispatch();
  const attendenceList = useSelector((state) => state.admin.attendenceList);

  let filter = attendenceList?.filter((el) => {
    if (el?.profile?.is_deleted === false) {
      return el;
    }
  });

  const groupByCategory = filter?.reduce((group, product) => {
    const { employees_data } = product;
    group[employees_data] = group[employees_data] ?? [];
    group[employees_data].push(product);
    return group;
  }, {});

  let currMonth = new Date().toLocaleDateString("default", {
    month: "2-digit",
    year: "numeric",
  });
  const [umonth, uyear] = currMonth.split("/").map(Number);
  let update_month = `${umonth.toString().padStart(2, "0")}-${uyear}`;
  const [currentMonth, setCurrentMonth] = useState(update_month);
  const [MonthlyData, setMonthlyData] = useState([]);
  const [udateMonthStart, setUpdateMonthStart] = useState({
    from_date: "",
    to_date: "",
  });
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(false);
  const [currentDate, setCUrrentDate] = useState("");

  useEffect(() => {
    setToggle(true);
    dispatch(fetchAttendenceList("", udateMonthStart, setToggle));
  }, [udateMonthStart]);

  const handlePrevMonth = () => {
    const [month, year] = currentMonth.split("-").map(Number);
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = month === 1 ? year - 1 : year;
    setCurrentMonth(`${newMonth.toString().padStart(2, "0")}-${newYear}`);
    const lstMonthDate = new Date(newYear, newMonth, 0);
    let update = lstMonthDate?.toLocaleDateString()?.split("/");
    let formateUpdateDate = `${update[2]}-${update[1]}-${update[0]}`;
    setUpdateMonthStart({
      from_date: `${newYear}-${newMonth.toString().padStart(2, "0")}-01`,
      to_date: formateUpdateDate,
    });
  };

  const handleNextMonth = () => {
    const [month, year] = currentMonth.split("-").map(Number);
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = month === 12 ? year + 1 : year;
    setCurrentMonth(`${newMonth.toString().padStart(2, "0")}-${newYear}`);
    const lstMonthDate = new Date(newYear, newMonth, 0);
    let update = lstMonthDate?.toLocaleDateString()?.split("/");
    let formateUpdateDate = `${update[2]}-${update[1]}-${update[0]}`;

    setUpdateMonthStart({
      from_date: `${newYear}-${newMonth.toString().padStart(2, "0")}-01`,
      to_date: formateUpdateDate,
    });
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  useEffect(() => {
    getMonthData();
  }, [currentMonth]);

  const getMonthData = () => {
    const [month, year] = currentMonth.split("-").map(Number);
    const daysInMonth = getDaysInMonth(year, month);
    const monthData = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${i
        .toString()
        .padStart(2, "0")}`;
      monthData.push(formattedDate);
    }

    setMonthlyData(monthData);
  };

  const handleDownloadMonthly = (curDate) => {
    const groupedEmployeeData = {};

    Object.values(groupByCategory).forEach((el) =>
      el?.forEach((record) => {
        const { profile, begin_time, date, status } = record;

        // Parse the begin_time manually
        const [timePart, meridian] = begin_time.split(" ");
        const [hours, minutes, seconds] = timePart.split(":").map(Number);
        let hour = hours;

        if (meridian?.toLowerCase() === "pm" && hour < 12) {
          hour += 12;
        }

        const updateDate = new Date(1970, 0, 1, hour, minutes, seconds);
        const localTime = updateDate.toLocaleTimeString([], { hour12: true });

        const employeeName = `${profile?.first_name} ${profile?.last_name}`;
        const key = `${employeeName}_${date}`;

        // Check if the record matches the current date and status is "Present"
        if (date === curDate && status === "Present") {
          if (!groupedEmployeeData[key]) {
            groupedEmployeeData[key] = {
              Employee_Name: employeeName,
              Time: localTime,
              Date: date,
            };
          } else {
            groupedEmployeeData[key].Time += `, ${localTime}`;
          }
        }
      })
    );

    const employee_data = Object.values(groupedEmployeeData);

    // Create a worksheet from the extracted data
    const ws = XLSX.utils.json_to_sheet(employee_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Trigger the file download
    XLSX.writeFile(wb, "employee_Data.xlsx");
  };

  return (
    <>
      <div
        id="attendance-view"
        className="container text-center h-[75vh] w-[98%] m-auto "
      >
        {/* {toggle && <Loader />} */}
        <div className="flex gap-8 ">
          <button
            style={{
              padding: "4px 8px",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#fff",
            }}
            className="mb-5 text-orange-600 "
            onClick={() => setOpen(true)}
          >
            Download Employee Data
          </button>
          <div style={{ width: "50%" }}>
            <h2
              style={{ textAlign: "center" }}
              className="mb-5 text-2xl font-semibold  text-orange-600 "
            >
              Attendance View
            </h2>
          </div>
        </div>

        {/* <h2 className="mb-5 text-2xl font-semibold text-orange-600 ">
          Attendance View
        </h2> */}
        <div className="flex items-center justify-evenly mb-3 ">
          <button onClick={handlePrevMonth} className="text-blue-500">
            Previous Month
          </button>
          <h3>{currentMonth}</h3>
          <button onClick={handleNextMonth} className="text-blue-500">
            Next Month
          </button>
        </div>
        {toggle ? (
          <Loader />
        ) : (
          <>
            <div className="overflow-y-scroll max-h-[64vh] bg-white pb-3 m-auto rounded shadow w-[80vw] ">
              <div className="attendance-table flex">
                <div className="employeeNames min-w-[260px] pl-2 border-r-2 ">
                  <div className="w-[240px] text-start xl:fixed bg-white ">
                    <h1 className="text-base  font-semibold text-orange-600 ">
                      Employee Name
                    </h1>
                  </div>
                  <div className="mt-7">
                    {Object.values(groupByCategory)?.map((record, index) => (
                      <div
                        key={index}
                        className="employee-name text-start  border mb-2 text-sm items-center font-semibold capitalize bg-orange-50 bg-opacity-70"
                      >
                        {index + 1}
                        {". "}

                        {Array.from(
                          new Set(
                            record?.map(
                              (el) =>
                                `${el?.profile?.first_name} ${el?.profile?.last_name}`
                            )
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="attendanceStatus  no-scrollbar">
                  <div className="attendanceDdates flex">
                    <div className="date flex text-lg xl:fixed bg-white">
                      {MonthlyData.map((date, index) => (
                        <div
                          key={index}
                          className="attendance-date min-w-[22px] ml-1 text-base font-semibold "
                        >
                          {new Date(date).getDate()}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="AbsentPresent mt-7 ">
                    {Object.values(groupByCategory)?.map((record, index) => (
                      <div
                        key={index}
                        className="employee-attendance flex mb-2 text-sm bg-white "
                      >
                        {MonthlyData.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className={`status min-w-[22px] ml-1 border ${
                              record?.some(
                                (attend) =>
                                  attend?.date === day &&
                                  attend?.status === "Present"
                              )
                                ? "bg-green-500 text-white"
                                : record?.some(
                                    (attend) =>
                                      attend?.date === day &&
                                      attend?.status === "Absent"
                                  )
                                ? "bg-red-500 text-white"
                                : record?.some(
                                    (attend) =>
                                      attend?.date === day &&
                                      attend?.status === "Leave"
                                  )
                                ? "bg-yellow-500"
                                : record?.some(
                                    (attend) =>
                                      attend?.date === day &&
                                      attend?.status === "Half"
                                  )
                                ? "bg-slate-500 text-white"
                                : record?.some(
                                    (attend) =>
                                      attend?.date === day &&
                                      attend?.status === "W/O"
                                  )
                                ? "bg-blue-500 text-white"
                                : record?.some(
                                    (attend) =>
                                      attend?.date === day &&
                                      attend?.status === "Holiday"
                                  )
                                ? "bg-blue-900 text-white"
                                : ""
                            }`}
                          >
                            {record?.some(
                              (attend) =>
                                attend?.date === day &&
                                attend?.status === "Present"
                            )
                              ? "P"
                              : record?.some(
                                  (attend) =>
                                    attend?.date === day &&
                                    attend?.status === "Absent"
                                )
                              ? "A"
                              : record?.some(
                                  (attend) =>
                                    attend?.date === day &&
                                    attend?.status === "Leave"
                                )
                              ? "L"
                              : record?.some(
                                  (attend) =>
                                    attend?.date === day &&
                                    attend?.status === "Half"
                                )
                              ? "H"
                              : record?.some(
                                  (attend) =>
                                    attend?.date === day &&
                                    attend?.status === "W/O"
                                )
                              ? "W"
                              : record?.some(
                                  (attend) =>
                                    attend?.date === day &&
                                    attend?.status === "Holiday"
                                )
                              ? "H"
                              : "A"}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-6 px-2">
              <AttendanceType />
            </div>
          </>
        )}
      </div>
      {open && (
        <div className="fixed top-[30%] left-1/2 z-100">
          <OpenDownload
            setOpen={setOpen}
            handleDownloadMonthly={handleDownloadMonthly}
            setCUrrentDate={setCUrrentDate}
            currentDate={currentDate}
          />
        </div>
      )}
    </>
  );
};

export default ViewAttendance;

export const OpenDownload = ({
  setOpen,
  handleDownloadMonthly,
  setCUrrentDate,
  currentDate,
}) => {
  const hadleSubmit = (e) => {
    e.preventDefault();
    handleDownloadMonthly(currentDate);
    if (currentDate) {
      setCUrrentDate(false);
      setOpen(false);
    }
  };
  return (
    <div className="flex justify-center items-center  text-center">
      <div className="w-[300px] bg-white   rounded shadow p-5">
        <span
          onClick={() => setOpen(false)}
          className="text-2xl flex items-center justify-end cursor-pointer"
        >
          <MdCancelPresentation />
        </span>
        <h1 className="text-lg font-semibold">Select Date</h1>
        <div className="flex-col">
          <form onSubmit={hadleSubmit}>
            <div className="mb-2 mt-2 flex flex-col gap-4">
              <div>
                <input
                  className="border px-2 py-1 rounded text-base font-semibold"
                  type="date"
                  value={currentDate}
                  onChange={(e) => setCUrrentDate(e.target.value)}
                />
              </div>
              <div>
                <button className="bg-orange-600  py-1 w-[150px] text-base font-semibold text-white rounded cursor-pointer hover:bg-orange-500">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
