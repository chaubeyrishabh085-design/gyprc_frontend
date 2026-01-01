import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";

const LeaveReqDetails = () => {
  const location = useLocation();
  const details = location.state.detail;
  const [status, setStatus] = useState(details?.status);
  const [disabled, setDisAbled] = useState(false);
  const [feedback, setfeedback] = useState(
    details?.feedback === null ? "" : details?.feedback
  );

  const handleSubmit = async () => {
    setDisAbled(true);
    let data = {
      id: details?.id,
      status: status,
      feedback: feedback,
    };
    const res = await postData1("api/v1/admin/update_leave/", data, true);
    if (res?.status) {
      toast.success("Leave Request Updated");
      setDisAbled(false);
    } else {
      setDisAbled(false);
      toast.error("Something went worng !");
    }
  };

  return (
    <>
      <h3 className="font-bold flex items-center mb-5 justify-center">
        Leave Request By {details?.profile?.email}
      </h3>
      <div className="flex justify-center   ">
        <div className="w-1/2 bg-white  ">
          <span className="flex items-start justify-between mt-5 ms-5 me-5">
            <h3>Request Date</h3>
            <p>
              {new Date(details?.request_date).toLocaleDateString("default", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </span>
          <span className="flex items-start  justify-between mt-5 ms-5 me-5">
            <h3>From & To</h3>
            <p>
              {new Date(details?.start_date).toLocaleDateString("default", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
              {"  "}
              to
              {new Date(details?.end_date).toLocaleDateString("default", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </span>
          <span className="flex items-start  justify-between mt-5 ms-5 me-5">
            <h3>Total Days</h3>
            <p>{details?.ndays}</p>
          </span>
          <span className="flex items-start  justify-between mt-5 ms-5 me-5">
            <h3 className="me-10">Description</h3>
            <p>{details?.description}</p>
          </span>
          <span className="flex items-start  justify-between mt-5 ms-5 me-5">
            <h3>Status</h3>
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending" selected={status === "Pending"}>
                Pending
              </option>
              <option value="Accepted" selected={status === "Accepted"}>
                Accepted
              </option>
              <option value="Not Accepted" selected={status === "Not Accepted"}>
                Not Accepted
              </option>
            </select>
          </span>
          <span className="flex  justify-between mt-5 ms-5 me-5">
            <h3>FeedBack</h3>
            <textarea
              className=" border-2 border-stone-950 p-5  h-24"
              onChange={(e) => setfeedback(e.target.value)}
              value={feedback}
            ></textarea>
          </span>
          <div className="flex justify-center mb-5">
            <button
              type="btn"
              onClick={handleSubmit}
              disabled={disabled}
              className="w-28 border-0 rounded-md text-white bg-cyan-400 mt-5 h-10"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveReqDetails;
