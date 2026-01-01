import React, { useState } from "react";
import { postData1 } from "../../APIs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PayRollRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location?.state?.item;
  const initailValue = {
    department: "",
    emyType: "",
    bankname: "",
    bankAccount: "",
    pfNO: "",
    pfAmount: "",
    esiAmount: "",
    basic: "",
    DA: "",
    HRA: "",
    other: "",
    medical: "",
    advance: "",
    totalSalary: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: userData?.user,
      department: formData.department,
      emp_type: formData.emyType,
      bank_name: formData.bankname,
      bankac: Number(formData.bankAccount),
      pfno: Number(formData.pfNO),
      pf_amount: Number(formData.pfAmount),
      esi_amount: Number(formData.esiAmount),
      basic: Number(formData.basic),
      DA: Number(formData.DA),
      HRA: Number(formData.HRA),
      other: Number(formData.other),
      medical: Number(formData.medical),
      advance: Number(formData.advance),
      total_salary: Number(formData.totalSalary),
      resign_date: "null",
    };
    const res = await postData1("api/v1/admin/register_payroll/", data, true);
    if (res.status_code === 200) {
      toast.success("Employee Payroll Updated !");
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    }
  };

  return (
    <div className=" xl:w-[80%] md:w-[85%]  max-sm:w-[80%] sm:w m-auto p-6 bg-white border rounded-md shadow">
      <h2 className="text-2xl text-orange-600 font-semibold mb-4">
        Payroll Registration
      </h2>

      <form
        onSubmit={handleSubmit}
        className="Forms grid  max-2xl:grid-cols-2 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 "
      >
        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            Department
          </label>

          <select
            name="department"
            id="department"
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
          >
            <option value="" selected disabled>
              Select Department
            </option>
            <option value="IT">IT</option>
            <option value="Operation">Operation</option>
            <option value="Accounts">Accounts</option>
            <option value="HR">HR</option>
            <option value="Academic Content Writer">
              Academic Content Writer
            </option>
            <option value="Graphics Designer">Graphics Designer</option>
            <option value="SEO">SEO</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            Emp Type
          </label>
          <select
            name="emyType"
            id="emyType"
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
          >
            <option value="" selected disabled>
              Select Emp Type
            </option>
            <option value="Intern">Intern</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            Bank Name
          </label>
          <input
            type="text"
            name="bankname"
            id="bankname"
            value={formData.bankname}
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
            id="bankAccount"
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
            type="number"
            name="pfNO"
            id="pfNo"
            value={formData.pfNO}
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
            id="pfAmount"
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
            id="esiAmount"
            value={formData.esiAmount}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Esi Amount."
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            Basic
          </label>
          <input
            type="number"
            name="basic"
            id="basic"
            value={formData.basic}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Esi Amount."
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            DA
          </label>
          <input
            type="number"
            name="DA"
            id="DA"
            value={formData.DA}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Esi Amount."
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            HRA
          </label>
          <input
            type="number"
            name="HRA"
            id="HRA"
            value={formData.HRA}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Esi Amount."
            required
          />
        </div>
        <div className="flex max-sm:flex-col max-sm:items-start mb-2 items-center">
          <label className=" min-w-[140px]  block text-base font-medium text-gray-600">
            Other
          </label>
          <input
            type="number"
            name="other"
            id="other"
            value={formData.other}
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
            id="medical"
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
            id="advance"
            value={formData.advance}
            onChange={handleChange}
            className="mt-1 p-1 px-2 w-full border rounded-md outline-none"
            placeholder="Advance Amount."
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

        <div>
          <div className=" flex  justify-center mt-4">
            <button
              type="submit"
              className="px-4 w-1/2  py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
