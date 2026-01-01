import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const ChangeEmpPassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">Change Employee Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-base font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-base font-medium text-gray-600">
           New Password
          </label>
          <input
            type="password"
            placeholder='New password'

            id="newpassword"
            name="newpassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder='Confirm password'
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

       <NavLink to="/admin/change-emp-password" >
       <button
          type="submit"
          className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 ">
          Changed
        </button>
       </NavLink>
      </form>
    </div>
  );
};







