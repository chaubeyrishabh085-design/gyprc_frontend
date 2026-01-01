import React from "react";
import * as XLSX from "xlsx";

const DownloadExcelFormate = () => {
  const handleDownload = () => {
    // Create sample data
    const data = [
      [
        "id",
        "total_salary",
        "department",
        "emp_type",
        "bank_name",
        "bankac",
        "pfno",
        "pf_amount",
        "esi_amount",
        "basic",
        "DA",
        "HRA",
        "other",
        "medical",
        "advance"
      ],
      [
        "3",
        200000,
        "IT",
        "FullTime",
        "Test Bank",
        "4353534535",
        "45345345",
        1800,
        200,
        80000,
        48933,
        337483,
        0,
        7383,
        8473,
      ],
      [
        "4",
        200000,
        "IT",
        "FullTime",
        "Test Bank",
        "4353534535",
        "45345345",
        1800,
        200,
        80000,
        48933,
        337483,
        0,
        7383,
        8473,
      ],
      // Add more rows as needed
    ];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "employee_test_data.xlsx");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadExcelFormate;
