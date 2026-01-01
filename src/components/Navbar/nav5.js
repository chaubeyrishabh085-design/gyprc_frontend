import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../components/assets/images/logdo2.png";

export const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about-us" },
  {
    label: "Services",
    dropdown: [
      { label: "Marketing/SEO ", link: "/product/digital-services" },
      { label: "Educational Services ", link: "/product/educational-services" },
      { label: "foodservice", link: "/product/foody-services" },
      { label: "Health Care", link: "/product/health-care" },
    ],
  },
  // { label: "Products", link: "/products" },
  { label: "Contact Us", link: "/contact-us" },
];

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = () => {
    setShowSidebar(false); // Close the sidebar when NavLink is clicked
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="w-[100%] border-bottom">
        <nav className=" shadow-gray-20 w-full fixed top-0 z-10">
          <div className="max-sm:flex sm:flex max-sm:justify-between sm:justify-between">
            <div className="flex  lg:hidden  max-sm:bg-white sm:bg-white   justify-center items-center px-2">
              <button
                onClick={toggleSidebar}
                className="text-white sm:text-gray-800 max-sm:text-black"
              >
                <svg
                  className="w-6 h-6 text-4xl"
                  fill="none"
                  stroke="currentColor"
                  viewBox="-0 5 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="w-[100%] flex justify-between">
              {/* logo */}
              <div className="md:order-1 w-1/2 max-sm:w-full sm:w-full flex items-center justify-center py-2 lg:bg-navbg1 sm:bg-white max-sm:bg-white">
                <div >
                 <Link to="/" className="flex items-center justify-start">
                 <img
                    src={logo}
                    alt="Logo"
                    className="lg:h-[74px] lg:w-[80px] max-sm:h-[63px] sm:h-[50px] sm:w-[60px] bg-white rounded-full p-[2px] max-sm:w-[60px]"
                  />
                  <span className="text-white text-lg max-sm:text-base max-md:text-base bg-orange-500 px-[6px] py-[2px] rounded-sm">
                    Pushing up performance
                  </span>
                 </Link>
                </div>
              </div>

              <div className="md:order-2 flex items-center justify-end logobg  w-1/2 sm:w-full hidden lg:block px-5">
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center">
                    <ul className="navlinks flex flex-col items-center xl:gap-20 md:flex-row md:gap-10 max-sm:gap-4 sm:gap-4">
                      {menuItems.map((menuItem, index) => (
                        <li key={index}>
                          {menuItem.dropdown ? (
                            <div
                              onMouseEnter={() => setActiveItem(index)}
                              onMouseLeave={() => setActiveItem(null)}
                              className="relative"
                            >
                              <p className="text-gray-900 text-lg cursor-pointer">
                                {menuItem.label}
                              </p>
                              {activeItem === index && (
                                <ul className="absolute top-full w-[240px] left-0 bg-gray-300 shadow-lg rounded-md py-2 px-4">
                                  {menuItem.dropdown.map((item, i) => (
                                    <li
                                      key={i}
                                      className=" hover:text-orange-500 text-lg"
                                    >
                                      <NavLink
                                        to={item.link}
                                        activeClassName="active"
                                        onClick={handleItemClick}
                                      >
                                        {item.label}
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <NavLink
                              to={menuItem.link}
                              activeClassName="active"
                              onClick={handleItemClick}
                            >
                              <p
                                className={` text-xl hover:text-orange-500 ${
                                  activeItem === index ? "text-orange-500 " : ""
                                }`}
                              >
                                {menuItem.label}
                              </p>
                            </NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {showSidebar && (
        <div className="fixed inset-0 bg-navbg1 text-white z-50 w-[310px] py-3 px-4">
          <div className="flex  max-sm:flex-col sm:flex-col">
            <div className=" flex justify-end ">
              <button
                onClick={closeSidebar}
                className="text-gray-900 bg-white "
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="lg:h-[74px] lg:w-[80px] max-sm:h-[63px] sm:h-[50px] sm:w-[60px] bg-white rounded-full p-[2px] max-sm:w-[60px]"
              />
              <span className="text-white text-lg max-sm:text-base max-md:text-base bg-orange-500 px-[6px] py-[2px] rounded-sm">
                Pushing up performance
              </span>
            </div>
          </div>

          <div>
            <ul className="navlinks flex flex-col  p-2 sm:flex-col md:gap-10 max-sm:gap-4 sm:gap-4">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  {menuItem.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveItem(index)}
                      onMouseLeave={() => setActiveItem(null)}
                      className=" relative "
                    >
                      <p className="text-white text-lg cursor-pointer">
                        {menuItem.label}
                      </p>
                      {activeItem === index && (
                        <ul className="absolute top-full w-auto left-0 bg-white shadow-lg rounded-md py-2 px-4 ">
                          {menuItem.dropdown.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-600 hover:text-orange-500 text-lg"
                            >
                              <NavLink
                                to={item.link}
                                activeClassName="active"
                                onClick={handleItemClick}
                              >
                                {item.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={menuItem.link}
                      activeClassName="active"
                      onClick={handleItemClick}
                    >
                      <p
                        className={` text-xl hover:text-orange-900 ${
                          activeItem === index ? "text-orange-500 " : ""
                        }`}
                      >
                        {menuItem.label}
                      </p>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
