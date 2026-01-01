// src/Login.js

import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import imgl1 from "../assets/data/imgl1.png";
import logo3 from "./assets/images/logo3.png";
import { postData1 } from "../APIs/index";
import useClickOutside from "../Admin/utils/clickOutSide";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const ConsultancyLogin = () => {
  const [showIccon, setShowIcon] = useState(false);
  const [credentails, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setCredentials({ ...credentails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentails.username.length === 0) {
      setError("Username is required !");
      return;
    }
    if (credentails.password.length === 0) {
      setError("Password is required !");
      return;
    }

    const res = await postData1("api/v1/consultancy/login_consultancy_user/", credentails, false);

    if (res?.status_code === 200) {
      let data = res?.data;
      localStorage.setItem("token", data?.token);
      localStorage.setItem("userId", data?.id);
      localStorage.setItem("username", data?.username);
      localStorage.setItem("user_type", data?.user_type);
      localStorage.setItem("email", data?.email)
      localStorage.setItem("consultancy_name", data?.name)
      navigate("/consultancy/dashboard", { state: data });
    } else {
      setError("Something went wrong try again or contact to admin !");
    }
  };

  const handleChangeIcon = () => {
    setShowIcon((data) => !data);
  };
  return (
    <>
      <div className="LoginPage bg-blue-50  xl:h-screen md:h-screen h-fullscreen">
        <div className=" flex justify-center mb-5 h-[auto] md:h-flullscreen">
          <div>{/* <LoginHead /> */}</div>
          {/* <h1 className='text-4xl font-bold text-center text-orange-600 pt-5'>GYPR PVT LTD</h1> */}
        </div>

        <div className="flex  items-center justify-center">
          <div className=" flex flex-col md:flex-row xl:flex-row  border-2 rounded bg-white   items-center justify-center w-[95vw] md:w-[90vw] xl:w-[80vw]  ">
            <div className="loginLeft  border-r-2 bg-white  min-h-[500px] w-[100%] md:w-[50%] xl:w-[50%] p-8">
              <div className="loingHead px-5 py-3 ">
                <div className="logo flex justify-center ">
                  <img className="w-[280px] h-[100px]" src={logo3} alt="" />
                </div>
                <div></div>
              </div>
              <img className="h-[400px] mt-5" src={imgl1} alt="" />
            </div>

            <div className="loginRight bg-white  rounded  min-h-[500px] w-[100%] md:w-[50%] xl:w-[50%] p-8">
              <h2 className="text-4xl font-medium mb-4 text-center">Login</h2>
              <p className="text-center mb-2">Sign In to your account</p>

              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="mb-5 ">
                  <label
                    htmlFor="username"
                    className="block text-xl mb-1 font-medium text-gray-600"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={credentails.username}
                    id="username"
                    name="username"
                    placeholder="User name"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-8 mt-6">
                  <label
                    htmlFor="password"
                    className="block text-xl mb-1 font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={credentails.password}
                      type={showIccon ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                    {credentails.password !== "" && (
                      <span
                        onClick={handleChangeIcon}
                        className="absolute top-4 right-5 cursor-pointer"
                      >
                        {showIccon ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-3 text-red-600">{error && error}</div>
                <div className="text-start items-center justify-center">
                  <button
                    type="submit"
                    className="bg-orange-600 mt-2 text-white font-bold p-2 rounded-md w-[100%] hover:bg-gray-400 hover:text-black"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Logout = ({ setIsOpen }) => {
  const ref = useRef();
  const navigate = useNavigate();
  let admin = localStorage.getItem("ut");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("ut");
    navigate("/");
  };

  const handleOutSide = () => {
    setIsOpen(false);
  };

  useClickOutside(ref, handleOutSide);
  return (
    <div
      ref={ref}
      className="absolute w-[220px] cursor-pointer  z-50 mt-2 border-gray-300 rounded-md shadow-lg px-2 right-3 md:right-0"
    >
      {admin === "admin" ? (
        <>
          <NavLink to="/admin/change-password">
            <h4 className="hover:bg-red-50 hover:text-gray-900 transition duration-300 ease-in-out text-center text-base font-normal	 rounded mb-1 bg-blue-900 text-white py-1  ">
              Change my Password
            </h4>
          </NavLink>
          {/* <NavLink to="download-sheet">
            <h4 className="hover:bg-red-50 hover:text-gray-900 transition duration-300 ease-in-out text-center text-base font-normal	 rounded mb-1 bg-blue-900 text-white py-1  ">
              Monthly Data
            </h4>
          </NavLink> */}
        </>
      ) : (
        ""
        // <NavLink to="change-emp-password">
        //   <h4 className="hover:bg-red-50 hover:text-gray-900 transition duration-300 ease-in-out text-center text-base font-normal	 rounded mb-1 bg-blue-900 text-white py-1">
        //     Change Emp Password
        //   </h4>
        // </NavLink>
      )}

      <h4
        onClick={handleLogout}
        className="hover:bg-red-50 hover:text-gray-900 transition duration-300 ease-in-out text-center text-base font- rounded mb-1 bg-blue-900 text-white py-1  "
      >
        Logoutdddsdsds
      </h4>
    </div>
  );
};
