import React, { useEffect, useState } from "react";
import { RiH2 } from "react-icons/ri";
import { postData1 } from "../APIs";
import { toast } from "react-toastify";
import { getCurrentDate } from "../utils/purefun";

export const RecentActivity = () => {
  const [isMarked, setMarked] = useState(false);

  const markAttendence = async () => {
    if (isMarked) {
      return;
    }
    const res = await postData1("api/v1/mark_attendence/", {}, true);
    if (res?.status_code === 200) {
      toast.success("Attendance marked successfully !");
      setMarked(true);
    } else {
      toast.error("Something went wrong , try again !");
    }
  };

  useEffect(() => {
    (async () => {
      let data = {
        from_date: getCurrentDate(),
        to_date: getCurrentDate(),
      };
      const res = await postData1("api/v1/view_attendence/", data, true);
      if (res?.status_code === 200) {
        if (res?.data[0]?.status === "Present") {
          setMarked(true);
        }
      }
    })();
  }, []);

  return (
    <div className="">
      <div className="recentActivity bg-blue-900 px-5 py-4 rounded h-[150px] text-white flex justify-center items-center">
        <h1
          onClick={markAttendence}
          className={`${
            isMarked ? "bg-green-600 text-white" : "bg-white text-black"
          } font-bold py-5 px-5 rounded cursor-pointer`}
        >
          {isMarked ? "Attendance Marked" : "Mark's Today Attendance"}
        </h1>
      </div>

      {/* <div className="mt-5">
            <UpcomingSchedule/>
        </div> */}
    </div>
  );
};

const UpcomingSchedule = () => {
  return (
    <>
      <div className="upcomingSchedule  ">
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
          <div>
            <h3>Today 13 Sept</h3>
          </div>
        </div>
        <div className="Priority">
          <h2 className="font-semibold  mb-2 mt-2">Priority</h2>
          <div className="UcomingCard flex justify-between border bg-gray-200 rounded py-2 px-2 ">
            <div>
              <h1 className="font-semibold">Review candiate appliction</h1>
              <h2 className="text-base">Today, 11:30AM</h2>
            </div>
            <div>
              <span className="font-bold text-2xl">
                {" "}
                <i class="bi bi-three-dots"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
