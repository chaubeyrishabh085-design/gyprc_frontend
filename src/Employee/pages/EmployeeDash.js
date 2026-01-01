import React from "react";
import { Card } from "../../components/card";
import { RecentActivity } from "../../components/RecentActivity";
import { Announcement } from "../../components/Announcement";
import { UserProfile } from "../components/UserProfile";



export const EmployeeDash = () => {
    return (
      <>

        <div className="container mb-5">
          <UserProfile/>
        </div>

        <div className="dashBoard flex flex-col md:flex-col xl:flex-row  text-start px-5  gap-3">
          <div className="max-sm:order-2 sm:order-2 xl:order-1">
          <div className="flex flex-col md:flex-row xl:flex-row  px-2 gap-3 max-sm:justify-center items-center">
            <Card
              title="View Attendance"
              // value={24}
              urgency="View"
              path="/employee/view_attendance"
              bgColor="bg-orange-100"
              textColor="text-gray-900"
              height={150}
            />
            <Card
              title="Leave Balance"
              value={0}
              urgency="View"
              path="/employee"
              bgColor="bg-blue-100"
              height={150}
            />
            <Card
              title="Apply Leave"
              // value={24}
              urgency="View"
              path="/employee/apply_leave"
              bgColor="bg-red-100"
              textColor="text-gray-900"
              height={150}
            />
            
          </div> 
            <div className="Upcoming px-2  mt-2 h-[40vh] overflow-y-auto ">
            <Announcement/>
            </div>
          </div>
  
          <div className="mt-4 md:mt-0 xl:mt-0 ml-2 max-sm:order-1 sm:order-1 xl:order-2">
            <RecentActivity />
          </div>
        </div>
  
        <div>{/* Add content for the second section, if needed */}</div>
      </>
    );
  };
  