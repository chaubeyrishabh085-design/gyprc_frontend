import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserProfile } from "../../components/UserProfile";
import { useSelector } from 'react-redux';

export const ViewLeaveRecord = () =>{
    const location=useLocation();
    const leaveData=location?.state;
    const empData=useSelector(state=>state?.user?.userData);
    return(
        <>
           <div className="">
            <UserProfile/>
           </div>
           
           <div className="viewLeave bg-white rounded shadow w-[90%] m-auto mt-5">
           <div className=" px-5 py-3 ">
            <div>
               <h1 className="text-orange-500 text-2xl font-semibold ">
               <span> Leave Id {leaveData?.id} </span>, 
               <span>Status {leaveData?.status}</span></h1>
            </div> 
                <div className="LeaveDetails">
                    <h3 className="text-lg text-gray-600 font-semibold">Name</h3>
                    <p className="text-lg">{empData?.username}</p>
                </div>
                <div className="LeaveDetails">
                    <h3 className="text-lg text-gray-600 font-semibold">Leave Request Date</h3>
                    <p>{leaveData?.request_date}</p>
                </div>
                <div className="LeaveDetails">
                    <h3 className="text-lg text-gray-600 font-semibold">From & To</h3>
                    <p>{leaveData?.start_date} to {leaveData?.end_date}</p>
                </div>
                <div className="LeaveDetails">
                    <h3 className="text-lg text-gray-600 font-semibold">Total Days</h3>
                    <p>{leaveData?.ndays}</p>
                </div>
                <div className="LeaveDetails">
                    <h3 className="text-lg text-gray-600 font-semibold" >Description</h3>
                    <p>{leaveData?.description}</p>
                </div>
                <div className="LeaveDetails">
                    <h3 className="text-lg text-gray-600 font-semibold" >Feedback</h3>
                    <p>{leaveData?.feedback}</p>
                </div>
          </div>
           </div>
          
        </>
    )

}
