import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminDash } from "../Admin/AdminPages/AdminDash";
import { AdminLayouts } from "../Layouts/AdminLayouts";
import { ProtectedRoute } from "./ProtectedRoute";
import { Assets } from "../Admin/AdminPages/Assets/Assets";
import LeaveRequest from "../Admin/AdminPages/LeaveRequest/LeaveRequest";
import LeaveReqDetails from "../Admin/AdminPages/LeaveRequest/LeaveReqDetails";
//  registration
import { RegisterEmployee } from "../Admin/AdminPages/RegisterEmplyee";
import { RegistrationForm } from "../Admin/AdminPages/RegisterForm";
import { PayRollRegistration } from "../Admin/AdminPages/PayRollRegistration";

import { Complaint } from "../Admin/AdminPages/Complaint/Complaint";
import { ComplaintView } from "../Admin/AdminPages/Complaint/ComplaintView";
import ViewAttendence from "../Admin/AdminPages/ViewAttendence";
import { GenerateSalSlip } from "../Admin/AdminPages/SalarySlip/GenerateSalSlip";
import { EmployeeList } from "../Admin/AdminPages/EmployeeList/EmployeeList";
import { ViewEmpAttendance } from "../Admin/AdminPages/EmployeeList/ViewEmpAtten";
import { EditEmp } from "../Admin/AdminPages/EmployeeList/EditEmployee";
import { ExEmplyeeList } from "../Admin/AdminPages/ExEmployee";
import { UpdateAttendance } from "../Admin/AdminPages/UpdateAttendance";

// Assets
import { AddAssets } from "../Admin/AdminPages/Assets/Addassets";

// Password  
import { ChangePassword } from "../Admin/components/Password/ChangePassword";
import { ChangeEmpPassword } from "../Admin/components/Password/ChangeEmpPassword"; 
import { DownloadSheet } from "../Admin/AdminPages/SalarySlip/GenerateSalSlip";
import { HolidayList } from "../Admin/AdminPages/Holidays/HolidayList";
import { AddHoliday } from "../Admin/AdminPages/Holidays/AddHoliday";
import { UploadPayroll } from "../Admin/AdminPages/Upload/payroll";
import { InvoicePdf } from "../utils/docConverter";

// Import the new pages
import ConsultancyUsersPage from "../Admin/AdminPages/ConsultancyUsersPage";
import ResumeDataPage from "../Admin/AdminPages/ResumeDataPage";
import Letters from "../Admin/AdminPages/Letters";
import NewLetters from "../Admin/AdminPages/NewLetters";
import OfferLetterForm from "../Admin/AdminPages/OfferLetterForm";
import RelievingLetterForm from "../Admin/AdminPages/RelievingLetterForm";
import ExperienceLetterForm from "../Admin/AdminPages/ExperienceLetterForm";
import OfferLetter from "../Admin/AdminPages/offerletter";

export const AdminRoute = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={<ProtectedRoute components={<AdminLayouts />} />}
      >
        <Route index element={<AdminDash />} />
        <Route path="dashboard" element={<AdminDash />} />
        {/* leave request */}
        <Route path="leave" element={<LeaveRequest />} />
        <Route path="leave-details/:id" element={<LeaveReqDetails />} />
        {/* Emplyee registration */}
        <Route path="employee-registration" element={<RegisterEmployee />} />
        <Route path="registraion-form" element={<RegistrationForm />} />
        <Route
          path="registraion-form/payroll"
          element={<PayRollRegistration />}
        />

        {/*ViewAttendence  */}
        <Route path="attendence-view" element={<ViewAttendence />} />

        {/* comlaints */}
        <Route path="complaints" element={<Complaint />} />
        <Route path="complaints-details/:id" element={<ComplaintView />} />

        <Route path="salary-slip" element={<GenerateSalSlip />} />

        {/* Employeee List */}
        <Route path="employees" element={<EmployeeList />} />
        <Route path="salary-view" element={<InvoicePdf />} />
        <Route path="edit-emp/:id" element={<EditEmp />} />
        <Route path="view-attendance/:id" element={<ViewEmpAttendance />} />
        {/* <Route path="update-employee" element={<EditEmployee/>}/> */}

        <Route path="update-attendance" element={<UpdateAttendance />} />
        <Route path="ex-employees" element={<ExEmplyeeList />} />

        {/* Assets  */}
        <Route path="assets" element={<Assets />} />
        <Route path="add-assets" element={<AddAssets />} />

        {/* password  */}
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="change-emp-password" element={<ChangeEmpPassword />} />
        <Route path="download-sheet" element={<DownloadSheet />} />
         {/* holidays */}
         <Route path="holiday" element={<HolidayList />} />
        <Route path="add-holiday" element={<AddHoliday />} />

        {/* Upload to system */}
        <Route path="upload" element={<UploadPayroll />} />

        {/* New Routes */}
        <Route path="consultancy-users" element={<ConsultancyUsersPage />} />
        <Route path="resume-data" element={<ResumeDataPage />} />
        <Route path="letters" element={<Letters />} />
        <Route path="new-letters" element={<NewLetters />} />
        <Route path="new-letters/:company/offer" element={<OfferLetter />} />
        <Route path="new-letters/:company/relieving" element={<RelievingLetterForm />} />
        <Route path="new-letters/:company/experience" element={<ExperienceLetterForm />} />

      </Route>
    </Routes>
  );
};
