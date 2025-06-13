import React from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutUs from "./Pages/AboutPage.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Service from "./Pages/ServicePage.jsx";
import Team from "./Pages/TeamPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";
import WorkPage from "./Pages/WorkPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ContactUsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
