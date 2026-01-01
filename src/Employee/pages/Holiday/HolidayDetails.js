import React from "react";
import { useLocation } from "react-router-dom";

const HolidayDetails = () => {
  const location = useLocation();
  let details = location.state.item;
  return (
    <div className="mt-8  flex justify-center">
      <div className="custom-calendar rounded shadow-md bg-white py-5 px-3 w-[900px]">
        <div className="flex flex-col sm:flex-row  items-center justify-around mb-10 space-y-5 sm:space-y-0 sm:space-x-5">
          <h3>
            <span className="font-bold text-xl">Date </span> : {details?.date}
          </h3>
          <h3>
            <span className="font-bold text-xl">Name </span> : {details?.name}
          </h3>
        </div>
        <div
          className={`flex ${
            details?.other?.length > 70
              ? "flex-col justify-start"
              : "flex-row justify-center"
          }  items-center  mb-5`}
        >
          <p className="font-bold text-xl">Details {details?.other?.length > 70 &&  ":"}</p>
          <p>{details?.other?.length < 70 && ":"}{" "}{details?.other}</p>
        </div>
      </div>
    </div>
  );
};

export default HolidayDetails;
