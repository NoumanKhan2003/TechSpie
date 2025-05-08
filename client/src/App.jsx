import React from "react";
import "./App.css"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home.jsx";

import HomePage from "./Pages/HomePage.jsx";
import ContactForm from "./Components/form.jsx";
import WhyChooseUs from "./Components/Choose.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <WhyChooseUs />
        <ContactForm />
        

     
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
