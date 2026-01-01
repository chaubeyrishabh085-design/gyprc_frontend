import React from "react";
import { IoAddOutline } from "react-icons/io5";

export const Addbtn = () =>{
    return(
         <>
        <div className="addBtn mx-2 mt-5 cursor-pointer">
        <div className="border-2 border-red-600 rounded-full w-11 h-11  ">
           <span className="text-3xl text-red-600 font-bold relative left-1 top-1">
           <IoAddOutline/>
           </span>
         </div>
        </div>
         </>
    )
}
