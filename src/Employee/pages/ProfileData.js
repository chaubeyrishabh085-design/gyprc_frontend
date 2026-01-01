import React from "react";
import { UserProfile } from "../components/UserProfile";
import { useSelector } from 'react-redux';

export const ProfileData = () =>{
    const empData=useSelector((state)=>state?.user?.userData);
    return(
        <>
        <div className="">
         <UserProfile/>
        </div>

       <div className=" flex  justify-center w-[100%]">
      <div className="ProfileData grid max-sm:grid-cols-1  max-xl:grid-cols-2 max-2xl:grid-cols-2 gap-3 max-2xl:gap-5 bg-white px-5 py-2 shadow	mt-4 rounded overflow-x-auto h-[70vh] no-scrollbar ">
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataName text-lg font-bold  text-gray-700">Username:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.username}</h4>
            </div>

            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Employee ID:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">GYPR-{empData?.emp_id}</h4>
            </div>

            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">First Name:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.first_name}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Last Name:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.last_name}</h4>
            </div>

            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Gender:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.gender}</h4>
            </div>   
             <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Date Of Birth:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.dob}</h4>
            </div>  

              <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Mobile:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.mobile}</h4>
            </div>  
           <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Email:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.email}</h4>
            </div>  

              <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Adress:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.address}</h4>
            </div>   
            
              <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Desgination:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.desgination}</h4>
            </div>  

            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Joining_date:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.joining_date}</h4>
            </div>

            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Department:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.department}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Total Salary:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.total_salary}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Employee Type:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.emp_type}</h4>
            </div>

            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Bank Name:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.bank_name}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Bank Account:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.bankac}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">EPF NO.:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.pfno}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">EPF Amount:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.pf_amount}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">ESIC Amount:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.esi_amount}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Basic Salary:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.basic}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">DA:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.DA}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">HRA:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.HRA}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Other Income:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.other}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Medical:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.medical}</h4>
            </div>
            <div  className="data flex gap-3 items-center max-sm:w-[280px] max-xl:w-[400px]">
                <h3 className=" max-sm:min-w-[110px] dataNametext-lg font-bold text-gray-700">Advance Taken:</h3>
                <h4 className="dataValue text-gray-700 text-base font-semibold">{empData?.payroll?.advance}</h4>
            </div>
          
        </div>
 

       </div>
        </>
    )

}