import React from "react";
import { TopBar } from "../components/Topbar";
import { Outlet } from "react-router-dom";
import { ConsultancySidebar } from "../consultancy/ConsultancySidebar";

export const ConsultancyLayouts = () => {
  return (
    <div className="employeeLayouts w-[98vw] ">
      <>
        <>
          <div className="max-sm:hidden max-md:hidden">
            <ConsultancySidebar>
              <TopBar />
              <Outlet />
            </ConsultancySidebar>
          </div>
        </>

        <div className="md:hidden">
          <div className="">
            <TopBar />
            <ConsultancySidebar />
          </div>
          <Outlet />
        </div>
      </>
    </div>
  );
};
