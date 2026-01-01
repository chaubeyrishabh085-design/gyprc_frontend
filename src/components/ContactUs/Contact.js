import React from "react";
import phone from "../../assets/data/homeImg/phone.png"
import bgImg from "../../assets/data/aboutbg.png"
import ContactForm from "./ContactForm";
export const ContactUs = () => {
    return (
        <>
            <div className=" contactus  bg-black lg:h-[100vh ] py-10"
             style={{backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.1), rgba(21,40,59, 0.1)), url(${bgImg})`, backgroundSize: '100% 100%', backgroundAttachment:"fixed" }}>
              <div className="flex lg:justify-between max-sm:justify-center md:justify-center max-sm:flex-col sm:flex-col lg:flex-row container mx-auto px-8  ">
                  {/* contact left */}

                  <div className="contactLeft container flex justify-center items-center lg:w-1/3 max-sm:w-full sm:w-full py-6  sm:mt-10  max-w-lg mx-auto">
                  {/* <div className="">
                  <div className="flex gap-3 pb-3 mb-6">
                       <a className="linkdin" href=""> <FaYoutubeSquare className="text-blue-500 text-4xl" /></a>
                       <a className="linkdin" href=""> <FaLinkedinIn className="text-blue-500 text-4xl"/>  </a>
                    </div>
                  
                  <div>
                  <h1 className="text-4xl max-sm:text-2xl mb-8  text-white font-medium leading-[40px] ">
                    Identify, Understand &  Respond To Attacks Faster
                    </h1>
                  </div>
                  <div className="mt-5 mb-5">
                        <h1 className="text-medium font-semibold text-white ">Our motivation and mission is to make Security Adoption & Absorption easy for organizations. </h1>
                    </div>
                    <div className="mt-5 mb-5 flex max-sm:flex-col justify-between">
                      <div className="flex flex-col">
                        <label className="text-lg font-semibold text-white" >Email</label>
                      <a className="text-lg font-semibold text-white" href="mailto:hr@gypr.in">info@gypr.in</a>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-lg font-semibold text-white">Phone</label>
                      <a className="text-lg font-semibold text-white" href="tel:9582940966">(+91) 9582940966</a>

                      </div>
                    </div>
                  </div> */}
                  <div>
                    <img src={phone} alt="" />
                  </div>

                </div>
                {/* contact right */}

                <div className="contactRight  max-sm:full sm:w-full max-w-lg mx-auto ">
                    <div>
                        <h1 className="text-orange-500 font-bold text-5xl max-sm:text-2xl py-3 mb-2 inria-serif-bold">Contact Us</h1>
                        <p className="text-xl text-white pb-4">If you are looking for career opportunities please <a className="text-orange-300" href="/product/consulting"> click here </a> </p>
      
                    </div>

                    <div>
                    <ContactForm/>

                    </div>
                </div>

              </div>
            </div>
        </>
    )
}
