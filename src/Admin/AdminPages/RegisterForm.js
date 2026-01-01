import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { postData1 } from "../../APIs";
import { toast } from "react-toastify";
export const RegistrationForm = () => {
  const location = useLocation();
  const userId = location?.state?.item;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    designation: "",
    joiningDate: "",
    gender: "",
    dob: "",
    address: "",
    personalEmail: "",
  });

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      gender: formData.gender,
      dob: formData.dob,
      user: userId,
      first_name: formData.firstName,
      last_name: formData.lastName,
      mobile: formData.mobile,
      email: formData.personalEmail,
      address: formData.address,
      desgination: formData.designation,
      joining_date: formData.joiningDate,
      resign_date: "null",
    };
    const res = await postData1("api/v1/admin/register_emp/", data, true);
    if (res?.status_code === 200) {
      toast.success("Employee Registered Successfully !");
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        designation: "",
        joiningDate: "",
        gender: "",
        dob: "",
        address: "",
        personalEmail: "",
      });
      setTimeout(() => {
        navigate("payroll", { state: { item: res?.data } });
      }, 2000);
    } else {
      toast.error(
        res?.msg?.mobile ? res?.msg?.mobile[0] : "something went wrong !"
      );
    }
  };

  return (
    <div className=" xl:w-[90%] md:w-[85%]  max-sm:w-[80%] sm:w m-auto p-6 bg-white border rounded-md shadow">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Employee Registration
      </h2>
      <form
        onSubmit={handleSubmit}
        className="Forms grid  max-2xl:grid-cols-2 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 "
      >
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="First name"
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Last name"
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Email (Personal)
          </label>
          <input
            type="email"
            name="personalEmail"
            value={formData.personalEmail}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onKeyDown={blockInvalidChar}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Mobile no."
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Designation"
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Joining Date
          </label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Joining Date"
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Gender"
            required
          >
            <option value="" selected>
              Select Gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="D-O-B"
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-4 items-center">
          <label className=" min-w-[140px]  block text-lg font-medium text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="full address"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mt-4 flex  justify-center ">
          <button
            type="submit"
            className="px-4 w-[200px]  py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
