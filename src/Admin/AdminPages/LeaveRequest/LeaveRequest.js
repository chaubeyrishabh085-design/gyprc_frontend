import React, { useEffect, useState } from "react";
import { postData1 } from "../../../APIs";
import { NavLink } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { toast } from "react-toastify";
const LeaveRequest = () => {
  const [leaveList, setLeaveList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const initialValues = { sDate: "", eDate: "", lStatus: "" };
  const [form, setForm] = useState(initialValues);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    leaveReqList();
  }, [pageNo]);

  const leaveReqList = async () => {
    const data = {
      _limit: 15,
      _page: pageNo,
      is_deleted: false,
    };
    const res = await postData1("api/v1/admin/leave_list/", data, true);
    if (res?.status) {
      setLeaveList(res?.data);
    }
  };

  // filter leave request

  const handleFilterData = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitFilter = () => {
    let fill = leaveList?.data?.filter((el) => {
      if (
        el?.request_date >= form.sDate &&
        el?.request_date <= form.eDate &&
        el.status === form.lStatus
      ) {
        setToggle(true);
        return el;
      } else {
        return false;
      }
    });
    setFilterList(fill);
  };

  const handleClearFilter = () => {
    setFilterList([]);
    setToggle(false);
    setForm({
      sDate: "",
      eDate: "",
      lStatus: "",
    });
  };

  // delete leave request

  const handleDelete = async (val) => {
    const data = {
      id: val?.id,
      is_deleted: true,
    };
    const res = await postData1("api/v1/admin/update_leave/", data, true);
    if (res?.status) {
      toast.success("Deleted Successfully !");
      leaveReqList();
    } else {
      toast.error("Something went worng !");
    }
  };


  return (
    <div className="w-[90%] m-auto">
      <div>
        <h3 className="text-2xl font-semibold pl-0 xl:pl-5 text-orange-600 ">
          Leave Request
        </h3>
      </div>
      <div className="leaveFilter flex items-center justify-between mb-3  ">
        <div className="w-3/4 m-3 flex xl:flex-row max-sm:flex-col  max-md:flex-col max-md:gap-4">
          <div className="flex flex-cols">
            <label className="p-1 ml-2 me-2 min-w-12">From</label>
            <input
              className="border-2 p-1 ml-2 me-2 rounded shadow border-none"
              name="sDate"
              value={form.sDate}
              onChange={handleFilterData}
              type="date"
            />
          </div>

          <div className="flex flex-cols">
            <label className="p-2 ml-2  me-2 min-w-12">To</label>
            <input
              type="date"
              className="border-2 p-1 ml-2 me-2 rounded shadow outline-none border-none "
              name="eDate"
              value={form.eDate}
              onChange={handleFilterData}
            />
          </div>
          <div className="flex flex-cols">
            <label className="p-2 ml-2 xl:ml-2   me-2">Status</label>
            <select
              className="p-2 ml-2 me-2 rounded shadow"
              name="lStatus"
              onChange={handleFilterData}
            >
              <option>All</option>
              <option value="Pending" selected={form.lStatus === "Pending"}>
                Pending
              </option>
              <option value="Accepted" selected={form.lStatus === "Accepted"}>
                Accepted
              </option>
              <option
                value="Not Accepted"
                selected={form.lStatus === "Not Accepted"}
              >
                Not Accepted
              </option>
            </select>
          </div>

          <div className="flex flex-cols">
            <button
              type="submit"
              onClick={handleSubmitFilter}
              className="w-28 border-0 rounded-md text-white bg-cyan-400  h-9 xl-ml-2 me-2"
            >
              Apply
            </button>
          </div>

          <div className="flex flex-cols">
            <button
              type="btn"
              onClick={handleClearFilter}
              className="w-28 border-0 rounded-md text-white bg-red-600  h-9"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto  h-[60vh] bg-white shadow no-scrollbar">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="border rounded-md bg-gray-50 h-14 ">
            <tr className="">
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                ID
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                Username
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                Email
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                Request Date
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                Days
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                Status
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                Delete
              </th>
              <th className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {toggle
              ? filterList
                  ?.sort(
                    (a, b) =>
                      new Date(b.request_date) - new Date(a.request_date)
                  )
                  ?.map((leave, index) => {
                    return (
                      <tr key={leave?.id} className="border h-12 text-black">
                        <th className=" font-light">{index + 1}</th>
                        <th className=" font-light">{`${leave?.profile?.first_name} ${leave?.profile?.last_name}`}</th>
                        <th className=" font-light">{`${leave?.profile?.email}`}</th>
                        <th className="font-light">{leave?.request_date}</th>
                        <th className="font-light">{leave?.ndays}</th>
                        <th className="font-light">{leave?.status}</th>
                        <th className="font-light ">
                          <span
                            onClick={() => handleDelete(leave)}
                            className="text-red-600 cursor-pointer"
                          >
                            <i className="bi bi-trash me-2"></i>
                          </span>
                        </th>
                        <NavLink
                          to={`/admin/leave-details/${leave?.id}`}
                          state={{ detail: leave }}
                          className="font-light"
                        >
                          <p className="text-blue-600 text-center  mt-2">
                            View{" "}
                          </p>
                        </NavLink>
                      </tr>
                    );
                  })
              : leaveList?.data
                  ?.sort((a, b) => new Date(b.request_date) - new Date(a.request_date))
                  ?.map((leave, index) => {
                    return (
                      <tr className="border h-12 text-black">
                        <th className=" font-light">{index + 1}</th>
                        <th className=" font-light">{`${leave?.profile?.first_name} ${leave?.profile?.last_name}`}</th>
                        <th className=" font-light">{`${leave?.profile?.email}`}</th>
                        <th className="font-light">{leave?.request_date}</th>
                        <th className="font-light">{leave?.ndays}</th>
                        <th className="font-light">{leave?.status}</th>
                        <th className="font-light ">
                          <span
                            onClick={() => handleDelete(leave)}
                            className="text-red-600 cursor-pointer"
                          >
                            <i className="bi bi-trash me-2"></i>
                          </span>
                        </th>
                        <NavLink
                          to={`/admin/leave-details/${leave?.id}`}
                          state={{ detail: leave }}
                          className="font-light"
                        >
                          <p className="text-blue-600 text-center  mt-2">
                            View{" "}
                          </p>
                        </NavLink>
                      </tr>
                    );
                  })}
          </tbody>
        </table>
      </div>
      {/* {
        leaveList.length > 14 &&
      } */}
      {!filterList?.length && (
        <Pagination
          setPageNo={setPageNo}
          perPage={leaveList?.per_page}
          pageNo={pageNo}
          totalPage={leaveList?.total_pages}
          totalItem={leaveList?.total}
        />
      )}
    </div>
  );
};

export default LeaveRequest;
