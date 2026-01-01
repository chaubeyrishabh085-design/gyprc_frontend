import React from "react";
import { Hero } from "../../components/Sliders/HeroSlider";

import { ContactUs } from "../../components/ContactUs/Contact";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import { Nimmin } from "../../components/CompanyInfo/Nimmin";
import { BitBee } from "../../components/CompanyInfo/BitBeet";
import { TingleTaste } from "../../components/CompanyInfo/TingleTaste";
import { EquipMedy } from "../../components/CompanyInfo/EquipMedy";
import { TeacherCool } from "../../components/CompanyInfo/TeacherCool";
import { Expert } from "../../components/Expert/Expert";
import { Link } from "react-router-dom";
import { Consulting } from "../../components/CompanyInfo/Consulting";
export const Home = () =>{
    return(
        <>
      <div className="bg-white">
       
          
      <Hero/>
      <Expert/>
        {/* <ExpertArea /> */}
        <CompanyInfo/>
        <EquipMedy/>
        <TeacherCool/>
        <TingleTaste/>
        <Nimmin/>
        <BitBee/>
        <Consulting/>
       
        {/* <Testimonial/> */}
        <ContactUs/>
      </div>
        
        </>
    )
}

export const SideButton = () =>{
  return(
      <>
        <div className='left-[-85px] z-10 bottom-[100px]  fixed  '>
    <Link to="/login" >
    <button className='text-white text-xl max-sm:text-lg bg-orange-500 px-[30px] py-[6px] rotate-[-90deg]'>
      Team Dashboard
      </button>
    </Link>
    </div></>
  )
}