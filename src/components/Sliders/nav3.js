import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../components/assets/images/pro1.jpg'
import img2 from '../../components/assets/images/comp1.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

// export const HeroSlider = () => {
//   return (
//     <>
//    <div className='bg-white py-20'>
//    <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}

//         pagination={{
//           clickable: true,
//           el: '.swiper-pagination',
//         }}
        

//         // navigation={true}
//         navigation={{
//           nextEl: ".button-next",
//           prevEl: ".button-prev",
//         }}

        

//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className='bg-white'>
            
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>

//    <div className='ml-5'>
//    <div className='swiper-pagination mt-5 flex justify-center space-x-2 relative '>
//         <div className='swiper-pagination-bullet bg-blue-500 w-3 h-3 rounded-full'></div>
//         <div className='swiper-pagination-bullet bg-blue-500 w-3 h-3 rounded-full'></div>
//         <div className='swiper-pagination-bullet bg-blue-500 w-3 h-3 rounded-full'></div>
//         {/* Add more pagination bullets if needed */}
//       </div>
//    </div>

//       {/* <div className="flex justify-center mt-10 relative right-[300px]">
//     <div className="">
//         <div className="button-next bgSlideBtn relative top-[-5px] text-base text-red-600 left-14">
//             <BiChevronRight />
//         </div>
//         <div className="button-prev bgSlideBtn relative top-[-37px] right-14 text-base text-red-600">
//             <BiChevronLeft />
//         </div>
//     </div>
//     </div> */}
//    </div>
//     </>
//   );
// }



export const HeroSlider = () => {
  const swiperRef = useRef(null);

  const handleClickPaginationBullet = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className='bg-white pb-10'>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {/* Your Swiper slides here */}
        <SwiperSlide>
          <div className='flex justify-between max-md:flex-col gap-30 '>

            <div className='w-1/2 h-[90vh] max-md:w-full navbg1 '>
              <h1>dkfjdkj</h1>
            </div>
            {/* slider right side  */}
          <div className='relative   ' >
            <img className='h-[520px] lg:w-[780px] max-md:w-full border-2 shadow-lg shadow-gray-700 ' src={img2} alt="" />
            </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-between max-md:flex-col gap-30 '>

            <div className='w-1/2 h-[90vh] max-md:w-full navbg1 '>
              <h1>dkfjdkj</h1>
            </div>
            {/* slider right side  */}
          <div className='relative   ' >
            <img className='h-[520px] lg:w-[780px] max-md:w-full border-2  shadow-lg shadow-gray-700' src={img2} alt="" />
            </div>
          
          </div>
        </SwiperSlide>
      
        
    
    
       
        {/* Add more slides as needed */}
      </Swiper>

      {/* Custom pagination */}
   <div className='relative top-[-40px] right-[400px] '>
   <div className='swiper-pagination mt-5 flex justify-center space-x-2'>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className='swiper-pagination-bullet bg-blue-800 w-3 h-3 rounded-full cursor-pointer'
            onClick={() => handleClickPaginationBullet(index)}
          ></div>
        ))}
        {/* Add more pagination bullets if needed */}
      </div>
   </div>

      {/* Custom navigation */}
      {/* <div className='flex justify-center mt-10'>
        <div className=''>
          <div className='button-next bgSlideBtn relative top-[-5px] text-base text-red-600 left-14'>
            <BiChevronRight />
          </div>
          <div className='button-prev bgSlideBtn relative top-[-37px] right-14 text-base text-red-600'>
            <BiChevronLeft />
          </div>
        </div>
      </div> */}

    </div>
  );
};
