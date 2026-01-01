import React from "react";
import { UserProfile } from "../../components/UserProfile";
import { Addbtn } from "../../components/Addbtn";
import { NavLink } from "react-router-dom";
import { ComplaintRecord } from "./ComplaintRecord";

export const Complaint = () =>{
    return(
        <>
       
        <div className="">
        <UserProfile/>
       </div>
       <div className=" ">
       <NavLink to="/employee/complaint-form">
       <Addbtn/>
       </NavLink>
       </div>
      <div>
        <ComplaintRecord/>
      </div>

     
  
        </>
    )

}