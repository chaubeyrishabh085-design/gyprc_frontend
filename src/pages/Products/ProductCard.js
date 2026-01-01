import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";

const ServicesData = [
  {
    id: 1,
    image: img1,
    title: "Digital Marketing",
    content:
      "We are top digital marketing agency in Delhi. The company's marketing services are aimed at delivering measurable Transformational Growth to enterprises.",
  },
  {
    id: 1,
    image: img1,
    title: "Educational Services",
    content:
      "We are one-stop destination for academic excellence and support. We are passionate about empowering students to achieve their educational goals and reach their full potential.",
  },
  {
    id: 1,
    image: img1,
    title: "Web Development",
    content:
      "We offer full-cycle technology solutions that streamline your digital transformation journey. With cutting-edge technical services.",
  },
  {
    id: 1,
    image: img1,
    title: "PPC / Paid marketing",
    content:
      "Positioning your website in the first place on Google is our commitment. We always put our best foot forward to accomplish our goals.",
  },

  {
    id: 5,
    image: img1,
    title: "Research",
    content:
      "Research Paper Writing Services, longer and more detailed Research, designed",
  },

  {
    id: 1,
    image: img1,
    title: "Homework Help",
    content:
      "Study and get any kind of help in your homework from 100+ million step-by-step explanations with expert Q&As, minimal plagiarism and experts' support 24*7.",
  },
];

export const ServicesCard = () => {
  return (
    <div className="container mx-auto experArea py-5 lg:px-8">
      <div className="container mx-auto grid grid-cols-3 max-sm:grid-cols-1 gap-5 mt-5">
        {ServicesData.map((services) => (
          <Card
            key={services.id}
            title={services.title}
            image={services.image}
            content={services.content}
          />
        ))}
      </div>
    </div>
  );
};

export const Card = ({ title, image, content }) => {
  return (
    <>
      {/* ----Company left img---- */}
      <div class=" h-full max-sm:w-full relative group ">
        <img
          className="h-[230px] w-full rounded-[20px] shadow-md"
          src={image}
          alt="companyImage"
        />
        <h1 className=" text-xl  font-bold text-gray-700 px-4">{title}</h1>

        {/* <!-- companyLink --> */}
        <div class="absolute top-0 left-0 w-full cursor-pointer h-full opacity-0 bg-yellow-300  group-hover:opacity-90 transition-opacity flex justify-center items-center rounded-[20px] shadow-md">
          <div className=" text-navBlue p-4">
            <h1 className=" text-2xl  font-bold text-white mb-5">{title}</h1>

            <h1 className="text-lg ">{content}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
