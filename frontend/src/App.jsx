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
import CompanyLogin from "./components/Company/CompanyLogin";
import CompanyPage from "./components/Company/CompanyPage";
import MonProfil from "./Navbar/MonProfil";
import MyCv from "./components/MyCv";
import CompanyRegistration from "./components/Company/CompanyRegistration";
import JobSubmissionForm from "./components/JobSubmissionForm";
import JobOfferPage from "./components/JobOfferPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Build from "./components/Build";

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
          <Route
            path="espace/profil"
            element={<MonProfil toastOptions={toastOptions} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/Inscription"
            element={<Inscription toastOptions={toastOptions} />}
          />
          <Route
            path="/connexion"
            element={<Connexion toastOptions={toastOptions} />}
          />
          <Route
            path="/companylogin"
            element={<CompanyLogin toastOptions={toastOptions} />}
          />
          <Route
            path="/companypage"
            element={<CompanyPage toastOptions={toastOptions} />}
          />
          <Route path="/mycv" element={<MyCv />} />
          <Route
            path="/companyregistration"
            element={<CompanyRegistration toastOptions={toastOptions} />}
          />
          <Route
            path="/newoffer"
            element={<JobSubmissionForm toastOptions={toastOptions} />}
          />
          <Route
            path="/jobofferpage/:offerid"
            element={<JobOfferPage offers={offers} />}
          />
          <Route path="build" element={<Build />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
