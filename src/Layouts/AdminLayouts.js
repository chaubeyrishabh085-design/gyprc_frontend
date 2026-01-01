import React from "react";
import {Sidebar} from "../Admin/components/Sidebar"
import { Outlet } from "react-router-dom";
import { TopBar } from "../components/Topbar";

export const AdminLayouts = () =>{
    return(
    <>
      <>
    <div className="max-sm:hidden max-md:hidden">
    <Sidebar>   
        <TopBar/>
        <Outlet/>
      </Sidebar>
    </div>
      </>

<div className="md:hidden">
<div className="">
<TopBar/>
<Sidebar/>  

</div>
   <Outlet/>
</div>
    </>
    )
}