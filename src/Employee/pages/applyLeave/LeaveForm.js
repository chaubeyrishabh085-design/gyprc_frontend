import React from "react";
import { UserProfile } from "../../components/UserProfile";
import { useFormik } from "formik";
import { dateSchema, emailSchema, descSchema } from "../../../utils/validation";
import * as Yup from "yup";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LeaveForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      start_date: "",
      end_date: "",
      manager_email: "",
      description: "",
      leave_type: "",
    },
    validationSchema: Yup.object({
      start_date: dateSchema,
      end_date: dateSchema,
      manager_email: emailSchema,
      description: descSchema,
    }),
    onSubmit: (values) => {
      handleForm(values);
    },
  });

  const handleForm = async (values) => {
    let ndays =
      (new Date(values.end_date) - new Date(values.start_date)) /
        (1000 * 60 * 60 * 24) +
      1;
    values["ndays"] = ndays;
    const res = await postData1("api/v1/add_leave/", values, true);
    if (res?.status_code === 200) {
      navigate("/employee/apply_leave");
    } else {
      toast.error("Something went wrong, try again !");
    }
  };

  return (
    <>
      <div className="leavForm mb-5">
        <div>
          <UserProfile />
        </div>

        <div className="LeaveForm flex  justify-center  mt-8">
          <div className=" w-[80%]">
            <h1 className="text-3xl font-semibold text-orange-600">
              Leave Application
            </h1>
            <div className=" mt-3 lg:h-[60vh] overflow-y-auto no-scrollbar">
              <form onSubmit={formik.handleSubmit}>
                <div className="twodiv flex flex-col md:flex-row xl-flex-row justify-between gap-0 md:gap-5">
                  <div className="mb-5  w-[100%]  ">
                    <label
                      htmlFor="startDate"
                      className="block text-xl mb-1 font-medium text-gray-600"
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="StartDate"
                      name="start_date"
                      className="outline-none mt-1 p-2 w-[100%] border rounded-md"
                      value={formik.values.start_date}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.start_date && (
                      <p className="text-red-600">{formik.errors.start_date}</p>
                    )}
                  </div>
                  <div className="mb-5 w-[100%]">
                    <label
                      htmlFor="endDate"
                      className="block text-xl mb-1 font-medium text-gray-600"
                    >
                      End Date
                    </label>
                    <input
                      type="date"
                      id="EndDate"
                      name="end_date"
                      className="outline-none mt-1 p-2 w-full border rounded-md"
                      value={formik.values.end_date}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.end_date && (
                      <p className="text-red-600">{formik.errors.end_date}</p>
                    )}
                  </div>
                </div>
                <div className="mb-5 ">
                  <label
                    htmlFor="email"
                    className="block text-xl mb-1 font-medium text-gray-600"
                  >
                    Reporting Manager Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="manager_email"
                    placeholder="abc@gmail.com"
                    className="outline-none mt-1 p-2 w-full border rounded-md"
                    value={formik.values.manager_email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.manager_email && (
                    <p className="text-red-600">
                      {formik.errors.manager_email}
                    </p>
                  )}
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="leave"
                    className="block text-xl mb-1 font-medium text-gray-600"
                  >
                    Leave Type
                  </label>
                  <select
                    name="leave_type"
                    id="leave_type"
                    value={formik.values.leave_type}
                    onChange={formik.handleChange}
                    className="outline-none mt-1 p-2 w-full border rounded-md "
                  >
                    <option value="" disabled>
                      Select Leave
                    </option>
                    {/* <option
                      value="EL"
                      className="cursor-pointer"
                      selected={formik.values.leave_type === "EL"}
                    >
                      EL
                    </option> */}
                    <option
                      value="CL"
                      className="cursor-pointer"
                      selected={formik.values.leave_type === "CL"}
                    >
                      Casual Leave
                    </option>
                    <option
                      value="SL"
                      className="cursor-pointer"
                      selected={formik.values.leave_type === "SL"}
                    >
                      Sick Leave
                    </option>
                    <option
                      value="ML"
                      className="cursor-pointer"
                      selected={formik.values.leave_type === "ML"}
                    >
                      Maternity Leave
                    </option>
                    <option
                      value="PL"
                      className="cursor-pointer"
                      selected={formik.values.leave_type === "PL"}
                    >
                      Annual/Planned Leave
                    </option>

                    <option
                      value="N"
                      className="cursor-pointer"
                      selected={formik.values.leave_type === "N"}
                    >
                      UnPaid 
                    </option>
                  </select>
                  {formik.errors.leave_type && (
                    <p className="text-red-600">{formik.errors.leave_type}</p>
                  )}
                </div>
                <div className="mb-5 ">
                  <label
                    htmlFor="description"
                    className="block text-xl mb-1 font-medium text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="Description"
                    placeholder="Description"
                    className="utline-none mt-1 p-2 w-full border rounded-md outline-none"
                    cols="10"
                    rows="6"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  ></textarea>
                  {formik.errors.description && (
                    <p className="text-red-600">{formik.errors.description}</p>
                  )}
                </div>

                <div className="text-start items-center justify-center">
                  <button
                    type="submit"
                    className="bg-orange-600 mt-2 text-white font-bold p-2 rounded-md w-[100%] hover:bg-gray-400 hover:text-black"
                  >
                    Submit
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
