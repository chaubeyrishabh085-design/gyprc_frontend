import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";

export const ComplaintView = () => {
  const location = useLocation();
  const detail = location?.state?.details;
  const [disabled, setDisAbled] = useState(false);
  const [userDetails, setUserDetails] = useState({
    status: detail?.status,
    feedback: detail?.feedback,
  });

  const handleUpdateStatus = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "") {
      setUserDetails({ ...userDetails, [name]: value });
    } else {
      setUserDetails({ [name]: "" });
    }
  };

  const changeUpdatedStatus = async () => {
    setDisAbled(true);
    const data = {
      id: detail?.id,
      status: userDetails?.status,
      feedback: userDetails?.feedback,
    };
    const res = await postData1("api/v1/admin/update_complaint/", data, true);
    if (res?.status_code === 200) {
      setDisAbled(false);
      toast.success("Status Updated Successfully !");
    } else {
      setDisAbled(false);
      toast.error("Something went worng !");
    }
  };

  return (
    <>
      <div className="compliantView w-[90%] m-auto">
        <div className="bg-white shadow p-5">
          <div className="flex xl:flex-row mx-lg:flex-row mx-md:flex-row max-sm:flex-col gap-4  mb-4">
            <label className="text-lg text-gray-700 font-semibold min-w-[100px] ">
              Name:
            </label>
            <h2 className="text-base font-semibold  text-gray-600">{`${detail?.profile?.first_name} ${detail?.profile?.last_name}`}</h2>
          </div>
          <div className="flex xl:flex-row mx-lg:flex-row mx-md:flex-row max-sm:flex-col gap-4 mb-4">
            <label className="text-lg text-gray-700 font-semibold min-w-[100px] ">
              Date:
            </label>
            <h2 className="text-base font-semibold  text-gray-600">
              {detail?.date}
            </h2>
          </div>

          <div className="flex xl:flex-row mx-lg:flex-row mx-md:flex-row max-sm:flex-col gap-4 mb-4">
            <label className="text-lg text-gray-700 font-semibold min-w-[100px]">
              Description:
            </label>
            <h2 className="text-base font-semibold  text-gray-600">
              {detail?.description}
            </h2>
          </div>

          <form action="" onSubmit={changeUpdatedStatus}>
            <div className="flex xl:flex-row mx-lg:flex-row mx-md:flex-row max-sm:flex-col gap-4 mb-8 mt-4">
              <label className="text-lg text-gray-700 font-semibold min-w-[100px]">
                {" "}
                Status{" "}
              </label>
              <select
                onChange={(e) => handleUpdateStatus(e)}
                name="status"
                id="status"
                className="px-3 text-base font-semibold text-gray-600 border rounded py-1 outline-none"
              >
                <option value="" disabled>
                  Select Status
                </option>
                <option
                  value="Pending"
                  selected={userDetails?.status === "Pending"}
                >
                  Pending
                </option>
                <option
                  value="Solved"
                  selected={userDetails?.status === "Solved"}
                >
                  Solved
                </option>
              </select>
            </div>

            <div className="flex xl:flex-row mx-lg:flex-row mx-md:flex-row max-sm:flex-col gap-4 mb-4">
              <label className="text-lg text-gray-700 font-semibold min-w-[100px] ">
                Feedback:
              </label>
              <textarea
                onChange={(e) => handleUpdateStatus(e)}
                value={userDetails?.feedback}
                className="text-base font-semibold border rounded outline-none text-gray-600 w-full px-2"
                name="feedback"
                id="feedback"
                cols="30"
                rows="5"
                placeholder="Write here.."
              ></textarea>
            </div>
            <div className="flex gap-4 mb-4 justify-center">
              <button
                type="submit"
                disabled={disabled}
                onClick={changeUpdatedStatus}
                className="bg-blue-600 px-4 text-lg w-[50%] mt-4 text-white py-1 font-semibold hover:bg-blue-500 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
