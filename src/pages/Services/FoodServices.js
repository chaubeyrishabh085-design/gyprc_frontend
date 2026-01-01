import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import { BiCheck } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import tinglet from "../../assets/data/gyprclogo.png"
import { Link } from "react-router-dom";

export const FoodServices = () => {
  return (
    <>
      <div className="bg-white">
        <div
          className="mt-[90px] text-center pt-5 pb-16  relative max-sm:px-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-5xl max-sm:text-4xl py-8  inria-serif-bold text-orange-600  ">Food Services</h1>
          <p className="text-white text-xl xl:px-10 max-sm:text-base px-2  inria-serif-thin">
          Tingletaste.Com, part of GYPRC, brings the true flavors of India to your plate. Our numerous menu of Indian delicacies, organized with care and expertise, offers a culinary revel in like no other. We provide a vibrant and authentic eating experience, showcasing the rich and various flavors of Indian delicacies. From conventional favorites to fashionable creations, each dish at Tingletaste.com is ready with passion and expertise, making sure a memorable dining experience for our visitors. </p>
        </div>
        
        <div className="container mx-auto py-10 lg:w-[80%] -z-0 ">
          <div className="flex justify-center mb-5">
         
          <div className="flex justify-evenly items-center gap-4">
              <img src={tinglet} className="h-[70px] xl:h-[100px]" alt="" />
              <Link
                to="https://www.tingletaste.com"
                className="bg-orange-500 inria-serif-bold text-white py-2 xl:px-6 px-3 hover:text-white rounded-sm text-xl max-sm:text-base font-semibold"
              >
                Visit Our Website
                <hr className="w-[100px] h-[2px]  bg-white" />
              </Link>
            </div>
          </div>
          <p className="text-base text-gray-600 px-4">
          At TingleTaste, we’re passionate about serving up flavors that leave you craving more! Our finger-licking dishes are crafted with the finest ingredients, bursting with taste and guaranteed to satisfy every palate. Whether it’s a quick bite or a gourmet meal, we’re dedicated to delivering culinary excellence with every order. Let us take your taste buds on an unforgettable journey—one delicious bite at a time!
          </p>
          <p  className="text-base text-gray-600 px-4 mt-5">
          Enjoy the most popular breakfast dish in India crafted from flattened, dehusked rice. It is mild, clean to digest, and a nutritious meal option. Poha is wealthy in carbohydrates, which provide energy, and it's also a good source of iron and fiber. It is low in calories and fats, making it a wholesome breakfast choice
          </p>
        </div>

        {/* Our process  */}
        <OurProcess />
        <Approach/>

      </div>
    </>
  );
};

export const OurProcess = () => {
  return (
    <>
      <div
        className=" ourProcess mx-auto jersey-25-regular py-14 px-4 "
        style={{
          background: `linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0, 0.9)), url(${img1})`,
        }}>
        <div className=" container mx-auto mb-12 ">
          <h1 className="text-white text-center text-5xl max-sm:text-4xl  mb-12">Our process is a 4-Way Cyclic and starts with</h1>

          <div class="container mx-auto lg:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Discover and Define</h1>
            </div>

            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Identify, Automate & Modify</h1>
            </div>

            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Mitigate, Protect and Prevent</h1>
            </div>

            <div className="flex gap-2">
            <span className="" ><BiCheck class="text-4xl block font-bold  text-blue-400 " /></span>               
              <h1 className="text-2xl text-white">Rediscover and Repeat</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const Approach = () =>{
    return(
        <>
         <div className="container mx-auto lg:w-[80%] px-2">
            <div className="approach flex md:flex-row max-sm:flex-col sm:flex-col  py-10 gap-10 ">

                <div className="left lg:w-1/2 max-sm:w-full sm:w-full">
                    <div className="text-center  py-10 ">
                     <h1 className="text-4xl text-gray-700  inria-serif-bold" >Help contain risk, embrace change, and elevate trust</h1>
                     <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
                     <div className="">
                     <p className="mt-5 text-base text-gray-600">At Tingletaste, we bring you the most Delhi-cious and tempting food that’s guaranteed to be finger-licking good! Our mouthwatering dishes are crafted with authentic flavors and fresh ingredients, making every bite a flavorful adventure. Whether you're craving classic street food or indulgent gourmet meals, our menu is designed to satisfy your taste buds and keep you coming back for more! Dive into the ultimate food experience with us!</p>

                    
                     </div>
                    </div>
                </div>
            <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 " > 
            <h1 className="max-sm:text-4xl text-4xl text-center text-orange-500 jersey-25-regular mb-5  inria-serif-bold" > Don't think of calories, time to make memories</h1>
            <div className="py-4 text-base text-white">

              <p className="mt-6">
              At TingleTaste, it’s not about counting calories—it’s about enjoying the moment! Indulge in delicious flavors, create lasting memories, and savor every bite. Life’s too short to skip the good stuff, so let’s make every meal a celebration!
              </p>
               <div className="flex justify-center mx-auto mt-16 py-2 rounded-[1px] items-center gap-4 bg-orange-500 hover:bg-orange-400 w-[200px]"> 
               <Link to="/contact-us">
                  {" "}
                  <button className="" type="submit">
                    CONTACT NOW
                  </button>
                </Link>
                  <RiSendPlane2Fill />
               </div>
            </div>

            </div>
            </div>

         </div>
        </>
    )
}
