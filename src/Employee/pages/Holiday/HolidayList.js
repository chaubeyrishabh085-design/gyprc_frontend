import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHolidayList } from "../../../Redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export const HolidayList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const holidayList = useSelector((state) => state.user.holidayList);

  useEffect(() => {
    dispatch(fetchHolidayList());
  }, [dispatch]);

  const handleEdit = (item) => {
    navigate("/employee/holiday-details/", { state: { item: item } });
  };

  return (
    <>
      <div className=" m-auto mb-5 px-6 max-sm:pt-4 ">
        <h3 className="flex items-center justify-start  mb-5 font-bold text-xl  ">
          <span className="text-orange-600 text-3xl ">Holiday List</span>
        </h3>
      </div>
      <div>
        <Table
          columns={columns}
          holidayList={holidayList}
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
  { key: "view", title: "Edit" },
];

export const Table = ({ columns, holidayList, handleEdit }) => {
  return (
    <div className="container overflow-x-auto w-[95%] m-auto xl:h-[70vh] overflow-auto shadow ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3  text-base font-medium text-gray-700 uppercase tracking-wider text-center"
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
                  {column.key === "view" ? (
                    <button
                      onClick={() => handleEdit(row)}
                      className="text-white cursor-pointer bg-green-600 text-white font-semibold px-3 py-1 rounded "
                    >
                      View
                    </button>
                  ) : column.key === "id" ? (
                    index + 1
                  ) : column.key === "other" ? (
                      row?.other.length > 70 ? `${row?.other.slice(0,70)}...` : row?.other
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
