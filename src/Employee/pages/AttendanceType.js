
import React, { useState } from 'react';
import { UserProfile } from '../components/UserProfile';
import profileImg from "../../assets/data/pro1.jpg"


export const ViewAttendance = () =>{
   return(
       <>
       <div className="flex px-2 gap-5">
           <img className="w-14 h-14 rounded-full" src={profileImg} alt="" />
          <div>
          <h1 className="text-3xl text-blue-900 font-semibold mb-2" >Welcome Back, Amit-be.@ypr.in</h1>
           <p>Inspiration does exist, but it must find you working.</p>
          </div>
       </div>
       {/* <div>
          <Calendar/>
          </div> */}
       </>
   )
}

export const AttendanceType = () =>{
    return(
        <>
        <div className="attendanceType flex justify-center">
           <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6">
           <div className="flex gap-1 items-center ">

                <span className="bg-green-500 w-5 h-5"></span>
                <p className="text-base font-semibold">Present</p>
             </div>
             <div className="flex gap-1 items-center ">
                <span className="bg-red-500 w-5 h-5"></span>
                <p className="text-base font-semibold">Absent</p>
             </div>
             <div className="flex gap-1 items-center ">
                <span className="bg-yellow-500 w-5 h-5"></span>
                <p className="text-base font-semibold">Leave</p>
             </div>
             <div className="flex gap-1 items-center ">
                <span className="bg-gray-500 w-5 h-5"></span>
                <p className="text-base font-semibold">Half</p>
             </div>
             <div className="flex gap-1 items-center ">
                <span className="bg-blue-500 w-5 h-5"></span>
                <p className="text-base font-semibold">W/o</p>
             </div>
             <div className="flex gap-1 items-center ">
                <span className="bg-blue-900 w-5 h-5"></span>
                <p className="text-base font-semibold">Holiday</p>
             </div>     
           </div>

        </div>
        </>

    )
}