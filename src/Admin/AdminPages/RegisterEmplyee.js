import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postData1 } from "../../APIs";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const RegisterEmployee = () => {
  const navigate = useNavigate();
  const initailValue = {
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initailValue);
  const [showIconPas, setShowIconPas] = useState(false);
  const [showIconConfirmPas, setShowIconConfirmmPas] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: "" });
    }
  };
  const handleChangeIcon = () => {
    setShowIconPas((data) => !data);
  };
  const handleChangeIconConfirm = () => {
    setShowIconConfirmmPas((data) => !data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: formData.username,
      password1: formData.password,
      password2: formData.confirmPassword,
    };
    const res = await postData1("api/v1/admin/create_emp/", data, true);
    if (res?.status_code === 200) {
      toast.success("Employee Created Successfully !");
      setTimeout(() => {
        navigate("/admin/registraion-form", { state: { item: res?.data?.id } });
      }, 2000);
    } else {
      toast.error(res?.msg ? res?.msg : "something went wrong !");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Create Credentials
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-base font-medium text-gray-600"
          >
            Employee email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Employee email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-base font-medium text-gray-600"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showIconPas ? "text" : "password"}
              placeholder="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            {formData.password !== "" && (
              <span
                onClick={handleChangeIcon}
                className="absolute top-4 right-5 cursor-pointer"
              >
                {showIconPas ? <FaEye /> : <FaEyeSlash />}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-base font-medium text-gray-600"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showIconConfirmPas ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            {formData.confirmPassword !== "" && (
              <span
                onClick={handleChangeIconConfirm}
                className="absolute top-4 right-5 cursor-pointer"
              >
                {showIconConfirmPas ? <FaEye /> : <FaEyeSlash />}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
        >
          Create
        </button>
      </form>
    </div>
  );
};
