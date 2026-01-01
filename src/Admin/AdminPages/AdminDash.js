import React, { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { AdminProfile } from "../components/AdminProfile";
import { Add } from "./Announcement/add";
import { postData1 } from "../../APIs";
import { Announcement } from "./Announcement/Announcement";

export const AdminDash = () => {
  const [adminData, setAdminData] = useState({});
  const [annoucementList, setAnnoucementList] = useState([]);
  const [updateList, setUpdateList] = useState({});
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (data) => {
    if (selectedComponent === "Add") {
      setSelectedComponent("");
      setUpdateList({});
    } else {
      setSelectedComponent(data);
    }
  };

  useEffect(() => {
    handleAdminDash();
    handleListData();
    handleUpdateAttendece();
  }, []);

  const handleAdminDash = async () => {
    const res = await postData1("api/v1/admin/dashboard/", {}, true);
    if (res?.status_code === 200) {
      setAdminData(res.data);
    }
  };

  const handleListData = async () => {
    const res = await postData1("api/v1/admin/get_announcements/", {}, true);
    if (res?.status_code === 200) {
      setAnnoucementList(res?.data?.data);
    }
  };
  const handleUpdateAttendece = async () => {
    const res = await postData1("api/v1/admin/add_default_atten/", {}, true);
  };

  return (
    <>
      <div className="container w-[92%] m-auto">
        <div className=" ">
          <AdminProfile />
        </div>
        <div className="adminDash grid  xl:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 gap-2 ">
          <Card
            title="Total Emlopees"
            value={adminData?.total_employees}
            urgency="View"
            path="/admin/employees"
            bgColor="bg-blue-100"
          />
          <Card
            title="Present today"
            value={adminData?.total_present}
            urgency="View"
            path="/admin/attendence-view"
            bgColor="bg-blue-100"
          />
          <Card
            title="Absent today"
            value={adminData?.total_employees - adminData?.total_present}
            urgency="View"
            path="/admin/attendence-view"
            bgColor="bg-blue-100"
          />
          <Card
            title="Total Leave"
            value={adminData?.total_leaves}
            urgency="View"
            path="/admin/attendence-view"
            bgColor="bg-blue-100"
          />
        </div>
      </div>

      <div className="container AdmAnnouncement flex   flex-col-reverse justify-evenly 	px-5 sm:flex-col-reverse md:flex-col-reverse xl:flex-row md-flex  xl:h-[50vh]  overflow-y-auto ">
        <div className="">
          <Announcement
            annoucementList={annoucementList}
            setSelectedComponent={setSelectedComponent}
            setUpdateList={setUpdateList}
          />
        </div>

        <div className="">
          <button
            className="bg-blue-900 text-xl text-white  font-semibold p-2 rounded mt-5 shadow-2xl "
            onClick={() => handleButtonClick("Add")}
          >
            Add Announcement
          </button>
          {selectedComponent === "Add" && (
            <Add
              setSelectedComponent={setSelectedComponent}
              updateList={updateList}
              setUpdateList={setUpdateList}
              handleListData={handleListData}
            />
          )}
        </div>
      </div>
    </>
  );
};
