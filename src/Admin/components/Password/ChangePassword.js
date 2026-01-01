import React, { useEffect, useState } from "react";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export const ChangePassword = () => {
  const [showIconPas, setShowIconPas] = useState(false);
  const [showIconConfirmPas, setShowIconConfirmmPas] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChangeIcon = () => {
    setShowIconPas((data) => !data);
  };
  const handleChangeIconConfirm = () => {
    setShowIconConfirmmPas((data) => !data);
  };
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: "" });
    }
  };

  useEffect(() => {
    handleValidation();
  }, [formData?.confirmPassword]);

  const handleValidation = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      setError("password do not match");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      username: formData?.username,
      password1: formData.newPassword,
      password2: formData.confirmPassword,
    };
    const res = await postData1("api/v1/admin/reset_password/", data, true);
    if (res.status_code === 200) {
      toast.success("Password Change SuccessFully !");
      setFormData({
        username: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      setFormData({});
      toast.error(res?.msg);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Change Password
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="oldpassword"
            className="block text-base font-medium text-gray-600"
          >
            UserName
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="newpassword"
            className="block text-base font-medium text-gray-600"
          >
            New Password
          </label>
          <div className="relative">
            <input
              // type="password"
              type={showIconPas ? "text" : "password"}
              placeholder="New password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
            {formData.newPassword !== "" && (
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
              // type="password"
              type={showIconConfirmPas ? "text" : "password"}
              placeholder="Confirm password"
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
        {error && <div style={{ color: "red" }}>{error}</div>}

        <button
          type="submit"
          className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
        >
          Changed
        </button>
      </form>
    </div>
  );
};
