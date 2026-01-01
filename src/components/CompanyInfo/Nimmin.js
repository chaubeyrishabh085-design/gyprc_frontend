import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../assets/images/nimmin 729x1064.jpg";
import logo from "../../components/assets/images/logdo2.png";
import nimmin from "../../components/assets/images/Nimmin.png"
import { Link } from "react-router-dom";


export const Nimmin = () => {
  const NimminData = [
    {
      quote:
        "Contains a unique combination of three specialized liquids that work together to restore and maintain the soil ecosystem for your plants. Perfect for all types of gardens, whether you have plants in pots or in the ground.",
      companyLogo: img1,
    },
    {
      quote:
        "Nimmin Housekeeping Brush Fiber Wet and Dry Multi use Brush. Flat and Strong Fiber for Best Result - Ergonomic Handle and Light Weight. High Quality cleaning Brooms & Brushes, All purpose dusting & cleaning Brush, Cleans Oily and Greasy surfaces with ease ",
      companyLogo: img1,
    },
    {
      quote:
        "Plant based vermi compost manure,100% Organic Fertilizer Enriched with all essential nutrients. Prepared using organic waste and dung in a specific proportion. Natural catalyst : Improves the Water holding capacity of soil that helps moister retention.",
      // author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div
      className=" pb-5"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url(${nimmin})`,
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto mb-10  lg:px-8">
        <div className="py-10 text-end">
          <h1 className="text-5xl inria-serif-bold max-sm:text-3xl max-sm:text-center font-bold text-white">
            Nimmin - MyBananaProduct
          </h1>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          <div className="w-2/3 max-sm:w-full mt-14">
            <TestimonialSlider testimonials={NimminData} />
          </div>
          {/* ----Company left img---- */}
          <div class="w-1/3 h-full max-sm:w-full relative group">
            <img className="h-[400px] rounded-[20px] " src={img1} alt="companyImage" />
            {/* <!-- companyLink --> */}
            <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px] ">
              <div className="  ">
              <Link to="https://www.bitbeemedia.com" className='font-bold inria-serif-bold text-lg block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white'   >Visit this Website</Link>

              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};





