import React from "react";
import { Routes, Route } from "react-router-dom";

import { EmployeeLayouts } from "../Layouts/EmployeeLayouts";
import { EmployeeDash } from "../Employee/pages/EmployeeDash";
import { ViewAttendance } from "../Employee/pages/ViewAttendance";
import { ApplyLeave } from "../Employee/pages/applyLeave/ApplyLeave";
import { Complaint } from "../Employee/pages/Cpmplaint/Complaint";
import { ProfileData } from "../Employee/pages/ProfileData";
import { SalarySlip } from "../Employee/pages/SalarySlip";
import { LeaveForm } from "../Employee/pages/applyLeave/LeaveForm";
import { Login } from "../components/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { ViewLeaveRecord } from "../Employee/pages/applyLeave/ViewLeaveR";
import { ComplaintForm } from "../Employee/pages/Cpmplaint/ComplaintForm";
import { ViewComplaint } from "../Employee/pages/Cpmplaint/ViewComplaint";
import { InvoicePdf } from "../utils/docConverter";
import { HolidayList } from "../Employee/pages/Holiday/HolidayList";
import HolidayDetails from "../Employee/pages/Holiday/HolidayDetails";
import { UploadProfileImg } from "../Employee/components/UploadProfileImg";
import { Home } from "../pages/Home/Home";
import { Navbar } from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AboutUs } from "../pages/About/AboutUs";
import { Products } from "../pages/Products/Product";
import { ContactUsPage } from "../components/ContactUs/ContactUsPage";
import { FoodServices } from "../pages/Services/FoodServices";
import { HealthCare } from "../pages/Services/HealthCare";
import { DigitalS } from "../pages/Services/DigitalS";
import { EducationalS } from "../pages/Services/EducationalS";
import { Thanks } from "../pages/Thanks/Thanks";
import { ScrollToTop } from "../components/ScrollTop";
import { ConsultingServices } from "../pages/Services/ConsultingServices";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import { ConsultancyLogin } from "../components/ConsultancyLogin";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export const UserRoute = () => {
  return (
    <>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Home />{" "}
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              {" "}
              <AboutUs />{" "}
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              {" "}
              <Products />{" "}
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUsPage />
            </Layout>
          }
        />
        <Route
          path="/product/foody-services"
          element={
            <Layout>
              {" "}
              <FoodServices />{" "}
            </Layout>
          }
        />
        <Route
          path="/product/health-care"
          element={
            <Layout>
              {" "}
              <HealthCare />{" "}
            </Layout>
          }
        />
        <Route
          path="/product/educational-services"
          element={
            <Layout>
              <EducationalS />{" "}
            </Layout>
          }
        />
        <Route
          path="/product/digital-services"
          element={
            <Layout>
              {" "}
              <DigitalS />{" "}
            </Layout>
          }
        />
        <Route
          path="/product/consulting"
          element={
            <Layout>
              {" "}
              <ConsultingServices />{" "}
            </Layout>
          }
        />
        {/* <Route path="/gallery" element={ <Layout> <Gallery2 /> </Layout> }/> */}

        <Route
          path="/thanks"
          element={
            <Layout>
              {" "}
              <Thanks />{" "}
            </Layout>
          }
        />
            <Route
          path="/privacy-policy"
          element={
            <Layout>
              {" "}
              <PrivacyPolicy />{" "}
            </Layout>
          }
        />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/consultancy-login" element={<ConsultancyLogin />} />
        <Route
          path="/employee"
          element={<ProtectedRoute components={<EmployeeLayouts />} />}
        >
          <Route index element={<EmployeeDash />} />
          <Route path="dashboard" element={<EmployeeDash />} />
          <Route path="upload-profile_image" element={<UploadProfileImg />} />
          <Route path="apply_leave" element={<ApplyLeave />} />
          <Route path="complaint" element={<Complaint />} />
          <Route path="profile_data" element={<ProfileData />} />
          <Route path="salary_slip" element={<SalarySlip />} />
          <Route path="view_attendance" element={<ViewAttendance />} />
          <Route path="leave_form" element={<LeaveForm />} />
          <Route path="view-leave-records" element={<ViewLeaveRecord />} />
          <Route path="complaint-form" element={<ComplaintForm />} />
          <Route path="view-complaint" element={<ViewComplaint />} />
          <Route path="salary-view" element={<InvoicePdf />} />
          <Route path="holiday" element={<HolidayList />} />
          <Route path="holiday-details" element={<HolidayDetails />} />
        </Route>
      </Routes>
    </>
  );
};
