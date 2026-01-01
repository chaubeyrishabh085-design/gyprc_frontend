import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import { BiCheck } from "react-icons/bi";
import equipmedy from "../../assets/data/equipmedybd.png";
import { Link } from "react-router-dom";
import { RiSendPlane2Fill } from "react-icons/ri";

export const HealthCare = () => {
  return (
    <>
      <div className="bg-white">
        <div
          className=" mt-20 text-center py-10 jersey-25-regular"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="text-5xl max-sm:text-4xl py-8 text-orange-500 inria-serif-bold ">Health Care</h1>
          <p className="text-white text-xl xl:px-16 max-sm:text-base inria-serif-light">
            Discover high-quality medical devices and equipment at EquipMedy,
            dedicated to enhancing healthcare outcomes and patient well-being.
          </p>
        </div>
        <div className="container mx-auto py-10 lg:w-[80%] -z-0 ">
          <div className="flex justify-center mb-5">
          <div className="flex justify-evenly items-center gap-4">
              <img src={equipmedy} className="h-[75px] xl:h-[100px]" alt="" />
              <Link
                to="https://www.equipmedy.com"
                className="bg-orange-500 inria-serif-bold text-white py-2 xl:px-6 px-3 hover:text-white rounded-sm text-xl max-sm:text-base font-semibold"
              >
                Visit Our Website
                <hr className="w-[100px] h-[2px]  bg-white" />
              </Link>
            </div>
          </div>
        <div className="px-3">
        <p className="text-base text-gray-600 px-3">
            <b>The Journey of EquipMedy: Enhancing Healthcare Access: </b>
            EquipMedy.com is an Indian online platform where doctors, hospitals,
            manufacturers, distributors, and suppliers can easily Sell and Buy
            pre-owned or new medical equipment, consumables, and related
            services. In a nation pulsating with life, accessibility of latest
            medical technologies and equipment to healthcare professionals
            remains a complex challenge. At EquipMedy™, we've embarked on a
            mission to transform this narrative, ensuring that every healthcare
            professional, regardless of their geographic location, has the power
            to provide the best medical treatment to their patients.
          </p>
          <p className="text-base text-gray-600 px-3 mt-5">
            <b>Our Genesis:</b>
            We strongly believe that every doctor in our country possesses
            immense capabilities to provide the best medical treatment, given
            access to the latest medical equipment and devices. Currently, this
            access is limited to a few healthcare professionals which make
            patients to struggle for proper healthcare facilities. The medical
            device industry is relentlessly working to offer state-of-the-art
            medical technologies, but the high costs associated with reaching a
            wider geographic area in India have been a significant hurdle in
            technology penetration.
          </p>

          <p className="text-base text-gray-600 px-3 mt-5 ">
            <b>EquipMedyStands For The Larger Purpose:</b>
            EquipMedy.com offers a platform for the buying and selling of both
            pre-owned and new medical equipment. Sellers can post their
            advertisements and connect with potential buyers. EquipMedyacts as
            an intermediary throughout the entire process, overseeing
            verification, inspection, mediating discussions, negotiations, as
            well as managing shipping and installation. Our platform caters to
            Doctors, Healthcare Professionals, Hospitals, Manufacturers,
            Distributors, and Suppliers, fostering an ecosystem where both new
            and used medical equipment find their way into the hands of those
            who need them. We are more than just an ecommerce platform; we are
            the architects of a more inclusive and effective healthcare system
            for every citizen of India.
          </p>
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
        className=" ourProcess mx-auto jersey-25-regular py-14 px-4 "
        style={{
          background: `linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0, 0.9)), url(${img1})`,
        }}
      >
        <div className=" container mx-auto mb-12 ">
          <h1 className="text-white text-center text-5xl max-sm:text-4xl  mb-12">
            Our process is a 4-Way Cyclic and starts with
          </h1>

          <div class="container mx-auto lg:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <div className="flex gap-2">
              <span className="">
                <BiCheck class="text-4xl block font-bold  text-blue-400 " />
              </span>
              <h1 className="text-2xl text-white">Discover and Define</h1>
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
          <div className="left lg:w-1/2 max-sm:w-full sm:w-full">
            <div className="text-center  py-10 max-sm:px-4 ">
              <h1 className="text-4xl max-sm:text-2xl font-semibold text-navBlue inria-serif-bold">
                How EquipMedy.com Work?
              </h1>
              <hr className="w-[100px] mx-auto h-[3px] mt-2 text-black bg-black" />
              <div className="">
                <p className="mt-3 text-base text-gray-600 text-start">
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>1. Find Equipment -: </b>
                  </span>
                  Search from the listed Pre-owned and New equipment. Ads are
                  directly posted by Doctors / Hospitals, distributors /
                  Manufacturers.
                </p>

                <p className="mt-3 text-base text-gray-600 text-start">
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>2. Schedule Meeting With Seller -: </b>
                  </span>
                  IIdentify equipment according to your requirements, connect
                  with the seller via video call to obtain more details, and
                  negotiate based on the equipment condition. The EquipMedy
                  executive is here to facilitate you at each step of your
                  buying process.
                </p>
                <p className="mt-3 text-base text-gray-600 text-start">
                  {" "}
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>3. Get Inspection Report -: </b>
                  </span>
                  For pre-owned equipment, the actual shipping cost is to be
                  borne by the buyer. However, the shipping cost is inclusive in
                  the case of new equipment sold directly by distributors,
                  manufacturers, or the company.
                </p>

                <p className="mt-3 text-base text-gray-600 text-start">
                  {" "}
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>4. Close The Deal -: </b>
                  </span>
                  Negotiate with ease, guided by the insights from the
                  inspection report. Finalize the deal with the assurance that
                  EquipMedy is by your side, offering its services at a
                  nominal platform fee
                </p>

                <p className="mt-3 text-base text-gray-600 text-start">
                  {" "}
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>5. Get It Shipped -: </b>
                  </span>
                  For pre-owned equipment, the actual shipping cost is to be
                  borne by the buyers. However, the shipping cost is inclusive
                  in the case of new equipment sold directly by distributors/
                  manufacturers/ or the company.
                </p>

                <p className="mt-3 text-base text-gray-600 text-start">
                  {" "}
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>6. Handling & Installation -: </b>
                  </span>
                  Elevate your experience with EquipMedy add-on services. Let
                  us handle the logistics, ensuring your equipment is seamlessly
                  installed at your clinic or hospital.
                </p>
                <p className="mt-3 text-base text-gray-600 text-start">
                  {" "}
                  <span className="text-orange-500 border-b border-orange-500 ">
                    <b>7. AMC/CMC,Service -:s</b>
                  </span>
                  Beyond the purchase, EquipMedyremains your practice partner.
                  Explore our Annual Maintenance and Comprehensive Maintenance
                  Services, ensuring your equipment functions optimally, always.
                </p>
              </div>
            </div>
          </div>
          <div className="right lg:w-1/2 max-sm:w-full sm:w-full bg-navbg1 py-14 px-4 ">
            <h1 className="max-sm:text-3xl text-4xl text-center text-orange-500 inria-serif-bold mb-5">
              Sell On EquipMedy
            </h1>
            <div className="py-4 text-base text-white">
              <h1 className="text-xl font-semibold pb-3 ">
                {" "}
                Expand Your business with EquipMedy
              </h1>
              <p>
                List Your Products on MyMediequip and connect with our network
                of 150K+ hospital, clinics and individual proactioners
              </p>
              <p className="mt-6">
                Enhancing access to the latest medical equipment and
                technologies for every healthcare professional.
              </p>
              <p className="mt-6">
                Our vision is to revolutionize the way medical equipment is
                sourced, sold, and utilized. We aim to empower healthcare
                providers, clinics, and hospitals to access high-quality
                equipment while reducing costs, minimizing waste, and promoting
                a sustainable healthcare ecosystem.
              </p>
              <p className="mt-6">
                Revolutionize medical equipment access, reduce costs, minimize
                waste, and promote sustainability. Empower healthcare providers,
                clinics, and hospitals for enhanced patient care and a
                sustainable healthcare ecosystem.
              </p>
              <Link
                to="/contact-us"
                className="flex justify-center mx-auto mt-16 py-2 rounded-[1px] items-center gap-4 bg-orange-500 hover:bg-orange-400 w-[200px]"
              >
                <Link to="/contact-us">
                  {" "}
                  <button className="" type="submit">
                    CONTACT NOW
                  </button>
                </Link>
                <RiSendPlane2Fill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
