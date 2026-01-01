
import React from 'react';
import html2pdf from 'html2pdf.js';
import { useSelector } from 'react-redux';
import numberToWords from 'number-to-words';
const Logo=process.env.PUBLIC_URL+"/images/logdo.png"

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

export const InvoicePdf = () => {
  const empData=useSelector((state)=>state.user.userData);
  const currDate=new Date();

  const handleConvertToPdf = () => {
    const element = document.getElementById('content-to-convert');
    

    if (element) {
      const pdfOptions = {
        margin: 10,
        filename: 'converted-document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf(element, pdfOptions);
    }
  };
  const totalSalary = empData?.payroll?.total_salary;

  const salaryInWords = totalSalary
    ? numberToWords.toWords(totalSalary)
    : 'Not available';
    function capitalizeFirstLetter(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase());
    }
    
    
    const result = capitalizeFirstLetter(salaryInWords);
  return (
    <div className='w-[80%] m-auto bg-white p-5'>
      <div id="content-to-convert">
        <div className='flex justify-between items-center'>
          <img src={Logo} width="230px" />
          <div className='text-center'>
            <h1 className='text-xl font-bold'>GET YOUR PROJECT READY PRIVATE LIMITED</h1>
            <p className='w-[330px] m-auto text-sm'>New Delhi , Panchsheel Park , Malviya Nagar , 5th Floor B-99 , Triveni
                Complex , 110017.</p>
          </div>
        </div>
        <h2 className='mt-20 pb-4 '>Payslip For the Month of {months[currDate.getMonth()]} {currDate.getFullYear()}.</h2><hr/>

        <div className='flex flex-wrap justify-between pt-5'>
          <div>
            <div><span>Emp No : </span><span>GYPR-{empData?.emp_id}</span></div>
            <div><span>Name : </span><span>{empData?.first_name} {empData?.last_name}</span></div>
            <div><span>Paid Days : </span><span>30</span></div>
          </div>

          <div>
            <div><span>Bank Name : </span><span>{empData?.payroll?.bank_name}</span></div>
            <div><span>Bank A/C No : </span><span>{empData?.payroll?.bankac}</span></div>
            <div><span>Leaves : </span><span>0</span></div>
          </div>

          <div>
            <div><span>Department : </span><span>{empData?.payroll?.department}</span></div>
            <div><span>PF No. : </span><span>{empData?.payroll?.pfno}</span></div>
          </div>
        </div>
        <hr className='mt-10'/>
        <div className='flex flex-wrap justify-between pt-5 '>
          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>EARNINGS</h1>
            <span>Basic</span>
            <span>Dearness Allowance</span>
            <span>House Rent Allowance</span>
            <span>Other Allowances</span>
            <span>All Cash Reimbursements</span>
            <span>LTA*</span>
            <span>Medical*</span>
            <span>Arrears</span>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>PER MONTH</h1>
            <span>{empData?.payroll?.basic}</span>
            <span>{empData?.payroll?.DA}</span>
            <span>{empData?.payroll?.HRA}</span>
            <span>{empData?.payroll?.other}</span>
            <span>0</span>
            <span>0</span>
            <span>{empData?.payroll?.medical}</span>
            <span></span>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>DEDUCTIONS</h1>
            <span>PF</span>
            <span>ESI</span>
            <span>Income Tax*</span>
            <span>Professional Tax</span>
            <span>Loans & Advances</span>
            <span>Absent (0)</span>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>PER MONTH</h1>
            <span>{empData?.payroll?.pf_amount}</span>
            <span>{empData?.payroll?.esi_amount}</span>
            <span>0</span>
            <span>0</span>
            <span>{empData?.payroll?.advance}</span>
            <span>Absent (0)</span>
          </div>

        </div>

        <hr className='mt-10'/>
        <div className='flex flex-wrap justify-between pt-5'>
          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>Gross Earnings (A)</h1>
            <h1 className='font-bold mb-2'>Net Salary Payable (A-B)</h1>
            <h1 className='font-bold mb-2'>Net Salary Payable(in words)</h1>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>{empData?.payroll?.total_salary}</h1>
            <h1 className='font-bold mb-2'>{empData?.payroll?.total_salary}</h1>
            <h1 className='font-bold mb-2'>{result}</h1>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>Gross Deductions (B)</h1>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>0</h1>
          </div>
        </div>

        <hr className='mt-10 mb-20'/>
        <p>Singnature</p><br/>

      </div>


      <div className='text-right'>
        <button
        className='bg-orange-500 p-2 text-white '
        onClick={handleConvertToPdf}
        >Download</button>

      </div>
    </div>
  );
};


