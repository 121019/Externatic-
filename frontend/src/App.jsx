import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobOffers from "./components/JobOffers";
import Navbar from "./Navbar/Navbar";
import MonEspace from "./Navbar/MonEspace";
import NousContacter from "./Navbar/NousContacter";
import SInscrire from "./Navbar/SInscrire";
import Connexion from "./Navbar/Connexion";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./App.css";
import "./Navbar/Navbar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/joboffers" element={<JobOffers />} />
          <Route path="/espace" element={<MonEspace />} />
          <Route path="/NousContacter" element={<NousContacter />} />
          <Route path="/inscrire" element={<SInscrire />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
