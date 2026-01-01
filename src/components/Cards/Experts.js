import React from "react";
import digitalm from "../../components/assets/images/digitakmarketing.jpg";
import educationals from "../../components/assets/images/education services.jpg";
import homework from "../../components/assets/images/home work help.jpg";
import ppcm from "../../components/assets/images/ppc marketing.jpg";
import research from "../../components/assets/images/RESEARCH.jpg";
import webdev from "../../components/assets/images/WEB DEVELOPMENT.jpg";
const expertiseData = [
  {
    id: 1,
    image: webdev,
    title: "Digital Marketing",
    content:
      "We are top digital marketing agency in Delhi. The company's marketing services are aimed at delivering measurable Transformational Growth to enterprises.",
  },
  {
    id: 1,
    image: digitalm,
    title: "Educational Services",
    content:
      "We are one-stop destination for academic excellence and support. We are passionate about empowering students to achieve their educational goals and reach their full potential.",
  },
  {
    id: 1,
    image
    : educationals,
    title: "Web Development",
    content:
      "We offer full-cycle technology solutions that streamline your digital transformation journey. With cutting-edge technical expertise.",
  },
  { id: 1, image: ppcm, title: "PPC / Paid marketing",
   content: "Positioning your website in the first place on Google is our commitment. We always put our best foot forward to accomplish our goals." 
  },

  { id: 5, image:research,
     title: "Research",
      content: "Research Paper Writing Services, longer and more detailed Research, designed" },
      
  { id: 1, image: homework,
    title: "Homework Help",
     content: "Study and get any kind of help in your homework from 100+ million step-by-step explanations with expert Q&As, minimal plagiarism and experts' support 24*7." },
];

export const ExpertArea = () => {
  return (
    <div className="container mx-auto experArea py-5 lg:px-8">
      <h1 className="text-6xl  jersey-25-regular max-sm:text-3xl max-sm:text-center mb-10 font-bold text-gray-600">
        Our Areas Of Expertise
      </h1>
      <div className="container mx-auto grid grid-cols-3 max-sm:grid-cols-1 gap-10 mt-5">
        {expertiseData.map((expertise) => (
          <ExpertCard
            key={expertise.id}
            title={expertise.title}
            image={expertise.image}
            content={expertise.content}
          />
        ))}
      </div>
    </div>
  );
};

export const ExpertCard = ({ title, image, content }) => {
  return (
    <>
      {/* ----Company left img---- */}
      <div class=" h-full max-sm:w-full relative group ">
        <img className="h-[230px] w-full rounded-[20px] shadow-md" src={image} alt="companyImage" />
        <h1 className=" text-lg  font-bold text-gray-700 px-4 mt-2">{title}</h1>

        {/* <!-- companyLink --> */}
        <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-blue-900  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px] shadow-md">
          <div className=" text-navBlue p-4">
          <h1 className=" text-2xl  font-bold text-orange-500 mb-5">{title}</h1>

            <h1 className="text-lg text-white ">{content}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
