import React, { useState } from "react";
import { UserProfile } from "../components/UserProfile";
import { useNavigate } from "react-router-dom";

export const SalarySlip = () => {
  const navigation = useNavigate();
  const hadleSubmit = (e) => {
    e.preventDefault();
    navigation("/employee/salary-view");
  };

  return (
    <>
      <div className="">
        <UserProfile />
      </div>
      <div className="flex justify-center items-center text-center mt-10 h-[60vh]">
        <div className="w-[300px] bg-white   rounded shadow py-12">
          <h1 className="text-xl font-semibold">Select Folowings.</h1>

          <div className="flex-col">
            <form onSubmit={hadleSubmit}>
              <div className="mb-2 mt-2 flex flex-col gap-4">
                <label className="text-base font-semibold" htmlFor="">
                  Month
                </label>
                <div>
                  <input
                    className="border px-2 py-1 rounded text-base font-semibold"
                    type="date"
                  />
                </div>
                <div>
                  <button className="bg-orange-600  py-1 w-[150px] text-base font-semibold text-white rounded cursor-pointer hover:bg-orange-500">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
