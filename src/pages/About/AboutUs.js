import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import { BiCheck } from "react-icons/bi";

export const AboutUs = () => {
  return (
    <>
      <div className="bg-white ">
        <div
          className=" mt-[90px] text-center pt-5 pb-16  jersey-25-regular relative max-sm:px-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.8), rgba(21,40,59, 0.8)), url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
            backgroundRepeat:"no-repeat"
          }}
        >
            <div class=" animate-linear-move">
    <div class="absolute -z-1 w-3 h-3 top-14 border-2 opacity-30 border-white rotate-square"></div>
    <div class="absolute -z-1 w-3 h-3 bottom-8 border-2 opacity-30 border-white rounded-full rotate-circle1"></div>
    <div class="absolute -z-1 w-3 h-3 top-14 right-6 border-2 opacity-30 border-white rounded-full rotate-circle2"></div>
    <div class="absolute -z-1 w-3 h-3 bottom-10 right-0 border-2 opacity-30 border-white  rotate-circle3"></div>
              </div>

  <div class="absolute w-4 h-4 top-[180px] right-24 border-2 opacity-30 border-blue-500 rotate-square"></div>
  <div class="absolute w-4 h-4 bottom-[50px] left-10 border-2 opacity-30 border-blue-500 rotate-square"></div>

          <h1 className="text-5xl max-sm:4xl py-10 text-orange-500 inria-serif-bold  ">About Us</h1>
          <p className=" text-2xl max-sm:text-base inria-serif-light   text-white lg:px-24">
          At GYPRC, we believe in the power of collaboration and innovation to drive positive change in the world. Our venture consists of a group of five dynamic companies, each with its own unique strengths and expertise, working together to create a brighter future.


          </p>
        </div>
        <div className="container mx-auto py-10 lg:w-[80%] -z-0 max-sm:px-3">
          <div className="flex justify-center items-center flex-col mb-5">
          <h1 className="text-xl  text-gray-700 px-3 leading-6 mt-3">
          Together, we are GYPRC – a force for positive change, innovation, and collaboration
          </h1>
         
            <hr className="w-[100px] h-[3px] text-black bg-orange-500" />
          </div>
          <p className="text-base text-gray-600 px-3 inria-serif-light leading-6">
          At GYPRC, we believe in the power of collaboration and innovation to drive positive change in the world. Our venture consists of a group of five dynamic companies, each with its own unique strengths and expertise, working together to create a brighter future. </p>
          <ul className="">
         <li className="text-base text-gray-600 px-3 inria-serif-light leading-6 mt-3 list-disc">TeacherCool.com is our flagship education platform, dedicated to providing top-quality IT sector courses to aspiring professionals</li> 
          <li className="text-base text-gray-600 px-3 inria-serif-light leading-6 mt-3 list-disc">
          EquipMedy.com is revolutionizing the healthcare industry by providing a seamless platform for buying and selling medical equipment and supplies. 
          </li>
          <li className="text-base text-gray-600 px-3 inria-serif-light leading-6 mt-3 list-disc">
          Nimmin leads the way in sustainability, manufacturing eco-friendly products from organic waste materials.
          </li>
          <li className="text-base text-gray-600 px-3 inria-serif-light leading-6 mt-3 list-disc">
          BitBeeMedia.com is our digital marketing arm, helping businesses thrive in the digital landscape with cutting-edge marketing strategies. 
          </li>
          <li className="text-base text-gray-600 px-3 inria-serif-light leading-6 mt-3 list-disc">
          Tingletaste.com brings the flavors of India to you, offering authentic Indian cuisine with a modern twist.
          </li>
          
       
          </ul>
        
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
        className=" ourProcess mx-auto jersey-25-regular py-14 max-sm:px-3 "
        style={{
          background: `linear-gradient(to bottom, rgba(21,40,59, 0.8), rgba(21,40,59, 0.8)), url(${img1})`,
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}>
       
        <div className=" container mx-auto mb-12 ">
          <h1 className="text-orange-500 text-center text-5xl  mb-12">Our process is a 4-Way Cyclic and starts with</h1>

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
         <div className="container mx-auto lg:w-[80%] px-2 ">
            <div className="approach flex md:flex-row max-sm:flex-col sm:flex-col  py-10 gap-5 ">

                <div className="left lg:w-1/2 max-sm:w-full sm:w-full max-sm:px-3 ">
                    <div className="text-center  py-10 ">
                     <h1 className="text-4xl font-semibold inria-serif-bold text-gray-600 " >Our Approach</h1>
                     <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
                     <div className="text-start">
                     <p className="mt-5 text-base text-gray-600 inria-serif-light leading-7 ">Life has become easier in the modern world, but there are also security problems because of the unwelcome presence of people in business networks. Taking care of the primary issue—behaving like an enemy who can enter and stay hidden—is how you defend yourself.</p>

                     <p className="mt-5 text-base text-gray-600 inria-serif-light leading-7">We support your proactive and leftward movement by encouraging early security adoption. We also provide you with the knowledge and resources you need to neutralize these as-yet-unknown adversaries by being proactive with your networks and apps. We help you secure your cyberspace and hunt for the Jackdaw like a Jerquer. Our all-encompassing strategy for reducing security exposure is built around this.</p>
                     </div>
                    </div>
                </div>
            <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 rounded-sm " > 
            <h1 className="max-sm:text-4xl text-4xl text-center text-orange-500 jersey-25-regular mb-5" >Discovering The Unkown</h1>
            <div className="py-4 text-base inria-serif-light text-white ">
            <p>
            At GYPR, our approach is centered on delivering excellence in every service we provide. From empowering individuals through quality education to enhancing healthcare accessibility, we are committed to creating lasting value. 
            </p>

              <p className="mt-6">
              Our sustainable solutions are designed to support a healthier planet, while our FMCG services focus on meeting consumer needs with efficiency and integrity. By integrating innovation with a people-first mindset, we aim to make a positive impact across all the sectors we serve.
              </p>
            </div>

            </div>
            </div>

         </div>
        </>
    )
}
