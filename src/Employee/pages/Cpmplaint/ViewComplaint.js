import React from "react";
import { NavLink ,useLocation} from "react-router-dom";
import { UserProfile } from "../../components/UserProfile";
import { useSelector } from 'react-redux';

export const ViewComplaint = () =>{ 
    const location=useLocation();
    const compData=location?.state;
    const empData=useSelector(state=>state?.user?.userData);

    return(
        <>
           <div className="">
            <UserProfile/>
           </div>
           
           <div className="viewComplaint flex justify-center mt-5 ">
           <div className=" px-2 w-[70%] bg-white  shadow px-3 py-3">
            <div>
               <h1 className="text-orange-500 text-3xl font-semibold ">
               <span> Complaint Id {compData?.id}, </span><span>Status {compData?.status}</span>
               </h1>
            </div> 
                <div className="compName ">
                    <h3 className="text-medium mb-1 mt-2 font-semibold">Name</h3>
                    <p text-base >{empData?.username}</p>
                </div>
                <div className="ComDate">
                    <h3 className="text-medium mb-1 mt-2 font-semibold">Compliant Date</h3>
                    <p>{compData?.date}</p>
                </div>
                <div className="compDesc">
                    <h3 className="text-medium mb-1 mt-2 font-semibold" >Description</h3>
                    <p>{compData?.description}</p>
                </div>
                <div className="compDesc">
                    <h3 className="text-medium mb-1 mt-2 font-semibold" >Feedback</h3>
                    <p>{compData?.feedback}</p>
                </div>
          </div>
           </div>
          
        </>
    )

}
