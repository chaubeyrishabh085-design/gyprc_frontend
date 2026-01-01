import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdatedList } from "../../Redux/slices/adminSlice";
import { postData1 } from "../../APIs";
import { toast } from "react-toastify";

export const UpdateAttendance = () => {
  const dispatch = useDispatch();
  const attendenceList = useSelector((state) => state.admin.updatedAttendList);
  let emIdMap = {};
  let filterupdatedData = attendenceList?.filter((el) => {
    if(el?.profile?.is_deleted === false  && !emIdMap[el?.profile?.emp_id]){
      emIdMap[el?.profile?.emp_id] = true
      return true
    }
    return false
  });
  const [date, setDate] = useState("");
  const [search, setsearch] = useState("");
  const [filteredEmployees, setFilterEmployees] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    if (value.trim() !== "") {
      setsearch(value);
    } else {
      setsearch("");
    }
  };

  useEffect(() => {
    const filterEmployeeData = () => {
      let fill = filterupdatedData?.filter((el) => {
        const { first_name, last_name, username, mobile, desgination } =
          el?.profile;
        const searchTerm = search?.toLowerCase();
        return (
          first_name?.toLowerCase().includes(searchTerm) ||
          last_name?.toLowerCase().includes(searchTerm) ||
          username?.toLowerCase().includes(searchTerm) ||
          mobile?.toLowerCase().includes(searchTerm) ||
          desgination?.toLowerCase().includes(searchTerm)
        );
      });
      setFilterEmployees(fill);
    };

    filterEmployeeData();
  }, [search]);

  useEffect(() => {
    dispatch(fetchUpdatedList(date));
  }, [date]);

  return (
    <>
      <div className=" text-center ">
        <div className="flex">
          <h1 className="text-3xl font-semibold text-orange-600 text-start max-sm:p-3  sm:px-8  mb-6">
            Update Attendance{" "}
          </h1>
        </div>
        <div className="container">
          <Table
            columns={columns}
            attendenceList={filterupdatedData}
            date={date}
            setDate={setDate}
            handleSearch={handleSearch}
            search={search}
            filteredEmployees={filteredEmployees}
          />
        </div>
      </div>
    </>
  );
};

export const columns = [
  { key: "id", title: "ID" },
  { key: "date", title: "Date" },
  { key: "username", title: "Username" },
  { key: "fname", title: "Fname" },
  { key: "mobile", title: "Mobile" },
  { key: "desgination", title: "Desgination" },
  { key: "status", title: "Status" },
  { key: "leave_type", title: "Leave Type" },
  { key: "action", title: "Action" },
];

