import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import { BiCheck } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import teacherCool from "../../assets/data/logo.svg";
import { Link } from "react-router-dom";

export const EducationalS = () => {
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
          <h1 className="text-5xl max-sm:text-4xl inria-serif-bold py-8 text-orange-500">
            Educational Services
          </h1>
          <p className="text-white xl:px-10 max-sm:text-base  text-xl px-4 inria-serif-ligh">
            Welcome to TeacherCool, where knowledge meets innovation, and
            learning becomes an exciting journey! As a premier online platform
            for IT-based training, TeacherCool is committed to revolutionizing
            education by providing comprehensive, cutting-edge courses that
            empower individuals to thrive in the dynamic world of Information
            Technology. TeacherCool comes as a part of GYPR , dedicated towards
            transforming online learning for both IT and non-IT students. With
            the rich legacy and expertise of GYPR, we are carving our own
            learning path, providing top-notch educational experiences for
            modern learners.{" "}
          </p>
        </div>

        <div className="container mx-auto py-10 lg:w-[80%] -z-0 ">
          <div className="flex justify-center mb-5 py-4">
          <div className="flex justify-evenly gap-3 items-center">
              <img src={teacherCool} className="h-[60px] xl:h-[80px]" alt="" />
              <Link
                to="https://www.teachercool.com"
                className="bg-orange-500  inria-serif-bold text-white py-2 xl:px-6 px-3 hover:text-white rounded-sm text-xl max-sm:text-base font-semibold"
              >
                Visit Our Website
                <hr className="w-[100px] h-[2px]  bg-white" />
              </Link>
            </div>
          </div>
          <p className="text-base text-gray-600 px-4">
          Welcome to TeacherCool, where knowledge meets innovation, and learning becomes an exciting journey! As a premier online platform for IT-based training, TeacherCool is committed to revolutionizing education by providing comprehensive, cutting-edge courses that empower individuals to thrive in the dynamic world of Information Technology. TeacherCool comes as a part of GYPR , dedicated towards transforming online learning for both IT and non-IT students. With the rich legacy and expertise of GYPR, we are carving our own learning path, providing top-notch educational experiences for modern learners.
          </p>
        </div>

        {/* Our process  */}
        <OurProcess />
        <Approach />
      </div>
    </>
  );
};

export const OurProcess = () => {
  return (
    <>
      <div
        className=" ourProcess mx-auto jersey-25-regular py-14 "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className=" container mx-auto mb-12 px-4">
          <h1 className="text-orange-500 text-center text-5xl max-sm:text-4xl mb-12">
            Our process is a 4-Way Cyclic and starts with
          </h1>

          <div class="container mx-auto lg:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="flex gap-2">
              <span className="">
                <BiCheck class="text-4xl block font-bold  text-blue-400 " />
              </span>
              <h1 className="text-2xl text-white ">Discover and Define</h1>
            </div>

            <div className="flex gap-2">
              <span className="">
                <BiCheck class="text-4xl block font-bold  text-blue-400 " />
              </span>
              <h1 className="text-2xl text-white">
                Identify, Automate & Modify
              </h1>
            </div>

            <div className="flex gap-2">
              <span className="">
                <BiCheck class="text-4xl block font-bold  text-blue-400 " />
              </span>
              <h1 className="text-2xl text-white">
                Mitigate, Protect and Prevent
              </h1>
            </div>

            <div className="flex gap-2">
              <span className="">
                <BiCheck class="text-4xl block font-bold  text-blue-400 " />
              </span>
              <h1 className="text-2xl text-white">Rediscover and Repeat</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Approach = () => {
  return (
    <>
      <div className="container mx-auto lg:w-[80%] px-4">
        <div className="approach flex md:flex-row max-sm:flex-col sm:flex-col  py-10 gap-10 ">
          <div className="left lg:w-1/2 max-sm:w-full sm:w-full">
            <div className="text-center  py-10 ">
              <h1 className="text-3xl text-navBlue font-semibold inria-serif-bold ">
                Establishment, Mission & Vission
              </h1>
              <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
              <div className="text-start">
                <p className="mt-5 text-base text-gray-600 ">
                  At TeacherCool, we envision a future where learning is not
                  confined by physical boundaries. We strive to be the catalyst
                  for a global community of learners, breaking down barriers and
                  fostering a culture of continuous growth and development. Our
                  vision is to create a platform that transcends traditional
                  education, offering a diverse range of IT courses that cater
                  to learners of all levels, from beginners to seasoned
                  professionals.{" "}
                </p>

                <p className="mt-5 text-base text-gray-600">
                  Our mission is to bridge the gap between theoretical knowledge
                  and practical skills, preparing individuals to excel in the
                  rapidly evolving IT landscape. We are dedicated to
                  democratizing education, making quality IT training accessible
                  to anyone, anywhere. Through innovative teaching methods,
                  hands-on projects, and a commitment to excellence, TeacherCool
                  aims to equip learners with the skills and confidence needed
                  to succeed in their IT careers.
                </p>
              </div>
            </div>
          </div>
          <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 ">
            <h1 className="max-sm:text-4xl text-4xl text-center text-orange-500 inria-serif-bold mb-5">
              LEARN WITHOUT LIMITS
            </h1>
            <div className="py-4 text-base text-white">
              <p className="mt-6">
                TeacherCool - Empowering Minds Through Innovative Trainings for
                all your need whether it is IT/NON-IT for Individual, Corporate
                and Universities.
              </p>
              <p className="mt-4">
                {" "}
                We believe in staying ahead of the curve, constantly updating
                our courses to reflect the latest trends and technologies in the
                IT industry. Through innovative teaching methods and content
                delivery, we ensure our learners are well-prepared for the
                challenges of the digital era.
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
  );
};
