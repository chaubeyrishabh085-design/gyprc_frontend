import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../../components/assets/images/hero1.jpg";
import logo from "../../components/assets/images/logdo2.png";
import equipmedy from "../../assets/data/equipm1.png"

export const EquipMedy = () => {
  const EquipMedyData = [
    {
      quote:
        "EquipMedy.com is an Indian online platform where doctors, hospitals, manufacturers, distributors, and suppliers can easily Sell and Buy pre-owned or new medical equipment, consumables, and related services.",
      companyLogo: img1,
    },
    {
      quote:
        "  In a nation pulsating with life, accessibility of latest medical technologies and equipment to healthcare professionals remains a complex challenge. At EquipMedy™, we've embarked on a mission to transform this narrative, ensuring that every healthcare professional, has the power to provide the best medical treatment to their patients.",
      companyLogo: img1,
    },
    {
      quote:
        "We strongly believe that every doctor in our country possesses immense capabilities to provide the best medical treatment, given access to the latest medical equipment and devices. Currently, this access is limited to a few healthcare professionals which make patients to struggle for proper healthcare facilities.",
      // author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div
      className="mt-[0px]"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.8), rgba(21,40,59, 0.8)), url(${img1})`,
      //   backgroundSize: "100% 100%",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="container mx-auto mb-4  lg:px-8 max-sm:px-2 ">
        <div className="py-10 ">
          <h1 className=" max-sm:text-4xl text-5xl font-bold inria-serif-bold text-orange-500">EquipMedy
          </h1>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          {/* ----Company left img---- */}
          <div class="w-1/3 h-full max-sm:w-full relative group shadow-sm ">
            <img className="h-[400px]  rounded-[20px] " src={equipmedy} alt="companyImage" />

            {/* <!-- companyLink --> */}
            <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px] ">
              <div className="  ">
                <a
                  class=" font-bold text-lg inria-serif-bold   block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white"
                  href="https://equipmedy.com/"
                >
                  Visit this Website
                </a>
              </div>
            </div>
          </div>

          <div className=" w-2/3 max-sm:w-full   ">
            <div className="items-center mt-14">
              {/* <TestimonialSlider testimonials={EquipMedyData} /> */}
              <TestimonialSlider testimonials={EquipMedyData} backgroundColor="red" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
