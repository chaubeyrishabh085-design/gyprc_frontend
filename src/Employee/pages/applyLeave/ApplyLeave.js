import React from "react";
import { UserProfile } from "../../components/UserProfile";
import { Addbtn } from "../../components/Addbtn";
import { NavLink } from "react-router-dom";
import { LeaveRecord } from "./LeaveRecord";

export const ApplyLeave = () =>{
    return(
       <>
       <div className="">
        <UserProfile/>
       </div>
       <div className=" ">
       <NavLink to="/employee/leave_form">
       <Addbtn/>
       </NavLink>
       </div>
       <div>
       <LeaveRecord />
       </div>
       </>
    )
}
