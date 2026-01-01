import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ProtectedRoute=({components})=>{
    const navigate=useNavigate();
    const location=useLocation();
    const currpath=location?.pathname;
    const isLogin=localStorage.getItem("token");
    const ut=localStorage.getItem("ut");
    useEffect(()=>{
        if(!isLogin){
            navigate("/login");
        }
        else{
            if(currpath.includes("employee") &&  ut==="admin"){
                navigate("/login");
            }
            if(currpath.includes("admin") &&  ut==="emp"){
                navigate("/login");
            }
        }

    },[])
    return components;
}