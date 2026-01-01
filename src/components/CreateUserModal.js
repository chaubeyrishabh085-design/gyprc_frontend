import React, { useEffect, useState } from 'react';

function CreateUserModal({ isOpen, onClose, onSubmit, userdata }) {
    const [formData, setFormData] = useState({
        name: userdata?.name,
        email: userdata?.email,
        username: userdata?.username,
        phone: userdata?.phone,
        password: '',
        confirm_password: '',
        totalResume: userdata?.totalResume,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (userdata) {
            setFormData({
                name: userdata.name,
                email: userdata.email,
                username: userdata.username,
                phone: userdata.phone,
                password: '',
                confirm_password: '',
                totalResume: userdata.totalResume,
            });
        }
    }, [userdata]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formData.username) {
            newErrors.username = 'Username is required';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        if (formData.password !== formData.confirm_password) {
            newErrors.confirm_password = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onSubmit(formData);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Create Consultancy User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="phone"
                            placeholder="Phone"
                            minLength={10}
                            maxLength={10}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            type="password"
                        />
                        {errors.confirm_password && <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>}
                    </div>
                    {/* <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            name="totalResume"
                            placeholder="Total Resume"
                            onChange={handleChange}
                        />
                        {errors.totalResume && <p className="text-red-500 text-xs mt-1">{errors.totalResume}</p>}
                    </div> */}
                    <div className="flex justify-between">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateUserModal; 

