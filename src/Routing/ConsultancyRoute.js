import React from "react";
import { Routes, Route } from "react-router-dom";

import { ProfileData } from "../Employee/pages/ProfileData";
import { ProtectedRoute } from "./ProtectedRoute";
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
import ConsultancyDashboard from "../consultancy/ConsultancyDashboard";
import ConsultancyUsersPage from "../Admin/AdminPages/ConsultancyUsersPage";
import ResumeDataPage from "../Admin/AdminPages/ResumeDataPage";
import { ConsultancyLayouts } from "../Layouts/ConsultancyLayouts";
import { ConsultancyLogin } from "../components/ConsultancyLogin";
import ResumeSearch from "../consultancy/ResumeSearch";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export const ConsultancyRoute = () => {
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
        <Route path="/consultancy/login" element={<ConsultancyLogin />} />
        <Route
          path="/consultancy"
          element={<ProtectedRoute components={<ConsultancyLayouts />} />}
        >
          <Route index element={<ConsultancyDashboard />} />
          <Route path="dashboard" element={<ConsultancyDashboard />} />
          <Route path="upload-profile_image" element={<UploadProfileImg />} />
          <Route path="profile_data" element={<ProfileData />} />
          <Route path="users" element={<ConsultancyUsersPage />} />
          <Route path="resumes-listing" element={<ResumeDataPage />} />
          <Route path="resumes-search" element={<ResumeSearch />} />
        </Route>
      </Routes>
    </>
  );
};
