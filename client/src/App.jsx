import React from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/navbar/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutUs from "./Pages/AboutUsPage.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Service from "./Pages/ServicePage.jsx";
import Team from "./Pages/TeamPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
