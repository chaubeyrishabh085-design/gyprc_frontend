import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAssetsList } from "../../../Redux/slices/adminSlice";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";

export const Assets = () => {
  const dispatch = useDispatch();
  const assetsList = useSelector((state) => state?.admin?.assetsList);

  useEffect(() => {
    dispatch(fetchAssetsList());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const data = {
      id: id,
      is_deleted: true,
    };
    const res = await postData1("api/v1/admin/add_asset/", data, true);
    if (res.status_code === 200) {
      toast.success("Deleted Successfully !");
      dispatch(fetchAssetsList());
    }
  };
  return (
    <>
      <div className=" m-auto mb-5  max-sm:p-4">
        <NavLink to="/admin/add-assets">
          <button className="bg-orange-600 w-[100px]  py-2 m-auto ml-16 rounded font-semibold text-white">
            Add
          </button>
        </NavLink>
      </div>
      <div>
        <Table
          columns={columns}
          assetsList={assetsList}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export const columns = [
  { key: "id", title: "ID" },
  { key: "date", title: "Date" },
  { key: "username", title: "Username" },
  { key: "details", title: "Details" },
  { key: "action", title: "Action" },
];

export const Table = ({ columns, assetsList, handleDelete }) => {
  return (
    <div className=" w-[90%] m-auto xl:h-[70vh] overflow-auto shadow no-scrollbar">
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
          {assetsList?.map((row, index) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                >
                  {column.key === "action" ? (
                    <button
                      onClick={() => handleDelete(row?.id)}
                      className="text-white cursor-pointer bg-red-600 text-white font-semibold px-3 py-1 rounded "
                    >
                      Delete
                    </button>
                  ) : column.key === "id" ? (
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
