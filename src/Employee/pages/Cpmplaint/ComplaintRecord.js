import React,{ useEffect, useState }  from "react";
import { NavLink } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from 'react-toastify';

export const ComplaintRecord = () =>{
  const [compData,setcompData]=useState([]);
  const [is_deleted,setDeleted]=useState(false);

  const navigate=useNavigate();
  useEffect(()=>{
    (async()=>{
      const res=await postData1("api/v1/complaints/",{},true);
      if(res?.status_code===200){
        setcompData(res?.data?.reverse());
      }

    })()
  },[is_deleted]);

  const handleViewComp=(e,data)=>{
    e.preventDefault();
    navigate("/employee/view-complaint",{state:data});
  }

  const handelDelete=async (id)=>{
    let data={id:id,is_deleted:true}
    const res=await postData1("api/v1/add_complaint/",data,true);
    if(res?.status_code===200){
      setDeleted(id)
    }
    else{
      toast.error("Something went wrong, try again !");
    }
  }

    return(
        <>
           <div className="container ComplaintRecord flex justify-center">
           <div className="mx-auto max-sm:px-2 max-sm:pt-4 ">
             <h1 className="text-3xl font-semibold text-orange-600 ">Complaint Records</h1>
             <div className=" mt-5 bg-white  rounded shadow-md overflow-auto  ">
                <table className="min-w-full divide-y divide-gray-200 max-sm:w-[200%]">
                  <thead>
                    <tr className="grid grid-cols-6 text-center text-xl text-gray-700">
                        <th className="px-6 sm: py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">Complaint Id </th>
                        <th className="px-6 sm: py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">Request Date</th> 
                        <th className="px-6 sm: py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">Status</th>
                        <th className="px-6 sm: py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">Delete</th>
                        <th className="px-6 sm: py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">Detail</th>
                    </tr>
                    </thead>
                    {
                      compData?.map((data,index)=>{
                        return(
                          <tbody>
                          <tr className="grid grid-cols-6   text-center text-xl mt-5">
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center font-semibold">{data?.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center" >{data?.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center" >{data?.status}</td>
                            <td className="text-red-600 cursor-pointer px-6 py-4 whitespace-nowrap text-base  text-center" onClick={()=>handelDelete(data?.id)}> 
                                <span><i className="bi bi-archive-fill"></i></span>
                            </td>
                          <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center">
                            <NavLink to="" onClick={(e)=>handleViewComp(e,data)}><span className="text-blue-600">View</span></NavLink>
                          </td>
                        </tr>
                        </tbody>
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