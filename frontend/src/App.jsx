import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JobOffers from "./components/JobOffers";
import Navbar from "./components/Navbar";
import MonEspace from "./Navbar/MonEspace";
import Contact from "./Navbar/Contact";
import Inscription from "./Navbar/Inscription";
import Connexion from "./Navbar/Connexion";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./App.css";
import { AuthContextProvider } from "../contexts/AuthContext";

import CVUploadForm from "./components/Upload";

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

  return (
    <Router>
      <div className="App">
        <Navbar />

        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/joboffers" element={<JobOffers offers={offers} />} />
            <Route path="/espace" element={<MonEspace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/uploadcv" element={<CVUploadForm />} />
          </Routes>
        </AuthContextProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
