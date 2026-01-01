import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TestimonialSlider } from "../../Testimonials/Testimonial";
import img1 from "../../components/assets/images/hero2.png"
import bitbee from "../assets/images/Bitbee 729x1064.jpg"

import logo from "../../components/assets/images/logdo2.png"
import { Link } from "react-router-dom";


export const BitBee = () => {
  const BitBee = [
    {
      quote:
        "Bitbee Media is a team of innovative & creative minds, with value-based strategies to achieve your business goals to make it a Popular Global Brand. Our strategies will ensure an assurance of the quality as the Best Digital Marketing Agency in Delhi | India.",
      companyLogo: img1,
    },
    {
      quote:
        " We are a one-stop service, as we tailor strategies as per your unique needs. Our creative wizards are experts in ROI focused marketing. We have done remarkably very well as a Top SEO company in Delhi NCR.",
      companyLogo: img1,
    },
    {
      quote: "With our strategic social media plan, we successfully create a brand image in the minds of the prospective buyers, regarding the brand and thereby help them in grasping a larger base of the audience for selling their products and services.",
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
        <h1 className="text-5xl max-sm:text-4xl font-bold inria-serif-bold text-orange-500">BitBee Media </h1>
      </div>
      <div className="flex max-sm:flex-col gap-5">
              {/* ----Company left img---- */}
              <div class="w-1/3 h-full max-sm:w-full relative group">
    <img className="h-[400px]" src={bitbee} alt="companyImage" />
           
    {/* <!-- companyLink --> */}
    <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-gray-800  group-hover:opacity-90 transition-opacity flex justify-center items-center">
       <div className="  ">
       <Link to="https://www.bitbeemedia.com" className='font-bold text-lg block p-2 bg-white text-black rounded hover:bg-blue-900 hover:text-white'   >Visit this Website</Link>
       </div>
    </div>
</div>
        <div className="w-2/3 max-sm:w-full mt-14">
          <TestimonialSlider testimonials={BitBee} />
        </div>
      </div>
    </div>
    </div>
  );
};