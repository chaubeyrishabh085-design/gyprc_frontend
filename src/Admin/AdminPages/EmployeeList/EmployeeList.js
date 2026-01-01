import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../../Redux/slices/adminSlice";
import { MdCancelPresentation } from "react-icons/md";
import { setUserData } from "../../../Redux/slices/userSlice";

export const EmployeeList = () => {
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
      const { first_name, last_name, username, mobile, desgination,email } = el;
      const searchTerm = search?.toLowerCase();
      if (
        first_name?.toLowerCase().includes(searchTerm) ||
        last_name?.toLowerCase().includes(searchTerm) ||
        username?.toLowerCase().includes(searchTerm) ||
        mobile?.toLowerCase().includes(searchTerm) ||
        desgination?.toLowerCase().includes(searchTerm) ||
        email?.toLowerCase().includes(searchTerm)
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
    dispatch(fetchEmployeeList());
  }, []);
  return (
    <>
      <div className="container text-center flex mb-4">
        <h1 className="text-3xl  font-semibold text-orange-600 text-start max-sm:p-3  sm:p-3 lg:px-14">
          Employee List{" "}
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
      <div className="container">
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
  { key: "salary_slip", title: "Salary Slip" },
];

export const Table = ({ columns, employeeList, filteredEmployees, search }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleToggle = (item) => {
    setToggle(true);
    dispatch(setUserData(item));
  };

  return (
    <>
      <div className="container overflow-x-auto w-[94%] h-[76vh] m-auto shadow rounded no-scrollbar">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-2 py-3 text-center text-base font-medium text-gray-700 uppercase tracking-wider "
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {search
              ? filteredEmployees?.map((row) => (
                  <tr key={row.id}>
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-1 py-3 whitespace-nowrap text-base text-gray-700 text-center"
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
                            state={{ data: row }}
                          >
                            <p className="text-blue-600">Edit</p>
                          </NavLink>
                        ) : column.key === "documents" ? (
                          <NavLink>
                            <p className="text-blue-600">Upload</p>
                          </NavLink>
                        ) : column.key === "salary_slip" ? (
                          <div onClick={() => handleToggle(row)}>
                            <p className="text-blue-600 cursor-pointer">
                              Download
                            </p>
                          </div>
                        ) : column.key === "name" ? (
                          `${row?.first_name} ${row?.last_name}`
                        ) : (
                          row[column.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              : employeeList?.map((row) => (
                  <tr key={row.id}>
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-1 py-3 whitespace-nowrap text-base text-gray-700 text-center"
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
                            state={{ data: row }}
                          >
                            <p className="text-blue-600">Edit</p>
                          </NavLink>
                        ) : column.key === "documents" ? (
                          <NavLink>
                            <p className="text-blue-600">Upload</p>
                          </NavLink>
                        ) : column.key === "salary_slip" ? (
                          <div onClick={() => handleToggle(row)}>
                            <p className="text-blue-600 cursor-pointer">
                              Download
                            </p>
                          </div>
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
      </div>Dow
      {toggle && (
        <div className="fixed top-[30%] left-1/2 z-100">
          <SalarySlip setToggle={setToggle} />
        </div>
      )}
    </>
  );
};

export const SalarySlip = ({ setToggle }) => {
  const empData = useSelector((state) => state.user.userData);
  const navigation = useNavigate();
  const hadleSubmit = (e) => {
    e.preventDefault();
    navigation("/admin/salary-view");
  };
  return (
    <div className="flex justify-center items-center  text-center">
      <div className="w-[300px] bg-white   rounded shadow p-5">
        <span
          onClick={() => setToggle(false)}
          className="text-2xl flex items-center justify-end cursor-pointer"
        >
          <MdCancelPresentation />
        </span>
        <h1 className="text-lg font-semibold">
          Employee Name :{" "}
          {`${empData?.first_name} ${
            empData?.last_name_name ? empData?.last_name_name : ""
          }`}
        </h1>
        <h1 className="text-lg font-semibold">Select Folowings.</h1>
        <div className="flex-col">
          <form onSubmit={hadleSubmit}>
            <div className="mb-2 mt-2 flex flex-col gap-4">
              <label className="text-base font-semibold" htmlFor="">
                Month
              </label>
              <div>
                <input
                  className="border px-2 py-1 rounded text-base font-semibold"
                  type="date"
                />
              </div>
              <div>
                <button className="bg-orange-600  py-1 w-[150px] text-base font-semibold text-white rounded cursor-pointer hover:bg-orange-500">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
