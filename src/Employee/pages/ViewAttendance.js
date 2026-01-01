import React, { useEffect, useState } from "react";
import { AttendanceType } from "./AttendanceType";
import { UserProfile } from "../components/UserProfile";
import { postData1 } from "../../APIs/index";
export const ViewAttendance = () => {
  return (
    <>
      <div className="">
        <UserProfile />
      </div>

      <div>
        <Calendar />
      </div>
    </>
  );
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const Calendar = () => {
  
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attenStatus, setAttenStatus] = useState([])
  const [startDate, setStartDate] = useState(formatDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)));
  const [endDate, setEndDate] = useState(formatDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)));

 
  const handlePrev = () => {
    const prevMonthDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(prevMonthDate);
  };

  const handleNext = () => {
    const nextMonthDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonthDate);
  };
  useEffect(() => {
    const start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const end = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    setStartDate(formatDate(start));
    setEndDate(formatDate(end));

    (async () => {
      let data = {
        from_date: formatDate(start),
        to_date: formatDate(end),
      };

      const res = await postData1("api/v1/view_attendence/", data, true);

      if (res?.status_code === 200) {
        setAttenStatus(res?.data);
      }
    })();
  }, [selectedDate]);

  // useEffect(() => {
  //   (async () => {
  //     let data = {
  //       from_date: startformatDate(),
  //       to_date: lstformatDate(),
  //     };
  //     const res = await postData1("api/v1/view_attendence/", data, true);
  //     if (res?.status_code === 200) {
  //       setAttenStatus(res?.data);
  //     }
  //   })();
  // }, [selectedDate]);


  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = firstDay.getDay();
    const monthData = [];

    for (let i = 0; i < startDay; i++) {
      monthData.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      monthData.push(new Date(year, month, i));
    }

    return monthData;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-of-week">
        {day}
      </div>
    ));
  };

  const renderCalendarCells = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const monthData = getMonthData(year, month);

    return monthData.map((date, index) => (
      <div
        key={index}
        className={`calendar-cell ${
          attenStatus?.some(
            (attend) =>
              new Date(date).toLocaleDateString() ===
                new Date(attend.date).toLocaleDateString() &&
              attend.status === "Present"
          )
            ? "bg-green-500"
            : "bg-white-100"
        } p-2 cursor-pointer`}
        onClick={() => handleDateClick(date)}
      >
        {date ? date.getDate() : ""}
      </div>
    ));
  };

  return (
    <>
    
      <div className="mt-8  flex justify-center">
        <div className="custom-calendar rounded shadow-md bg-white py-5 px-3 w-[900px]">
          <div className="header flex justify-evenly text-gray-600 text-xl font-semibold  mb-12">
            <button
              className="text-blue-600"
              onClick={handlePrev}
              // onClick={() =>
              //   setSelectedDate(
              //     new Date(
              //       selectedDate.getFullYear(),
              //       selectedDate.getMonth() - 1,
              //       1
              //     )
              //   )
              // }
            >
              Prev
            </button>
            <div className="current-month">
              {selectedDate.toLocaleString("default", { month: "long" })}{" "}
              {selectedDate.getFullYear()}
            </div>
            <button
              className="text-blue-600"
              onClick={handleNext}
              // onClick={() =>
              //   setSelectedDate(
              //     new Date(
              //       selectedDate.getFullYear(),
              //       selectedDate.getMonth() + 1,
              //       1
              //     )
              //   )
              // }
            >
              Next
            </button>
          </div>
          <div className="px-5">
            <div className="days-of-week grid grid-cols-7 gap-2 text-center ">
              {renderDaysOfWeek()}
            </div>
            <div className="calendar-grid grid grid-cols-7 gap-2 text-center">
              {renderCalendarCells()}
            </div>

            <div className=" mt-8 px-2">
              <AttendanceType />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
