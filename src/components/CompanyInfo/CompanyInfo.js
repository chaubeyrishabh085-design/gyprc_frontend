import React from "react";
import logo2 from "../../assets/data/logdo2.png";
import aboutbg from "../../assets/data/aboutbg.png";
import companyInfo from "../../assets/data/compInfo.jpg";

export const CompanyInfo = () => {
  return (
    <>
      <div
        className="companyInfo py-[50px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.1), rgba(21,40,59, 0.1)),url(${aboutbg})`,
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="aboutUs xl:px-20 max-sm:px-2 sm:px-3">
          <div className="container max-sm:px-2 mx-auto flex  items-center lg:flex-row sm:flex-col max-sm:flex-col justify-between gap-5 ">
            {/* ------------About left side -----------------------------*/}

            <div className=" aboutLeft max-sm:order-2 lg:w-1/2 sm:w-full max-sm:w-full">
              <img src={companyInfo} className="h-[450px] w-full" alt="" />
            </div>
            {/* ------------About Right side -----------------------------*/}
            <div className="relative aboutRight lg:w-1/2 sm:w-full max-sm:w-full max-sm:order-1">
              <div className="absolute max-sm:hidden sm:hidden lg:block text-center flex justify-center top-[160px] left-[-100px] bg-gray-50 w-[150px] rounded-sm p-4">
                <img src={logo2} className="h-[120px]  " alt="" />
              </div>
              <div className="lg:pl-20">
                <div className="">
                  <h1 className="inria-serif-bold text-4xl max-sm:text-4xl  font-semibold text-orange-500 inria-serif-bold">
                    About Gyprc
                  </h1>
                  <hr className="w-[240px] border-spacing-2 border-b border-gray-500 mt-2" />
                  <hr className="relative top-[-20px] w-[120px] border-spacing-3 border-b-[4px] rounded border-orange-500 mt-4" />
                </div>

                <h1 className=" text-sm text-white  inria-serif-light  ">
                  At GYPRC, we believe in the power of collaboration and
                  innovation to drive positive change in the world. Our venture
                  consists of a group of five dynamic companies, each with its
                  own unique strengths and expertise, working together to create
                  a brighter future.
                </h1>
                <h1 className=" text-sm text-white  inria-serif-light mt-3">
                  TeacherCool is our flagship education platform, dedicated to
                  providing top-quality IT sector courses to aspiring
                  professionals
                </h1>

                <h1 className=" text-sm text-white  inria-serif-light mt-3 ">
                  EquipMedy is revolutionizing the healthcare industry by
                  providing a seamless platform for buying and selling medical
                  equipment and supplies.
                </h1>
                <h1 className="text-sm text-white  inria-serif-light mt-3">
                  Nimmin leads the way in sustainability, manufacturing
                  eco-friendly products from organic waste materials.
                </h1>
                <h1 className="text-sm text-white  inria-serif-light mt-3">
                  Bitbee Media is a team of innovative & creative minds, with
                  value-based strategies to achieve your business goals to make
                  it a Popular Global Brand.
                </h1>

                <h1 className="text-sm text-white  inria-serif-light mt-3">
                  Tingletaste brings the flavors of India to you, offering
                  authentic Indian cuisine with a modern twist. “Together, we
                  are GYPRC – a force for positive change, innovation, and
                  collaboration”
                </h1>
                <h1 className="text-sm text-white  inria-serif-light mt-3">
                  GYPRC Consulting Service - we specialize in providing tailored
                  staffing solutions that help businesses connect with top
                  talent and optimize their workforce. With a deep understanding
                  of industry needs and a commitment to excellence, we serve as
                  a strategic partner for companies looking to scale their
                  teams, improve hiring efficiency, or manage short-term
                  workforce.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
