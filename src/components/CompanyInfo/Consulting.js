import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../../components/assets/images/hero2.png"
import Consultingimg from "../assets/images/gyprcconsulting image2.png"

import logo from "../../components/assets/images/logdo2.png"
import { Link } from "react-router-dom";


export const Consulting = () => {
  const Consulting = [
    {
      quote:
        "Comprehensive consulting services designed to optimize your business processes, improve efficiency, and guide your organization through growth and transformation. Our expert consultants bring years of industry experience and insights, ensuring that your company remains competitive and adaptable in an ever-changing business landscape.",
      companyLogo: img1,
    },
    {
      quote:
        "⦁	Finding the right talent can be challenging, but at GYPRC, we make it simple. We provide full-service staffing solutions that connect you with skilled professionals across various industries. Whether you need temporary, permanent, or project-based staff, we ensure you get the perfect match for your team and company culture.",
      companyLogo: img1,
    },
    {
      quote: "⦁	Committed to help businesses thrive by providing top-tier consulting and staffing solutions tailored to meet your unique needs. Whether you're looking to build a dynamic team or seeking expert advice to navigate complex business challenges, GYPRC has the expertise and resources to drive your success.",
      // author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="bg-orange-50"
    //  style={{backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`, backgroundSize: '100% 100%', backgroundAttachment:"fixed" }}
     >
    <div className="container mx-auto  pb-20 lg:px-8 "   >
      <div className="py-10">
        <h1 className="text-5xl max-sm:text-4xl font-bold inria-serif-bold text-orange-500">GYPR consulting service</h1>
      </div>
      <div className="flex max-sm:flex-col gap-5">
              {/* ----Company left img---- */}
              <div class="w-1/3 h-full max-sm:w-full relative group">
    <img className="h-[400px]" src={Consultingimg} alt="companyImage" />
           
    {/* <!-- companyLink --> */}
    <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center">
       <div className="  ">
       <Link to="/product/consulting" className='font-bold text-lg block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white'   >Visit this services</Link>
       </div>
    </div>
</div>
        <div className="w-2/3 max-sm:w-full mt-14">
          <TestimonialSlider testimonials={Consulting} />
        </div>
      </div>
    </div>
    </div>
  );
};