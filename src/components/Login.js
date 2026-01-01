// src/Login.js

import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginHead } from "./LoginHead";
import imgl1 from "../assets/data/imgl1.png";
import { postData1, postData2 } from "../APIs/index";
import useClickOutside from "../Admin/utils/clickOutSide";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";


export const Login = () => {
  const[showIccon,setShowIcon] = useState(false)
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

    const res = await postData1("api/v1/auth/login/", credentails, false);

    if (res?.status_code === 200) {
      let data = res?.data;
      localStorage.setItem("token", data?.token);
      localStorage.setItem("userId", data?.id);
      console.log("tresddfsdjfhsjkh")
      console.log(data)
      if (data?.is_superuser) {
        navigate("/admin/", { state: data });
        localStorage.setItem("ut", "admin");
      } else {
        navigate("/employee/dashboard", { state: data });
        localStorage.setItem("ut", "emp");
      }
    } else {
      setError("Something went wrong try again or contact to admin !");
    }
  };

  const handleChangeIcon = () => {
    setShowIcon((data) => !data)
  }
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
              <LoginHead />
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
                    type={showIccon?"text":"password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  {credentails.password !==""&&
                  <span onClick={handleChangeIcon} className="absolute top-4 right-5 cursor-pointer">
                    {showIccon?<FaEye />:<FaEyeSlash />}
                  </span>}
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

export const Logout = ({setIsOpen}) => {
  const ref =  useRef()
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
    <div ref={ref} className="absolute w-[220px] cursor-pointer  z-50 mt-2 border-gray-300 rounded-md shadow-lg px-2 right-3 md:right-0">
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
        Logout
      </h4>
    </div>
  );
};


export const ChangePassword = ({ setIsChangePasswordOpen }) => {
  const [userPassword, setUserPassword] = useState({
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserPassword((prev) => ({ ...prev, [name]: value }));

    // Dynamic validation
    if (name === "password" && value.length === 0) {
      setError("Password is required!");
    } else if (name === "confirm_password" && value.length === 0) {
      setError("Confirm Password is required!");
    } else if (
      name === "confirm_password" &&
      userPassword.password &&
      value !== userPassword.password
    ) {
      setError("Password and Confirm Password should be the same!");
    } else {
      setError(""); // Clear error when input is valid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userPassword);

    if (userPassword.password.length === 0) {
      setError("Password is required!");
      return;
    }
    if (userPassword.confirm_password.length === 0) {
      setError("Confirm Password is required!");
      return;
    }

    if (userPassword.password !== userPassword.confirm_password) {
      setError("Password and Confirm Password should be the same!");
      return;
    }
   
    // API Call Logic (Uncomment and adjust as necessary)
    const res = await postData2(`api/v1/consultancy/${localStorage.getItem('userId')}/update_profile/`, {password:userPassword.password}, true);
    console.log(res)
    if (res?.status_code === 200) {
      toast.success(res.msg)
      setTimeout(() => {
        setIsChangePasswordOpen(false);
        navigate("/consultancy/dashboard");
      }, 2000);
    } else {
      toast.error(res.msg? res.msg: res.detail);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="flex items-center w-full max-w-[600px] justify-center">
          <div className="mx-auto w-full relative max-w-[550px] p-12 rounded-lg bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your Password"
                  value={userPassword.password}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="confirm_password"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Confirm password
                </label>
                <input
                  type="text"
                  name="confirm_password"
                  placeholder="Re-enter your password"
                  value={userPassword.confirm_password}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <p className="text-red-500 text-xs">{error && error}</p>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
            <div>
              <button
                onClick={() => setIsChangePasswordOpen(false)}
                className="hover:shadow-form absolute top-0 right-0 rounded-md py-3 px-8 text-base font-semibold text-gray-800 outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

