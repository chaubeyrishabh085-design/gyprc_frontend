import React from "react";
import profileImg from "../../assets/data/pro1.jpg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const UserProfile = () => {
  const empData = useSelector((state) => state?.user?.userData);
  return (
    <>
      <div className="flex px-2 gap-5 xl:ml-20 max-sm:mt-4">
        <NavLink to="/employee/upload-profile_image">
          <img
            className="w-12 h-12 max-sm:h-8 max-sm:w-10 max-sm:mt-1 rounded-full cursor-pointer"
            src={profileImg}
            alt=""
          />
        </NavLink>
        <div>
          <h1 className="text-2xl max-sm:text-lg text-blue-900 font-semibold mb-2 max-sm:mb-1">
            Welcome Back, {empData?.username}
          </h1>
          <p>Inspiration does exist, but it must find you working.</p>
        </div>
      </div>

    </>
  );
};