export const Table = ({
  columns,
  attendenceList,
  date,
  setDate,
  handleSearch,
  search,
  filteredEmployees,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    status: "",
    leave_type: "",
  });

  const handleUpdateAttendence = async (row) => {
    let data = {
      id: row?.id,
      status: formData?.status ? formData?.status : row?.status,
      leave_type: formData?.leave_type
        ? formData?.leave_type
        : row?.leave_type !== null
        ? row?.leave_type
        : "N",
    };
    const res = await postData1("api/v1/admin/update_atten/", data, true);
    if (res?.status_code === 200) {
      toast.success("Updated Successfully !");
      dispatch(fetchUpdatedList());
    } else {
      toast.error(res?.msg);
    }
  };

  const handleUpdatedStatus = (event) => {
    const { name, value, id } = event.target;
    setFormData({ ...formData, [name]: value, id });
  };

  return (
    <>
      <div className="container max-sm:w-[80%] w-[95%] m-auto">
        <div className="flex text-center gap-2 mb-5">
          <h1 className="bg-orange-500 max-sm:px-2 sm:px-4 py-1 flex items-center justify-center rounded text-white font-semibold">
            Find On Date
          </h1>
          <input
            className=" px-2 py-1 rounded  border font-semibold"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="p-3 text-xl border-0 outline-none"
            type="text"
            placeholder="search"
            name="search"
            id="search"
            autoComplete="off"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>

        <div className="overflow-x-auto w-[77vw]  h-[65vh] bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-1 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center"
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {search
                ? filteredEmployees?.map((row, index) => (
                    <tr key={row.id}>
                      {columns.map((column) => (
                        <td
                          key={column.key}
                          className="px-3 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                        >
                          {column.key === "status" ? (
                            <select
                              value={
                                Number(formData?.id) === row?.id
                                  ? formData?.status
                                  : row?.status
                              }
                              name="status"
                              id={row?.id}
                              onChange={(e) => handleUpdatedStatus(e)}
                              className="px-1 py-1 border rounded outline-none"
                            >
                              <option
                                value="Present"
                                selected={row?.status === "Present"}
                              >
                                Present
                              </option>
                              <option
                                value="Absent"
                                selected={row?.status === "Absent"}
                              >
                                Absent
                              </option>
                              <option
                                value="Leave"
                                selected={row?.status === "Leave"}
                              >
                                Leave
                              </option>
                              <option
                                value="Half"
                                selected={row?.status === "Half"}
                              >
                                Half
                              </option>
                              <option
                                value="W/O"
                                selected={row?.status === "W/o"}
                              >
                                W/o
                              </option>
                              <option
                                value="Holiday"
                                selected={row?.status === "Holiday"}
                              >
                                Holiday
                              </option>
                              <option
                                value="Pending"
                                selected={
                                  row?.status === "Pending" ||
                                  row?.status === ""
                                }
                              >
                                Pending
                              </option>
                            </select>
                          ) : column.key === "leave_type" ? (
                            <select
                              value={
                                Number(formData?.id) === row?.id
                                  ? formData?.leave_type
                                  : row?.leave_type
                              }
                              name="leave_type"
                              id={row?.id}
                              onChange={(e) => handleUpdatedStatus(e)}
                              className="px-1 py-1 border rounded outline-none"
                            >
                              <option
                                value="EL"
                                selected={row?.leave_type === "EL"}
                              >
                                EL
                              </option>
                              <option
                                value="CL"
                                selected={row?.leave_type === "CL"}
                              >
                                CL
                              </option>
                              <option
                                value="SL"
                                selected={row?.leave_type === "SL"}
                              >
                                SL
                              </option>
                              <option
                                value="ML"
                                selected={row?.leave_type === "ML"}
                              >
                                ML
                              </option>
                              <option
                                value="PL"
                                selected={row?.leave_type === "PL"}
                              >
                                PL
                              </option>
                              <option
                                value="N"
                                selected={
                                  row?.leave_type === "N" ||
                                  row?.leave_type === null
                                }
                              >
                                N
                              </option>
                            </select>
                          ) : column.key === "action" ? (
                            <button
                              type="submit"
                              onClick={() => handleUpdateAttendence(row)}
                              className="bg-yellow-500 text-white px-2 rounded font-semibold py-1"
                            >
                              Update
                            </button>
                          ) : column.key === "id" ? (
                            index + 1
                          ) : column.key === "username" ? (
                            row?.profile?.email
                          ) : column.key === "fname" ? (
                            row?.profile?.first_name
                          ) : column.key === "mobile" ? (
                            row?.profile?.mobile
                          ) : column.key === "desgination" ? (
                            row?.profile?.desgination
                          ) : (
                            row[column.key]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                : attendenceList?.map((row, index) => {
                    return (
                      <tr key={row.id}>
                        {columns.map((column) => (
                          <td
                            key={column.key}
                            className="px-3 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                          >
                            {column.key === "status" ? (
                              <select
                                value={
                                  Number(formData?.id) === row?.id
                                    ? formData?.status
                                    : row?.status
                                }
                                name="status"
                                id={row?.id}
                                onChange={(e) => handleUpdatedStatus(e)}
                                className="px-1 py-1 border rounded outline-none"
                              >
                                <option
                                  value="Present"
                                  selected={row?.status === "Present"}
                                >
                                  Present
                                </option>
                                <option
                                  value="Absent"
                                  selected={row?.status === "Absent"}
                                >
                                  Absent
                                </option>
                                <option
                                  value="Leave"
                                  selected={row?.status === "Leave"}
                                >
                                  Leave
                                </option>
                                <option
                                  value="Half"
                                  selected={row?.status === "Half"}
                                >
                                  Half
                                </option>
                                <option
                                  value="W/O"
                                  selected={row?.status === "W/o"}
                                >
                                  W/o
                                </option>
                                <option
                                  value="Holiday"
                                  selected={row?.status === "Holiday"}
                                >
                                  Holiday
                                </option>
                                <option
                                  value="Pending"
                                  selected={
                                    row?.status === "Pending" ||
                                    row?.status === ""
                                  }
                                >
                                  Pending
                                </option>

                                {/* Add more options if needed */}
                              </select>
                            ) : column.key === "leave_type" ? (
                              <select
                                value={
                                  Number(formData?.id) === row?.id
                                    ? formData?.leave_type
                                    : row?.leave_type
                                }
                                name="leave_type"
                                id={row?.id}
                                onChange={(e) => handleUpdatedStatus(e)}
                                className="px-1 py-1 border rounded outline-none"
                              >
                                <option
                                  value="EL"
                                  selected={row?.leave_type === "EL"}
                                >
                                  EL
                                </option>
                                <option
                                  value="CL"
                                  selected={row?.leave_type === "CL"}
                                >
                                  CL
                                </option>
                                <option
                                  value="SL"
                                  selected={row?.leave_type === "SL"}
                                >
                                  SL
                                </option>
                                <option
                                  value="ML"
                                  selected={row?.leave_type === "ML"}
                                >
                                  ML
                                </option>
                                <option
                                  value="PL"
                                  selected={row?.leave_type === "PL"}
                                >
                                  PL
                                </option>
                                <option
                                  value="N"
                                  selected={
                                    row?.leave_type === "N" ||
                                    row?.leave_type === null
                                  }
                                >
                                  N
                                </option>
                              </select>
                            ) : column.key === "action" ? (
                              <button
                                type="submit"
                                onClick={() => handleUpdateAttendence(row)}
                                className="bg-yellow-500 text-white px-2 rounded font-semibold py-1"
                              >
                                Update
                              </button>
                            ) : column.key === "id" ? (
                              index + 1
                            ) : column.key === "username" ? (
                              row?.profile?.email
                            ) : column.key === "fname" ? (
                              row?.profile?.first_name
                            ) : column.key === "mobile" ? (
                              row?.profile?.mobile
                            ) : column.key === "desgination" ? (
                              row?.profile?.desgination
                            ) : (
                              row[column.key]
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
