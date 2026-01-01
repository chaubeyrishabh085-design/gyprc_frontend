import React from "react";
import { Sidebar } from "../Employee/components/Sidebar";
import { UserRoute } from "../Routing/UserRoute";
// import { TopBar } from "../Employee/components/Topbar"
import { TopBar } from "../components/Topbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const EmployeeLayouts = () => {
  return (
    <div className="employeeLayouts w-[98vw] ">
      <>
        <>
          <div className="max-sm:hidden max-md:hidden">
            <Sidebar>
              <TopBar />
              <Outlet />
            </Sidebar>
          </div>
        </>

        <div className="md:hidden">
          <div className="">
            <TopBar />
            <Sidebar />
          </div>
          <Outlet />
        </div>
      </>
    </div>
  );
};
