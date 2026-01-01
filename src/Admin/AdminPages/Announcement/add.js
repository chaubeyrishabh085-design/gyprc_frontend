import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { postData1 } from "../../../APIs/index";
export const Add = ({
  setSelectedComponent,
  updateList,
  setUpdateList,
  handleListData,
}) => {
  const [disable, setdisable] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (updateList?.id) {
      setFormData({
        title: updateList?.title,
        description: updateList?.details,
      });
    } else {
      setFormData({});
    }
  }, [updateList]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ [name]: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setdisable(true);
    let data = {};
    if (updateList?.id) {
      data = {
        id: updateList?.id,
        title: formData.title,
        details: formData.description,
      };
    } else {
      data = {
        title: formData.title,
        details: formData.description,
      };
    }
    const res = await postData1("api/v1/admin/add_announcements/", data, true);
    if (res?.status_code === 200) {
      handleListData();
      setUpdateList({});
      setFormData({
        title: "",
        details: "",
      });
      setdisable(false);
      setSelectedComponent("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-2 bg-white rounded-md shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label
            htmlFor="username"
            className="block text-lg font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="mt-1 p-1 w-full border rounded-md outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-base font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            className="mt-1 p-1 w-full border rounded-md outline-none"
            onChange={handleChange}
            value={formData.description}
            name="description"
            id="description"
            cols="30"
            rows="3"
            placeholder="Description"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={disable}
          className="w-full font-semibold text-lg bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 "
        >
          Add
        </button>
      </form>
    </div>
  );
};
