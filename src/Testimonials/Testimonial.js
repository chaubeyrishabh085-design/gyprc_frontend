import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import img1 from "../components/assets/images/hero1.jpg"
import logo from "../components/assets/images/logdo2.png"


export const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Aptara’sertise has streamlined and simplified our have a single, trusted content production partner to handle all of our digital publishing needs.",
      author: "Director, Publishing Operations",
      companyLogo: img1,
    },
    {
      quote:
        "Aptara’s unique combination of digital technology and publishing expertise has streamlined and simplified our operations. We now have a single, trusted content production partner to handle all of our digital publishing needs. ",
      author: "Director, Publishing Operations",
      companyLogo: img1,
    },
    {
      quote: "Another testimonial quote of digital of digital technology and publishing expertise has streamlined and simplified technology and publishing expertise has streamlined and simplified.",
      author: "Another Author",
      companyLogo: logo,
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="container mx-auto mb-10 py-10 lg:px-8">
      <div className="py-10">
        <h1 className="text-4xl font-bold">Testimonial</h1>
      </div>
      <div className="flex max-sm:flex-col gap-5">
        <div className="w-1/3 max-sm:w-full">
          <img src={img1} alt="companyImag" />
        </div>
        <div className="w-2/3 max-sm:w-full">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
};



export const TestimonialSlider = ({ testimonials }) => {
  const swiperRef = useRef(null);

  const handleClickPaginationBullet = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border rounded-[20px] hover:bg-blue-950  hover:text-white  min-h-[310px] max-h-[310px] p-6 font-medium text-gray-500 group">
              <p className="text-base inria-serif-light ">{testimonial.quote}</p>
              <p className="font-semibold text-gray-800  group-hover:text-orange-500 py-2">{testimonial.author}</p>
              {/* <div className="company-logo">
                <img className="h-[50px] w-[100px]" src={testimonial.companyLogo} alt="" />
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center absolute right-[200px] top-[-60px]">
        <div className="">
          <div className="button-next bgSlideBtn  relative top-[-5px] text-white bg-gray-400 left-14">
            <BiChevronRight className="text-4xl" />
          </div>
          <div className="button-prev bgSlideBtn relative top-[-41px] right-6 text-base text-white bg-gray-400">
            <BiChevronLeft className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};


