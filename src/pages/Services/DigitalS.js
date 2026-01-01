import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import { BiCheck } from "react-icons/bi";
import bitbeelogo from "../../assets/data/bitb.png";
import { Link } from "react-router-dom";

export const DigitalS = () => {
  return (
    <>
      <div className="bg-white">
        <div
          className=" mt-[90px] text-center pt-5 pb-16  jersey-25-regular relative max-sm:px-3"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
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
            Digital Marketing Services
          </h1>
          <p className="text-white xl:px-10 max-sm:text-base text-xl px-4 inria-serif-light ">
          BitBee Media is a team of innovative & creative minds, with
            value-based strategies to achieve your business goals to make it a
            Popular Global Brand. Our strategies will ensure an assurance of the
            quality as the Best Digital Marketing Agency in Delhi | India. We
            are a one-stop service, as we tailor strategies as per your unique
            needs. Our creative wizards are experts in ROI focused marketing.
          </p>
        </div>
        <div className="container mx-auto py-10 lg:w-[80%] -z-0  ">
          
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
          <div className="flex justify-center mb-5">
            {/* <h1 className="text-4xl text-navBlue font-semibold ">Social Media Marketing</h1> */}
          </div>
          <div className="px-4">
          <ul className="text-base text-gray-600 px-3 leading-6">
            <span className="text-2xl max-sm:text-lg font-semibold inria-serif-bold  text-orange-500 pr-2 border-b-2  border-orange-500">
              Social Media Marketing
            </span>
            <li className="mt-2 list-disc list-dis text-gray-500">
              {" "}
              With our strategic social media plan, we successfully create a
              brand image in the minds of the prospective buyers, regarding the
              brand and thereby help them in grasping a larger base of the
              audience for selling their products and services.
            </li>
            <li className="mt-2 list-disc list-dis text-gray-500">
              Increase your brand’s awareness in society with our social media
              plans.
            </li>
            <li className="mt-2 list-disc list-dis text-gray-500">
              With our well-thought and strategic campaigns for every brand, we
              appeal to the nerves of target consumers, thereby creating a
              successful connection between our brands and their target
              consumers.
            </li>
            <li className="mt-2 list-disc list-dis text-gray-500">
              Lastly, with our social media services to increase brand
              positioning and a list of prospective consumers, we help our
              brands in generating more business, hence more profit and growth.
            </li>
          </ul>

          <ul className="text-base text-gray-600 px-3 leading-6 mt-5">
            <span className="text-2xl max-sm:text-lg font-semibold inria-serif-bold text-orange-500 pr-2 border-b-2  border-orange-500 text-end  ">
              Search Engine Optimization
            </span>
            <li className="mt-2 list-disc list-dis text-gray-500">
              SEO, Search Engine Optimization, is an inevitable part of the
              online world for businesses that seek digital platforms to grow
              their business. One of the most crucial characteristics of SEO
              that every Search Engine Optimization Company and professional SEO
              experts will agree to is its dynamicity. This characteristic is
              mostly innate and is a result of frequent changes done in the
              Google Algorithms from time to time. Google is famous for its 500
              changes made in the SEO algorithm in a year.
            </li>
            <li className="mt-2 list-disc list-dis text-gray-500">
              In order to dominate the market and industry with its range of
              products, every brand needs Search Engine Optimization marketing
              services that can work wonders in the field of positioning content
              under the most search results, the lack of which can surely pull
              you long back in the queue of growth and market presence.
            </li>

            <div>
              <SeoCardList seoData={seoDataArray} />
            </div>
          </ul>
        </div>
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
              <h1 className="text-2xl text-white inria-serif-bold ">Discover and Define</h1>
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
                  Highly qualified experts to market your brand on the right
                  platform
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  Client-friendly-centric service.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  Highest creative standards without compromising on quality.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  Genius in market researching. Real time audience mapping.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  In-depth knowledge of all digital and marketing platforms.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  Well equipped with the latest updates of market ideology.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  Strong reputation due to reliability.
                </li>
                <li className="mt-5 text-base text-gray-500 inria-serif-light list-disc">
                  We are one of the top marketing companies in Delhi.
                </li>
              </ul>
            </div>
          </div>
          <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 ">
            <h1 className="max-sm:text-3xl text-4xl text-center text-orange-500 inria-serif-bold  mb-5">
              The Best Digital Marketing Company
            </h1>
            <div className="py-4 text-base text-white">
              <p>
                Bitbee Media is a team of innovative & creative minds, with
                value-based strategies to achieve your business goals to make it
                a Popular Global Brand. Our strategies will ensure an assurance
                of the quality as the Best Digital Marketing Agency in Delhi |
                India. We are a one-stop service, as we tailor strategies as per
                your unique needs.
              </p>

              <p className="mt-6">
                Our creative wizards are experts in ROI focused marketing. We
                have done remarkably very well as a Top SEO company in Delhi
                NCR. We take pride in our Digital Marketing techniques,
                transparency, quick decision and zest for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// seo data
const seoDataArray = [
  {
    seotitle: "Optimizing UX and Content",
    seodescription:
      "UX - User Experience has emerged as the main pillar of every SEO service and communication. We make changes in your website and content on the basis of consumers’ points to make it easily accessible, interesting, and easy to understand. Apart from this, the we also try to plug in several tips to increase the speed and functionality of your website, so as to make it more appealing to the end-users as well as dedicate a fair plot of work to your productstion 1",
  },
  {
    seotitle: "Keywords as the king",
    seodescription:
      "While it is righteously said that content should be created for the consumers that help to solve their questions and problems in a jiffy, keeping them in alignment with the brand, it is equally important to stuff that content meticulously with the right set of keywords. Keyword search is of paramount importance in the world of SEO, as it clearly defines what your target audience is looking for and the language that is suited to them.",
  },
  {
    seotitle: "Links and Media Consultation",
    seodescription:
      "SEO services bear maximum fruit when it is in connection with numerous backlinks and media connections, which helps the content, and brand in general, in meeting the consumers eyes. Our SEO experts help the brands in churning out content and business opportunities that help them in building connections with the experts in the industry, thereby climbing up on the ladder of search results.",
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

const SeoCardList = ({ seoData }) => {
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
