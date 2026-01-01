import React, { useState } from "react";
import profileImg from "../../assets/data/pro1.jpg";
import { useSelector } from "react-redux";
import { postData } from "../../APIs";
import { toast } from "react-toastify";

export const UploadProfileImg = () => {
  const empData = useSelector((state) => state?.user?.userData);
  const [image, setImage] = useState();
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", image);
    const res = await postData("app/upload_profile/", formData, true);
    if (res?.status_code === 200) {
      toast.success("Successfully uploaded !");
    } else {
      toast.error("Something went wrong !");
    }
  };
  return (
    <>
      <div className="flex px-2 gap-5 xl:ml-20">
        <img className="w-12 h-12 rounded-full" src={profileImg} alt="" />
        <div>
          <h1 className="text-2xl text-blue-900 font-semibold mb-2">
            Welcome Back, {empData?.username}
          </h1>
          <p>Inspiration does exist, but it must find you working.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center m-auto bg-slate-100 w-[500px] h-[300px] mt-10">
        <div className="m-10">
          <input
            type="file"
            placeholder="choose image"
            accept="image/*"
            name="image"
            id="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="ms-10 mb-10">
          <button
            type="btn"
            onClick={handleUpload}
            className="bg-green-600 rounded p-1 text-white w-[100px] h-fit text-xl"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};
