import React from "react";
import grouIcon1 from "../../assets/data/homeImg/group1.png";
import grouIcon2 from "../../assets/data/homeImg/gropu2.png";
import grouIcon3 from "../../assets/data/homeImg/group3.png";
import grouIcon4 from "../../assets/data/homeImg/group4.png";
import grouIcon5 from "../../assets/data/homeImg/group5.png";
import grouIcon6 from "../../assets/data/homeImg/group6.png";
import groubg from "../../assets/data/homeImg/Rectangle 14.png";
import { Link } from "react-router-dom";

export const Expert = () => {
  const cardsData = [
    {
      imgSrc: grouIcon2,
      title: "Web and App development",
      description:
        " As a leading website and app service provider, we specialize in creating cutting-edge digital solutions tailored to your unique needs. Our expertise spans from designing visually stunning websites to developing intuitive and high-performance mobile apps. We are committed to delivering seamless user experiences through innovative technology and strategic insights. Whether you’re looking to build a robust online presence or a powerful mobile application, we offer comprehensive services that ensure functionality, scalability, and aesthetic excellence. ",
      link: "https://www.teachercool.com",
    },
    {
      imgSrc: grouIcon1,
      title: "Education Service",
      description:
        "As a dedicated education service provider, we are committed to fostering a dynamic and inclusive learning environment. Our mission is to empower students by delivering personalized educational solutions that cater to diverse needs and learning styles. We offer a range of services, including tailored tutoring, innovative learning programs, and comprehensive educational support, all designed to inspire academic excellence and personal growth.",
      link: "https://www.bitbeemedia.com",
    },

    {
      imgSrc: grouIcon3,
      title: "Sustainable solution",
      description:
        "As a pioneering sustainable solution provider, we transform banana waste into valuable resources, contributing to a greener planet. Our innovative processes convert banana by-products into eco-friendly materials and products, ranging from biodegradable packaging to sustainable biofuels. By turning waste into opportunity, we help reduce environmental impact while supporting circular economy practices. Our commitment is to advance sustainability and offer practical, environmentally responsible solutions that make a difference.",
      link: "https://www.bitbeemedia.com",
    },
    {
      imgSrc: grouIcon4,
      title: "Staffing Solution",
      description:
        "As a premier consultancy and staffing solution provider, we specialize in delivering tailored strategies to meet your unique business needs. Our expertise spans from strategic consulting to sourcing top-tier talent, ensuring you have the right people and insights to drive success. We offer comprehensive services that include workforce planning, talent acquisition, and organizational development, all designed to enhance efficiency and foster growth. With a focus on personalized service and deep industry knowledge, we partner with you to navigate challenges, seize opportunities, and build a high-performing team that propels your business forward.",
      link: "https://www.gyprc.com",
    },
    {
      imgSrc: grouIcon5,
      title: "Healthcare Medical Equipment ",
      description:
        " As a trusted leader in the medical equipment market, we specialize in the buying and selling of both new and pre-owned medical devices. Our commitment is to provide high-quality equipment that meets rigorous industry standards while offering competitive pricing and exceptional service. Whether you're looking to acquire the latest innovations or seeking cost-effective solutions with reliable performance, we offer a diverse inventory tailored to your needs. With a focus on integrity and expertise, we ensure a seamless experience for healthcare providers and facilities, helping you equip your practice with the best tools for delivering outstanding patient care.",
      link: "https://www.gyprc.com",
    },
    {
      imgSrc: grouIcon6,
      title: "TeacherCool Training ",
      description:
        " We specialize in delivering tailored training solutions designed to empower corporates, students, and universities. Our comprehensive programs are crafted to meet the diverse needs of professionals and learners alike, enhancing skills, knowledge, and performance across various sectors. From corporate workshops and executive coaching to student enrichment and academic seminars, we provide engaging, high-impact training that drives personal and organizational growth. With a commitment to excellence and a deep understanding of industry and educational requirements, we equip individuals and institutions with the tools and insights needed to succeed in today’s dynamic environment.",
      link: "/https://www.gyprc.com",
    },
  ];

  return (
    <div className="bg-orange-50 py-16">
      <div className="container flex justify-center mb-10">
        <div>
          <h1 className="text-5xl max-sm:text-4xl font-semibold text-black-500 inria-serif-bold">
            Our Experties
          </h1>
          <div className="flex justify-center">
            <div>
              <hr className="w-[240px] border-spacing-2 border-b border-gray-500 mt-4" />
              <hr className="relative top-[-20px] left-[55px] w-[120px] border-spacing-3 border-b-[4px] rounded border-orange-500 mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="container">
          <div className="expertCard grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsData.map((card, index) => (
              <ExpertCard2
                key={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /*
export const ExpertCard2 = ({ imgSrc, title, description, link }) => {
    return (
        <div className="bg-orange-50">
            <div className="relative card flex justify-center items-center mb-6">
                <img src={groubg} className="h-[400px] w-[400px]" alt="" />
                <div className="content absolute px-6">
                    <div className="flex justify-center text-center">
                        <div className="relative flex justify-center items-center h-[85px] w-[85px] p-2 rounded-full top-[-100px] bg-orange-500">
                            <img className="h-[50px] w-[50px] object-contain" src={imgSrc} alt={title} />
                        </div>
                    </div>
                    <div className="relative top-[-50px] px-3">
                        <h1 className="text-2xl sm:text-xl max-sm:text-xl mb-2 py-2 font-semibold text-gray-700 inria-serif-bold">{title}</h1>
                        <p className="text-base max-sm:text-sm text-gray-500 w-[270px]">{description}</p>
                    </div>
                    <div className="relative top-[-.8rem] mb-4">
                        <Link to={link} className="bg-orange-500 text-white text-base font-semibold py-1 px-2 rounded-md">Know More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
 */
}

export const ExpertCard2 = ({ imgSrc, title, description, link }) => {
  return (
    <div className="bg-orange-50">
      <div className="relative card flex justify-center items-center mb-6 border bg-gray-50 border-orange-300 hover:bg-gray-200 hover:border-gray-300 rounded  xl:h-[430px]">
        {/*  <img src={groubg} className="h-[400px] w-[400px]" alt="" />*/}
        <div className="content px-6">
          <div className="flex justify-center text-center">
            <div className="relative flex justify-center mt-6 items-center h-[60px] w-[60px] p-2 rounded-full  bg-orange-500">
              <img
                className="h-[35px] w-[35px] object-contain"
                src={imgSrc}
                alt={title}
              />
            </div>
          </div>
          <div className="relative">
            <h1 className="text-2xl sm:text-xl max-sm:text-xl mb-2 py-2 font-semibold text-gray-700 inria-serif-bold">
              {title}
            </h1>
            <p className="text-sm max-sm:text-sm text-gray-500 ">
              {description}
            </p>
          </div>
          <div className="relative mt-5 mb-4">
            <Link
              to={link}
              className="bg-orange-500 text-white text-base font-semibold py-1 px-2 rounded-md"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
