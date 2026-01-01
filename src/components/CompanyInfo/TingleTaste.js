import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../../components/assets/images/hero1.jpg";
import logo from "../../components/assets/images/logdo2.png";
import tingle from "../assets/images/tingle taste729x1064.jpg"
import { NavLink } from "react-router-dom";
import bgImg from "../../assets/data/aboutbg.png"



export const TingleTaste = () => {
  const tingletaste = [
    {
      quote:
        "Tingletaste.Com, part of GYPRC, brings the true flavors of India to your plate. Our numerous menu of Indian delicacies, organized with care and expertise, offers a culinary revel in like no other.",
      companyLogo: img1,
    },
    {
      quote:
        " We provide a vibrant and authentic eating experience, showcasing the rich and various flavors of Indian delicacies. From conventional favorites to fashionable creations, each dish at Tingletaste.com is ready with passion and expertise, making sure a memorable dining experience for our visitors.",
      companyLogo: img1,
    },
    {
      quote:
      "Burgers are a popular fast food item such as a cooked patty of beans, lentils, or vegetables, served in a sliced bread roll referred to as a bun. The available types of burgers based.",
      // author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div
      className=" pb-5 bg-orange-50"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), url(${bgImg})`,
      //   backgroundSize: "100% 100%",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="container mx-auto mb-8  lg:px-8 max-sm:px-2 ">
        <div className="py-10 ">
          <h1 className=" max-sm:text-4xl text-5xl font-bold inria-serif-bold text-orange-500">Tingle Taste
          </h1>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          {/* ----Company left img---- */}
          <div class="w-1/3 h-full max-sm:w-full relative group shadow-sm ">
            <img className="h-[400px]  rounded-[20px] " src={tingle } alt="companyImage" />

            {/* <!-- companyLink --> */}
            <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px] ">
              <div className="  ">
               <NavLink to="https://tingletaste.com/"> <p
                  class="  font-bold text-lg    block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white"
                 
                >
                  Visit this Website
                </p></NavLink>
              </div>
            </div>
          </div>

          <div className=" w-2/3 max-sm:w-full   ">
            <div className="items-center mt-14">
              {/* <TestimonialSlider testimonials={tingletaste} /> */}
              <TestimonialSlider testimonials={tingletaste} backgroundColor="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
