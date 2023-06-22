import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import JobOffers from "./components/JobOffers";
import Navbar from "./components/Navbar";
import MonEspace from "./Navbar/MonEspace";
import NousContacter from "./Navbar/NousContacter";
import SInscrire from "./Navbar/SInscrire";
import Connexion from "./Navbar/Connexion";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/joboffers" element={<JobOffers offers={offers} />} />
          <Route path="/espace" element={<MonEspace />} />
          <Route path="/contact" element={<NousContacter />} />
          <Route path="/inscrire" element={<SInscrire />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
