import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postData1 } from "../../../APIs";
import { toast } from "react-toastify";
export const EditEmp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let userData = location.state.data;
  let isDeleted = location.state.deleted;
  const initailValue = {
    firstName: userData?.first_name ? userData?.first_name : "",
    lastName: userData?.last_name ? userData?.last_name : "",
    gender: userData?.gender ? userData?.gender : "",
    dob: userData?.dob ? userData?.dob : "",
    mobile: userData?.mobile ? Number(userData?.mobile) : "0",
    email: userData?.email ? userData?.email : "",
    joiningDate: userData?.joining_date ? userData?.joining_date : "",
    resignDate:
      userData?.resign_date !== null && userData?.resign_date
        ? userData?.resign_date
        : "",
    totalSalary: userData?.payroll?.total_salary
      ? Number(userData?.payroll?.total_salary)
      : "0",
    department: userData?.payroll?.department
      ? userData?.payroll?.department
      : "",
    desgination: userData?.desgination ? userData?.desgination : "",
    employeeType: userData?.payroll?.emp_type
      ? userData?.payroll?.emp_type
      : "",
    bankName: userData?.payroll?.bank_name
      ? userData?.payroll?.bank_name
      : "NA",
    bankAccount: userData?.payroll?.bankac
      ? Number(userData?.payroll?.bankac)
      : "0",
    pfNo: userData?.payroll?.pfno ? Number(userData?.payroll?.pfno) : "0",
    pfAmount: userData?.payroll?.pf_amount
      ? Number(userData?.payroll?.pf_amount)
      : "0",
    esiAmount: userData?.payroll?.esi_amount
      ? Number(userData?.payroll?.esi_amount)
      : "0",
    basic: userData?.payroll?.basic ? Number(userData?.payroll?.basic) : "0",
    DA: userData?.payroll?.DA ? Number(userData?.payroll?.DA) : "0",
    HRA: userData?.payroll?.HRA ? Number(userData?.payroll?.HRA) : "0",
    other: userData?.payroll?.other ? Number(userData?.payroll?.other) : "0",
    medical: userData?.payroll?.medical
      ? Number(userData?.payroll?.medical)
      : "0",
    advance: userData?.payroll?.advance
      ? Number(userData?.payroll?.advance)
      : "0",
    address: userData?.address ? userData?.address : "",
    resignDate: userData?.resign_date ? userData?.resign_date : "",
  };
  const [formData, setFormData] = useState(initailValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() !== "") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: "" });
    }
  };
  const handleUpdateEmployData = async () => {
    const data = {
      id: userData?.user,
      emp_id: userData?.emp_id,
      total_salary: formData?.totalSalary
        ? Number(formData?.totalSalary)
        : userData?.payroll?.total_salary,
      department: formData?.department
        ? formData?.department
        : userData?.payroll?.department,
      emp_type: formData?.employeeType
        ? formData?.employeeType
        : userData?.payroll?.emp_type,
      bank_name: formData?.bankName
        ? formData?.bankName
        : userData?.payroll?.bank_name,
      bankac: formData?.bankAccount
        ? Number(formData?.bankAccount)
        : userData?.payroll?.bankac,
      pfno: formData?.pfNo ? Number(formData?.pfNo) : userData?.payroll?.pfno,
      pf_amount: formData?.pfAmount
        ? Number(formData?.pfAmount)
        : userData?.payroll?.pf_amount,
      esi_amount: formData?.esiAmount
        ? Number(formData?.esiAmount)
        : userData?.payroll?.esi_amount,
      other: formData?.other
        ? Number(formData?.other)
        : userData?.payroll?.other,
      DA: formData?.DA ? Number(formData?.DA) : userData?.payroll?.DA,
      HRA: formData?.HRA ? Number(formData?.HRA) : userData?.payroll?.HRA,
      basic: formData?.basic
        ? Number(formData?.basic)
        : userData?.payroll?.basic,
      advance: formData?.advance
        ? Number(formData?.advance)
        : userData?.payroll?.advance,
      medical: formData?.medical
        ? Number(formData?.medical)
        : userData?.payroll?.medical,
    };
    const res = await postData1("api/v1/admin/register_payroll/", data, true);
    if (res.status_code === 200) {
      toast.success("Update SuccessFully");
      setTimeout(() => {
        navigate("/admin/employees");
      }, 1000);
    } else {
      toast.error(res.msg ? res.msg : "something went wrong !");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      gender: formData?.gender,
      dob: formData?.dob,
      id: userData?.user,
      emp_id: userData?.emp_id,
      first_name: formData?.firstName,
      last_name: formData?.lastName,
      mobile:
        formData?.mobile?.length > 11
          ? userData?.mobile?.slice(3, 13)
          : userData?.mobile,
      email: formData?.email,
      address: formData?.address,
      desgination:
        formData?.desgination?.length > 20
          ? formData?.desgination?.slice(0, 20)
          : formData?.desgination,
      joining_date: formData?.joiningDate,
      resign_date: "null",
    };
    const res = await postData1("api/v1/admin/register_emp/", data, true);
    if (res.status_code === 200) {
      handleUpdateEmployData();
    } else {
      toast.error(res.msg);
    }
  };

  const handleDeleteUser = async () => {
    let format = new Date().toLocaleDateString();
    let resignDate = format?.split("/");
    const data = {
      gender: userData?.gender,
      dob: userData?.dob,
      user: userData?.user,
      emp_id: userData?.emp_id,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      mobile:
        userData?.mobile?.length > 11
          ? userData?.mobile?.slice(3, 13)
          : userData?.mobile,
      email: userData?.email,
      address: userData?.address,
      desgination:
        userData?.desgination?.length > 20
          ? userData?.desgination?.slice(0, 20)
          : userData?.desgination,
      joining_date: userData?.joining_date,
      is_deleted: isDeleted ? false : true,
    };
    const res = await postData1("api/v1/admin/register_emp/", data, true);
    if (res?.status_code === 200) {
      if (res?.is_deleted) {
        navigate("/admin/ex-employees");
      } else {
        navigate("/admin/employees");
      }
    } else {
      toast.error(res?.msg);
    }
  };

  return (
    <div className=" xl:w-[80%] md:w-[85%]  max-sm:w-[80%]  sm:w m-auto p-6 bg-white border rounded-md shadow max-sm:mt-6">
      <h2 className="text-2xl text-orange-600 font-semibold  sm:fixed  ">
        {" "}
        Update Employee
      </h2>

      <div className="lg:h-[70vh] overflow-auto no-scrollbar mt-12">
        <form
          onSubmit={handleSubmit}
          className="Forms grid  max-2xl:grid-cols-2 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 "
        >
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="First name"
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Last name"
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Gender"
              required
            >
              <option value="M" selected={formData.gender === "M"}>
                Male
              </option>
              <option value="F" selected={formData.gender === "F"}>
                Female
              </option>
            </select>
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="D-O-B"
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Mobile no."
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Joining Date
            </label>
            <input
              type="date"
              name="joiningDate"
              id="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Joining Date"
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Total Salary
            </label>
            <input
              type="number"
              name="totalSalary"
              id="totalSalary"
              value={formData.totalSalary}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Total salary"
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Department
            </label>
            <select
              name="department"
              id="department"
              value={
                formData.department !== ""
                  ? formData.department
                  : userData?.desgination
              }
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="IT" selected={formData.department === "IT"}>
                IT
              </option>
              <option
                value="Operation"
                selected={formData.department === "Operation"}
              >
                Operation
              </option>
              <option
                value="Accounts"
                selected={formData.department === "Accounts"}
              >
                Accounts
              </option>
              <option value="HR" selected={formData.department === "HR"}>
                HR
              </option>
              <option
                value="Academic Content Writer"
                selected={formData.department === "Academic Content Writer"}
              >
                Academic Content Writer
              </option>
              <option
                value="Graphics Designer"
                selected={formData.department === "Graphics Designer"}
              >
                Graphics Designer
              </option>
              <option value="SEO" selected={formData.department === "SEO"}>
                SEO
              </option>
              <option value="Other" selected={formData.department === "Other"}>
                Other
              </option>
            </select>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Desgination
            </label>
            <input
              type="text"
              name="desgination"
              id="desgination"
              value={formData.desgination}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Advance Amount."
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Emp Type
            </label>
            <select
              name="employeeType"
              id="employeeType"
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            >
              <option value="" disabled>
                Select Emp Type
              </option>
              <option
                value="FullTime"
                selected={formData?.employeeType === "FullTime"}
              >
                FullTime
              </option>
              <option
                value="PartTime"
                selected={formData?.employeeType === "PartTime"}
              >
                PartTime
              </option>
              <option
                value="Intern"
                selected={formData?.employeeType === "Intern"}
              >
                Intern
              </option>
              <option
                value="Other"
                selected={formData?.employeeType === "Other"}
              >
                Other
              </option>
            </select>
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Bankname"
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Bank Ac No.
            </label>
            <input
              type="number"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Bank Account No."
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              PF No.
            </label>
            <input
              type="text"
              name="pfNo"
              value={formData.pfNo}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Pf No."
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              PF Amount
            </label>
            <input
              type="number"
              name="pfAmount"
              value={formData.pfAmount}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Pf Ammount."
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Esi Amount
            </label>
            <input
              type="number"
              name="esiAmount"
              value={formData.esiAmount}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Esi Amount."
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Medical
            </label>
            <input
              type="number"
              name="medical"
              value={formData.medical}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Medical."
              required
            />
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Advance
            </label>
            <input
              type="number"
              name="advance"
              value={formData.advance}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="Advance Amount."
              required
            />
          </div>

          <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
            <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
              placeholder="First name"
              rows="3"
              required
            ></textarea>
          </div>

          <div>
            <div className=" flex  justify-center mt-4">
              <button
                type="submit"
                className="px-4 w-1/2  py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none"
              >
                Update
              </button>
            </div>
            {/* <div className="mt-4 flex  justify-center mt-4">
            <button
              type="btn"
              onClick={handleDeleteUser}
              className="px-4 w-1/2  py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none"
            >
              Delete
            </button>
          </div> */}
          </div>
        </form>
        <div className="mt-4 flex  justify-center ">
          <button
            type="btn"
            onClick={handleDeleteUser}
            className="px-4 w-1/2  py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
