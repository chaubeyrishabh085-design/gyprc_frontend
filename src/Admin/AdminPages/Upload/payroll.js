import React, { useState } from "react";
import { readExcelFile } from "../../utils/purefun";
import { toast } from "react-toastify";
import { postData1 } from "../../../APIs";
import { Loader } from "../../../components/loader";
import DownloadExcelFormate from "./DownloadExcelFormate";

export const UploadPayroll = () => {
  const [payrollFile, setPayrollFiel] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    let file = e.target.files[0];
    setPayrollFiel(file);
  };

  const handleSumit = async (e) => {
    e.preventDefault();
    if (!payrollFile) {
      toast.error("Please upload file !");
      return;
    }
    // converting excel to object
    setLoader(true);
    let excelArray = await readExcelFile(payrollFile);
    excelArray = excelArray.slice(1);

    // calling apis to update payroll data
    for (let i = 0; i < excelArray.length; i++) {
      let data = excelArray[i];
      let payload = {
        id: data[0],
        total_salary: data[1],
        department: data[2],
        emp_type: data[3],
        bank_name: data[4],
        bankac: data[5],
        pfno: data[6],
        pf_amount: data[7],
        esi_amount: data[8],
        basic: data[9],
        DA: data[10],
        HRA: data[11],
        other: data[12],
        medical: data[13],
        advance: data[14],
      };
      const res = await postData1(
        "api/v1/admin/register_payroll/",
        payload,
        true
      );
      if (res?.status_code !== 200) {
        setLoader(false);
        toast.error(
          `Unabled to upload data for id : "${data[0]}" try again, or check the data correctness !`
        );
        return;
      }
    }
    setLoader(false);
    toast.success("Payroll Data Updated Successfully !");
  };
  return (
    <>
      <div className="flex items-center justify-center p-5 m-auto flex-col bg-white w-fit">
        <h3 className="text-2xl p-3 font-semibold">Download formate</h3>
        <p className="border-0 bg-green-600 text-white p-2 rounded">
          <DownloadExcelFormate />
        </p>
      </div>
      <div className="container xl:w-[35%] sm:w-[95%] max-sm:w-[85%]  mx-auto xl:h-[70vh] pb-10">
        {loader && <Loader />}
        <form
          onSubmit={handleSumit}
          className="flex item-center border-2 bg-white p-5 mx-auto mt-20 "
        >
          <input type="file" accept=".xlsx, .xls" onChange={handleChange} />
          <input
            className="text-white bg-orange-500 hover:bg-orange-600 rounded p-1 px-2 cursor-pointer"
            type="submit"
            value="Upload"
          />
        </form>
      </div>
    </>
  );
};
