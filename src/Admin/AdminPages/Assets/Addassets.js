import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";

export const AddAssets = () => {
  const navigate =  useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    date: "",
    detail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        [name]: "",
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: formData?.username,
      date: formData?.date,
      details: formData?.detail,
    };
    const res = await postData1("api/v1/admin/add_asset/", data, true);
    if(res?.status_code === 200){
      toast.success("Added Successfull !")
      setTimeout(()=>{
        navigate("/admin/assets")
      },1000)
    }
  };


 

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Add Assets
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-base font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-base font-medium text-gray-600"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-base font-medium text-gray-600"
          >
            Detail
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            name="detail"
            id="detail"
            value={formData.detail}
            onChange={handleChange}
            cols="30"
            rows="4"
            placeholder="Details"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
        >
          Add
        </button>
      </form>
    </div>
  );
};
