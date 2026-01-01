import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchHolidayList } from "../../../Redux/slices/adminSlice";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";

export const HolidayList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const holidayList = useSelector((state) => state?.admin?.holidayList);

  useEffect(() => {
    dispatch(fetchHolidayList());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const data = {
      id: id,
      is_deleted: true,
    };
    const res = await postData1("api/v1/admin/add_holidays/", data, true);
    if (res.status_code === 200) {
      toast.success("Deleted Successfully !");
      dispatch(fetchHolidayList());
    }
  };
  const handleEdit = (item) => {
    navigate("/admin/add-holiday", { state: { item: item } });
  };
  return (
    <>
      <div className=" m-auto mb-5 max-sm:p-4">
        <NavLink to="/admin/add-holiday">
          <button className="bg-orange-600 w-[100px] py-2 m-auto ml-16 rounded font-semibold text-white">
            Add
          </button>
        </NavLink>
      </div>
      <div>
        <Table
          columns={columns}
          holidayList={holidayList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};

export const columns = [
  { key: "id", title: "ID" },
  { key: "date", title: "Date" },
  { key: "name", title: "Name" },
  { key: "other", title: "Details" },
  { key: "delete", title: "Delete" },
  { key: "view", title: "Edit" },
];

export const Table = ({ columns, holidayList, handleDelete, handleEdit }) => {
  return (
    <div className="container overflow-x-auto w-[94%] m-auto xl:h-[70vh] overflow-auto shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-base font-medium text-gray-700 uppercase tracking-wider text-center"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {holidayList?.map((row, index) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                >
                  {column.key === "delete" ? (
                    <button
                      onClick={() => handleDelete(row?.id)}
                      className=" cursor-pointer bg font-semibold px-3 py-1 rounded "
                    >
                      Delete
                    </button>
                  ) : column.key === "view" ? (
                    <button
                      onClick={() => handleEdit(row)}
                      className=" cursor-pointer bg-green-600 text-white font-semibold px-3 py-1 rounded "
                    >
                      View
                    </button>
                  ) : column.key === "id" ? (
                    index + 1
                  ) : column.key === "other" ? (
                    row?.other.length > 70 ? (
                      `${row?.other.slice(0, 70)}...`
                    ) : (
                      row?.other
                    )
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
