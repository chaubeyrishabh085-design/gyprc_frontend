import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../Redux/slices/adminSlice";

export const ExEmplyeeList = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.admin.employeeList);
  const [search, setsearch] = useState("");
  const [filteredEmployees, setFilterEmployees] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    if (value.trim() !== "") {
      setsearch(value);
    } else {
      setsearch("");
    }
  };

  const filterEmployeeData = () => {
    let fill = employeeList?.filter((el) => {
      const { first_name, last_name, username, mobile, desgination } = el;
      const searchTerm = search?.toLowerCase();
      if (
        first_name?.toLowerCase().includes(searchTerm) ||
        last_name?.toLowerCase().includes(searchTerm) ||
        username?.toLowerCase().includes(searchTerm) ||
        mobile?.toLowerCase().includes(searchTerm) ||
        desgination?.toLowerCase().includes(searchTerm)
      ) {
        return el;
      }
    });
    setFilterEmployees(fill);
  };

  useEffect(() => {
    filterEmployeeData();
  }, [search]);

  useEffect(() => {
    dispatch(fetchEmployeeList(true));
  }, []);
  return (
    <>
      <div className="container text-center flex mb-4">
        <h1 className="text-3xl font-semibold text-orange-600 text-start px-14">
          Ex-Employee List{" "}
        </h1>
        <input
          className="p-3 text-xl border-0 outline-none"
          type="text"
          placeholder="search"
          name="search"
          id="search"
          autoComplete="off"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="">
        <Table
          columns={columns}
          employeeList={employeeList}
          filteredEmployees={filteredEmployees}
          search={search}
        />
      </div>
    </>
  );
};

export const columns = [
  { key: "user", title: "ID" },
  { key: "name", title: "Full Name" },
  { key: "mobile", title: "Mobile" },
  { key: "email", title: "Email (Personal)" },
  { key: "username", title: "Email (Official)" },
  { key: "gender", title: "Gender" },
  { key: "attendance", title: "Attendance" },
  { key: "edit", title: "Edit" },
  { key: "documents", title: "Documents" },
];

export const Table = ({ columns, employeeList, filteredEmployees, search }) => {
  return (
    <div className="container overflow-x-auto w-[94%]  xl:h-[76vh] m-auto shadow rounded">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-2 py-3 text-base font-medium text-gray-700 uppercase tracking-wider text-center"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {search
            ? filteredEmployees?.map((row, index) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-1 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                    >
                      {column.key === "delete" ? (
                        <span className="text-red-600 cursor-pointer">
                          <i className="bi bi-trash me-2"></i>
                          {/* Delete ${row.id}*/}
                        </span>
                      ) : column.key === "attendance" ? (
                        <NavLink
                          to={`/admin/view-attendance/${row?.emp_id}`}
                          state={{ list: row?.emp_id }}
                        >
                          <p className="text-blue-600">View </p>
                        </NavLink>
                      ) : column.key === "edit" ? (
                        <NavLink
                          to={`/admin/edit-emp/${row?.emp_id}`}
                          state={{ data: row, deleted: row?.is_deleted }}
                        >
                          <p className="text-blue-600">Edit</p>
                        </NavLink>
                      ) : column.key === "documents" ? (
                        <NavLink to={`/admin/upload-documents/${row.id}`}>
                          <p className="text-blue-600">Upload</p>
                        </NavLink>
                      ) : column.key === "id" ? (
                        index + 1
                      ) : column.key === "name" ? (
                        `${row?.first_name} ${row?.last_name}`
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            : employeeList?.map((row, index) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-1 py-4 whitespace-nowrap text-base text-gray-700 text-center"
                    >
                      {column.key === "delete" ? (
                        <span className="text-red-600 cursor-pointer">
                          <i className="bi bi-trash me-2"></i>
                          {/* Delete ${row.id}*/}
                        </span>
                      ) : column.key === "attendance" ? (
                        <NavLink
                          to={`/admin/view-attendance/${row?.emp_id}`}
                          state={{ list: row?.emp_id }}
                        >
                          <p className="text-blue-600">View </p>
                        </NavLink>
                      ) : column.key === "edit" ? (
                        <NavLink
                          to={`/admin/edit-emp/${row?.emp_id}`}
                          state={{ data: row, deleted: row?.is_deleted }}
                        >
                          <p className="text-blue-600">Edit</p>
                        </NavLink>
                      ) : column.key === "documents" ? (
                        <NavLink to={`/admin/upload-documents/${row.id}`}>
                          <p className="text-blue-600">Upload</p>
                        </NavLink>
                      ) : column.key === "id" ? (
                        index + 1
                      ) : column.key === "name" ? (
                        `${row?.first_name} ${row?.last_name}`
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
