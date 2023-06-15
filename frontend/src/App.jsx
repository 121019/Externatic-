import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import OffresEmploi from "./Navbar/OffresEmploi";
import MonEspace from "./Navbar/MonEspace";
import NousContacter from "./Navbar/NousContacter";
import SInscrire from "./Navbar/SInscrire";
import Connexion from "./Navbar/Connexion";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<OffresEmploi />} />
          <Route path="/espace" element={<MonEspace />} />
          <Route path="/contact" element={<NousContacter />} />
          <Route path="/inscrire" element={<SInscrire />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <HomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
