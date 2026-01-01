import React, { useEffect} from "react";
import { NavLink } from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchComplaintList } from "../../../Redux/slices/adminSlice";

export const Complaint = () => {
  const dispatch = useDispatch();
  const complaintList = useSelector((state) => state.admin.complaint);

  useEffect(() => {
    dispatch(fetchComplaintList());
  }, [dispatch]);

  //   delete complaint

  const handleDeleteComplaint = async (id) => {
    const data = {
      id: id,
      is_deleted: true,
    };
    const res = await postData1("api/v1/admin/update_complaint/", data, true);
    if (res?.status_code === 200) {
      toast.success("Deleted Successfully !");
      dispatch(fetchComplaintList());
    } else {
      toast.error("Something went worng !");
    }
  };

  return (
    <>
      <div className=" text-center">
        <h1 className="text-3xl font-semibold text-orange-600 text-start mb-4 max-sm:p-4 sm:px-14">
          Employee Complaints{" "}
        </h1>
      </div>
      <div className="App">
        <Table
          columns={columns}
          handleDeleteComplaint={handleDeleteComplaint}
          complaintList={complaintList}
        />
      </div>
    </>
  );
};

export const columns = [
  { key: "id", title: "ID" },
  { key: "name", title: "Employee" },
  { key: "date", title: "Complaint Date" },
  { key: "status", title: "Status" },
  { key: "delete", title: "Delete" },
  { key: "details", title: "Detail" },
];

export const Table = ({ columns, complaintList, handleDeleteComplaint }) => {
  return (
    <div className="overflow-x-auto w-[90%] m-auto shadow rounded">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider text-center"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {complaintList?.map((row, index) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                >
                  {column.key === "delete" ? (
                    <span
                      onClick={() => handleDeleteComplaint(row?.id)}
                      className="text-red-600 cursor-pointer"
                    >
                      <i className="bi bi-trash me-2"></i>
                      {/* Delete */}
                    </span>
                  ) : column.key === "details" ? (
                    <NavLink
                      to={`/admin/complaints-details/${row?.id}`}
                      state={{ details: row }}
                    >
                      <p className="text-blue-600">View </p>
                    </NavLink>
                  ) : column?.key === "name" ? (
                    `${row?.profile?.first_name} ${row?.profile?.last_name}`
                  ) : column?.key === "id" ? (
                    index + 1
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
