import React, { useEffect, useState } from "react";
import { AttendanceType } from "../../../Employee/pages/AttendanceType";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendenceList } from "../../../Redux/slices/adminSlice";
export const ViewEmpAttendance = () => {
  const location = useLocation();
  const id = location?.state?.list;

  return (
    <>
      <div>
        <Calendar id={id} />
      </div>
    </>
  );
};

// CustomCalendar.jsx

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ id }) => {
  const dispatch = useDispatch();
  const userAttendence = useSelector((state) => state.admin.attendenceList);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchAttendenceList(id));
  }, [dispatch]);

  

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
          userAttendence.some(
            (attend) =>
              new Date(date).toLocaleDateString() ===
              new Date(attend.date).toLocaleDateString() && attend.status === "Present"
          ) 
            ? "bg-green-600"
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
              onClick={() =>
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() - 1,
                    1
                  )
                )
              }
            >
              Prev
            </button>
            <div className="current-month">
              {selectedDate.toLocaleString("default", { month: "long" })}{" "}
              {selectedDate.getFullYear()}
            </div>
            <button
              className="text-blue-600"
              onClick={() =>
                setSelectedDate(
                  new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth() + 1,
                    1
                  )
                )
              }
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
