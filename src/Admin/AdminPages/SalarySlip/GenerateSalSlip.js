import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SalarySlip } from "../../../Employee/pages/SalarySlip";

export const GenerateSalSlip = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <>
      <div className="max-sm:ml-0 sm:ml-16">
      

        <div className="SalarySlipall max-sm:p-4">
          <button
            className="bg-orange-500 text-white px-2 rounded font-semibold py-1 "
            onClick={() => handleButtonClick("SalarySlipInd")}
          >
            {" "}
            Individual
          </button>
        </div>

        {selectedComponent === "SalarySlipAll" && <SalarySlipAll />}
        {selectedComponent === "SalarySlipInd" && <SalarySlipInd />}
      </div>
    </>
  );
};

export const SalarySlipAll = () => {
  const [formData, setFormData] = useState({
    date: "",
    date2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Enter Date
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="oldpassword"
            className="block text-base font-medium text-gray-600"
          >
            From
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

        <div className="mb-4">
          <label
            htmlFor="newpassword"
            className="block text-base font-medium text-gray-600"
          >
            To
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <NavLink to="">
          <button
            type="submit"
            className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
          >
            Download
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export const SalarySlipInd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/salary-slip", "_blank");
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Enter Folowings
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="oldpassword"
            className="block text-base font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="newpassword"
            className="block text-base font-medium text-gray-600"
          >
            Month
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

        {/* <NavLink to="" > */}
        <button
          type="submit"
          className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
        >
          Submit
        </button>
        {/* </NavLink> */}
      </form>
    </div>
  );
};

export const DownloadSheet = () => {
  const [formData, setFormData] = useState({
    date: "",
    date2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Enter Date
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="oldpassword"
            className="block text-base font-medium text-gray-600"
          >
            From
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

        <div className="mb-4">
          <label
            htmlFor="newpassword"
            className="block text-base font-medium text-gray-600"
          >
            To
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <NavLink to="">
          <button
            type="submit"
            className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
          >
            Download
          </button>
        </NavLink>
      </form>
    </div>
  );
};
