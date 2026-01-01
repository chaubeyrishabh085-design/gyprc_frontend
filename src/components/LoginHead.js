import React from "react";
import logo from "../assets/data/logdo.png"

export const LoginHead = () =>{
    return(
        <div className="loingHead px-5 py-3 ">
            <div className="logo flex justify-center ">
                <img className="w-[280px] h-[80px]" src={logo} alt="" />
              {/* <img className="w-[40px] md:w-[60px] xl:w-[60px]   " src={logo} alt="ALT" /> */}
              {/* <h1 className="text-xl md:text-4xl md:text-4xl h-[80px] md:-[78px] xl:h-[78px] font-bold text-center text-orange-500 pt-5 md:pt-5 xl:pt-5">GET YOUR PROJECT READY PRIVATE LIMITED</h1> */}
            </div>

            <div></div>
        </div>
        
    )
}
