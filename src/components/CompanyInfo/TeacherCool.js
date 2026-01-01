import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import teachbg from "../../components/assets/images/comp1.jpg"

import img1 from "../assets/images/nimmin 729x1064.jpg";
import teachercool2 from "../assets/images/teacher cool 729x1064.jpg";

import logo from "../../components/assets/images/logdo2.png";
import nimmin from "../../components/assets/images/Nimmin.png"
import teachercool from "../../components/assets/images/teacher cool 729x1064.jpg"

import { Link } from "react-router-dom";


export const TeacherCool = () => {
  const teachercool = [
    {
      quote:
        "Welcome to TeacherCool, where knowledge meets innovation, and learning becomes an exciting journey! As a premier online platform for IT-based training, TeacherCool is committed to revolutionizing education by providing comprehensive, cutting-edge courses that empower individuals to thrive in the dynamic world of Information Technology",
      companyLogo: img1,
    },
    {
      quote:
        "TeacherCool comes as a part of GYPR , dedicated towards transforming online learning for both IT and non-IT students. With the rich legacy and expertise of GYPR,",
      companyLogo: img1,
    },
    {
      quote:
        "we are carving our own learning path, providing top-notch educational experiences for modern learners. 100% Confidential, A+ Quality Learning, 50+ Subjects Learning, 300+ Teaching Experts",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div
      className="mt-[50px] pb-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url(${teachbg})`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto mb-5  lg:px-8">
        <div className="py-10 text-end">
          <h1 className="text-5xl max-sm:text-4xl max-sm:text-center font-bold inria-serif-bold text-orange-500">
            TeacherCool
          </h1>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          <div className="w-2/3 max-sm:w-full mt-14">
            <TestimonialSlider testimonials={teachercool} />
          </div>
          {/* ----Company left img---- */}
          <div class="w-1/3 h-full max-sm:w-full relative group">
            <img className="h-[400px] rounded-[20px] " src={teachercool2} alt="companyImage" />
            {/* <!-- companyLink --> */}
            <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px]">
              <div className="  ">
              <Link to="https://teachercool.com/" className='font-bold text-lg block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white'   >Visit this Website</Link>

              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};





