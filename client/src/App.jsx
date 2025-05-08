import React from "react";
import "./App.css"
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
