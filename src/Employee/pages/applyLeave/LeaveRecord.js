import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from 'react-toastify';

export const LeaveRecord = () =>{
    const [leaveData,setLeave]=useState([]);
    const [is_deleted,setDeleted]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
      (async()=>{
        const res=await postData1("api/v1/leaves/",{},true);
        if(res?.status_code===200){
          setLeave(res?.data?.reverse());
        }

      })()
    },[is_deleted]);

    const handleViewLeave=(e,data)=>{
      e.preventDefault();
      navigate("/employee/view-leave-records",{state:data});
      
    }

    const handelDelete=async (id)=>{
      let data={id:id,is_deleted:true}
      const res=await postData1("api/v1/add_leave/",data,true);
      if(res?.status_code===200){
        setDeleted(id)
      }
      else{
        toast.error("Something went wrong, try again !");
      }
    }

    return(
        <>
           <div className="leaveRecord flex justify-center">
           <div className="mx-2">
             <h1 className="text-3xl font-semibold text-orange-600 ">Leave Records</h1>
             <div className=" mt-5 bg-white py-5 rounded shadow-md overflow-auto ">
                <table className="min-w-full divide-y divide-gray-200 max-sm:w-[200%]">
                    <tr className="grid grid-cols-6 text-center text-xl text-gray-700 ">
                        <th className="px-6 sm: py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">Leave Id </th>
                        <th className="px-6 sm: py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">Request Date</th> 
                        <th className="px-6 sm: py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">Status</th>
                        <th className="px-6 sm: py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">Days</th>
                        <th className="px-6 sm: py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">Delete</th>
                        <th className="px-6 sm: py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center">Detail</th>
                    </tr>
                    {
                      leaveData?.map((data,index)=>{
                        return(
                          <tr key={index} className="grid grid-cols-6   text-center text-xl mt-5">
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center font-semibold	">{data?.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center" >{data?.request_date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center">{data?.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center">{data?.ndays}</td>
                            <td className="text-red-600 cursor-pointer px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center" onClick={()=>handelDelete(data?.id)}>
                                <span><i className="bi bi-archive-fill"></i></span>
                            </td>
                          <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center">
                            <NavLink to="" onClick={(e)=>handleViewLeave(e,data)}><span className="text-blue-600">View</span></NavLink>
                          </td>
                          
                        </tr>
                        )
                      })
                    }
                    
                </table>
             </div>
            </div>
          </div>
        </>
    )

}
