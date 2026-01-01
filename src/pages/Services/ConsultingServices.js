import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import img2 from "../../components/assets/images/gyprconsulting1.png";

import { BiCheck } from "react-icons/bi";
import bitbeelogo from "../../assets/data/bitb.png";
import { Link } from "react-router-dom";
import { RiSendPlane2Fill } from "react-icons/ri";
import whyChoose from "../../components/assets/images/why_choose.png";
import { PiArrowFatRightFill } from "react-icons/pi";

export const ConsultingServices = () => {
  return (
    <>
      <div className="bg-white">
        <div
          className=" mt-[90px] text-center pt-5 pb-16  jersey-25-regular relative max-sm:px-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img2})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
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
          <h1 className="text-6xl max-sm:text-4xl py-10 text-orange-500 inria-serif-bold  ">
            GYPR Consulting Service
          </h1>
          <p className="text-white xl:px-10 max-sm:text-base text-xl px-4 inria-serif-light ">
            Tailored Consulting and Staffing Solutions for Your Success At
            GYPRC, we specialize in providing top-quality consulting and
            staffing solutions designed to help businesses thrive. Whether
            you're seeking expert guidance to navigate complex business
            challenges or looking to build a talented team, we deliver
            customized solutions that meet your unique needs. We are driven by
            our mission to empower businesses with the right expertise and
            workforce, setting the stage for long-term success.
          </p>
        </div>
        <div className="container mx-auto py-10 lg:w-[80%] -z-0  ">
          {/* 
          <div className="flex justify-center mb-5">
            <div className="flex justify-evenly items-center">
              <img src={bitbeelogo} className="h-[90px] xl:h-[100px]" alt="" />
              <Link
                to="https://www.bitbeemedia.com"
                className="bg-orange-500 inria-serif-bold text-white py-2 xl:px-6 px-3 hover:text-white rounded-sm text-xl max-sm:text-base font-semibold"
              >
                Visit Our Website
                <hr className="w-[100px] h-[2px]  bg-white" />
              </Link>
            </div>
          </div>
          */}
          <div className="flex justify-center mb-5">
            {/* <h1 className="text-4xl text-navBlue font-semibold ">Social Media Marketing</h1> */}
          </div>
          <div className="px-4">
            <ul className="text-base text-gray-600 px-3 leading-6 mt-5">
              <span className="text-3xl font-semibold inria-serif-bold text-orange-500 pr-2 text-end  ">
                Staffing Solutions
              </span>
              <li className="mt-2 text-gray-500">
                Building the right team is critical to the success of any
                organization, and at GYPRC, we make it easier. Our staffing
                solutions are flexible and tailored to your specific
                requirements, whether you need temporary staff, long-term hires,
                or project-based professionals. We specialize in connecting
                businesses with the best talent, ensuring that you find
                individuals who are not only skilled but also a perfect fit for
                your company culture.
              </li>
            </ul>
            <ul className="text-base text-gray-600 px-3 leading-6">
              <span className="text-3xl max-sm:text-lg font-semibold inria-serif-bold  text-orange-500 pr-2 ">
                Consulting Services
              </span>
              <li className="mt-2 text-gray-500">
                Our consulting services are designed to help your organization
                unlock its full potential, optimize operations, and achieve
                sustainable growth. We partner with businesses across various
                industries to provide strategic advice and actionable insights
                that enable better decision-making, efficient processes, and the
                ability to respond to market demands effectively.
              </li>
            </ul>
            <ul className="text-base text-gray-600 px-3 leading-6">
              <span className="text-3xl max-sm:text-lg font-semibold inria-serif-bold  text-orange-500 pr-2 ">
                Temporary Staffing
              </span>
              <li className="mt-2 text-gray-500">
                Whether you need additional support for a short-term project, a
                seasonal surge, or to fill in for absent employees, our
                temporary staffing services provide the flexibility to meet your
                needs. We maintain a strong network of qualified professionals
                who are ready to step in and contribute to your team with
                minimal onboarding, ensuring your business continues to run
                smoothly.
              </li>
            </ul>
            <ul className="text-base text-gray-600 px-3 leading-6">
              <span className="text-3xl max-sm:text-lg font-semibold inria-serif-bold  text-orange-500 pr-2 ">
                Permanent Placement
              </span>
              <li className="mt-2 text-gray-500">
                We specialize in finding the right talent for permanent
                positions across a wide range of industries. Our in-depth
                recruitment process ensures that the candidates we present are
                not only skilled but also a cultural fit for your organization.
                By understanding your business goals and values, we ensure that
                our permanent placements contribute to the long-term success of
                your company.
              </li>
            </ul>
            <ul className="text-base text-gray-600 px-3 leading-6">
              <span className="text-3xl max-sm:text-lg font-semibold inria-serif-bold  text-orange-500 pr-2 ">
                Contract-to-Hire
              </span>
              <li className="mt-2 text-gray-500">
                Our contract-to-hire solution offers a flexible approach to
                hiring. This allows you to evaluate a candidate’s fit and
                performance over a trial period before making a permanent offer.
                This model reduces risk and ensures that you’re making the right
                decision when hiring for critical roles.
              </li>
            </ul>
            <ul className="text-base text-gray-600 px-3 leading-6 mt-5">
              <span className="text-3xl max-sm:text-lg font-semibold inria-serif-bold  text-orange-500 pr-2 ">
                Industry Expertise
              </span>
              <li className="mt-2 text-gray-500">
                At GYPRC, we understand that each industry has unique
                requirements. That’s why our staffing experts specialize in
                sourcing talent for specific sectors, including IT, healthcare,
                finance, manufacturing, and more. Our extensive industry
                knowledge enables us to match the right candidates with the
                right companies, ensuring success on both sides.
              </li>
              <div>
                <ConsultingCardList seoData={ConsultingDataArray} />
              </div>
            </ul>
          </div>
        </div>

        {/* Our process  */}
        <OurProcess />
        <WhyChoose />
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
          background: `linear-gradient(to bottom, rgba(21,40,59, 0.8), rgba(21,40,59, 0.8)), url(${img1})`,
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className=" container mx-auto mb-12 ">
          <h1 className="text-orange-500 text-center text-5xl max-sm:text-4xl px-2  mb-12 ">
            Our process is a 4-Way Cyclic and starts with
          </h1>

          <div class="container mx-auto lg:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="flex gap-2">
              <span className="">
                <BiCheck class="text-4xl block font-bold  text-blue-400 " />
              </span>
              <h1 className="text-2xl text-white inria-serif-bold ">
                Discover and Define
              </h1>
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
      <div className="container mx-auto lg:w-[80%] px-2">
        <div className="approach flex md:flex-row max-sm:flex-col sm:flex-col  py-10 gap-5 ">
          <div className="left lg:w-1/2 max-sm:w-full sm:w-full px-6">
            <div className="text-center  py-10 ">
              <h1 className="text-4xl font-semibold text-gray-700 inria-serif-bold ">
                Our Strengths
              </h1>
              <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
              <ul className="text-start">
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  <b>Tailored Solutions : </b>
                  We deliver customized strategies that fit your specific
                  business needs, ensuring you get the most effective support.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  <b>Expert Guidance : </b>
                  Our team of seasoned consultants provides insight and advice
                  to help you navigate complex business challenges.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  <b>Talent Acquisition : </b>
                  We help you build a skilled workforce, ensuring your team has
                  the right talent for long-term success.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  <b>Mission-Driven Approach : </b>
                  Our goal is to empower your business, equipping you with the
                  tools and expertise necessary for sustainable growth.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  <b>Commitment to Success : </b>
                  We focus on creating lasting impacts, driving results that
                  contribute to your company's success for years to come.
                </li>
              </ul>
            </div>
          </div>
          <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 ">
            <h1 className="max-sm:text-3xl text-4xl text-center text-orange-500 inria-serif-bold  mb-5">
              The Best Consulting Service
            </h1>
            <div className="py-4 text-base text-white">
              <p>
                We understand that every business is unique. Our solutions are
                customized to meet your specific requirements and industry
                needs.
              </p>

              <p className="mt-6">
                Ready to elevate your business with expert consulting and
                staffing solutions? Get in touch with us today to explore how
                GYPRC can help you achieve your goals.
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

export const WhyChoose = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-700 inria-serif-bold ">
          Why Choose Us
        </h1>
        <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
      </div>
      <div className="flex flex-col md:flex-row w-[100%] gap-5 md:px-[5rem] px-5 mt-8">
        <div className="md:w-[50%] w-[100%]">
          <img className="rounded-md" src={whyChoose} alt="Why Choose Us" />
        </div>
        <div className="flex md:w-[50%] w-[100%] flex-col gap-5">
          <div className="flex gap-2 text-gray-500">
            <PiArrowFatRightFill className="text-2xl" />
            <p className="text-base">
              <span className="font-bold">Fast, Reliable Staffing:</span> We
              pride ourselves on delivering high-quality candidates quickly,
              reducing the time-to-hire and minimizing disruption to your
              operations.
            </p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <PiArrowFatRightFill className="text-2xl" />
            <p className="text-base">
              <span className="font-bold">Tailored Solutions:</span> We
              understand that every business is different. That’s why we provide
              customized staffing solutions that align with your specific needs.
            </p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <PiArrowFatRightFill className="text-2xl" />
            <p className="text-base">
              <span className="font-bold">Commitment to Excellence:</span> Our
              recruitment process is thorough and designed to match top talent
              with the right opportunities, ensuring long-term success. <br />
              Partner with GYPRC for your staffing needs and experience the
              difference that a dedicated, professional team can make for your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// seo data
const ConsultingDataArray = [
  {
    seotitle: "Our Mission",
    seodescription:
      "At GYPRC, our mission is to help businesses unlock their full potential through strategic consulting and exceptional staffing solutions. We strive to be a trusted partner, offering expertise and innovation that drive long-term success and empower our clients to achieve their goals.",
  },
  {
    seotitle: "Our Vision",
    seodescription:
      "Building the right team is critical to the success of any organization, and at GYPRC, we make it easier. Our sOur vision is to become a leader in consulting and staffing services, known for our ability to transform businesses and build high-performing teams. We aim to set a new standard of excellence, delivering value, trust, and measurable results to our clients.",
  },
  {
    seotitle: "Our Approach",
    seodescription:
      "At GYPRC, we believe in delivering solutions that are tailored to your specific needs. We take the time to understand your business, goals, and challenges, allowing us to provide services that align with your vision. Our team of experienced consultants and recruiters works collaboratively with you to ensure that every solution we deliver is practical, actionable, and focused on driving ",
  },
];
const SeoCard = ({ seotitle, seodescription }) => {
  return (
    <div className="w-full mt-5 bg-gray-200 gap-4 py-8 px-4 rounded-md hover:bg-orange-200 group hover:scale-105 transition duration-700  ">
      <div>
        <h2 className="text-2xl max-sm:text-xl inria-serif-bold font-semibold mb-4 text-orange-500 group-hover:text-navBlue ">
          {seotitle}
        </h2>
        <p className="text-gray-500 leading-6 text-base  group-hover:text-gray-600">
          {seodescription}
        </p>
      </div>
    </div>
  );
};

const ConsultingCardList = ({ seoData }) => {
  return (
    <div className="flex justify-between sm:flex-row flex-grow max-sm:flex-col xl:flex-row gap-4 max-sm:mb-10">
      {seoData.map((item, index) => (
        <SeoCard
          key={index}
          seotitle={item.seotitle}
          seodescription={item.seodescription}
        />
      ))}
    </div>
  );
};
