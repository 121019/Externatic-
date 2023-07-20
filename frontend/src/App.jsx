import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import JobOffers from "./components/JobOffers";
import Navbar from "./components/Navbar";
import MonEspace from "./Navbar/MonEspace";
import Contact from "./Navbar/Contact";
import Inscription from "./Navbar/Inscription";
import Connexion from "./Navbar/Connexion";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CompanyLogin from "./components/CompanyLogin";
import CompanyPage from "./components/CompanyPage";
import MonProfil from "./Navbar/MonProfil";
import MyCv from "./components/MyCv";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/jobs`)
      .then((response) => response.json())
      .then((data) => {
        setOffers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/joboffers" element={<JobOffers offers={offers} />} />
          <Route path="/espace" element={<MonEspace />} />
          <Route path="espace/profil" element={<MonProfil />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/Inscription"
            element={<Inscription toastOptions={toastOptions} />}
          />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/companylogin" element={<CompanyLogin />} />
          <Route path="/companypage" element={<CompanyPage />} />
          <Route path="/mycv" element={<MyCv />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
