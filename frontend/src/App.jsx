import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";
import OffresEmploi from "./Navbar/OffresEmploi";
import MonEspace from "./Navbar/MonEspace";
import Contact from "./Navbar/Contact";
import Inscription from "./Navbar/Inscription";
import Connexion from "./Navbar/Connexion";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Contact />
        <Inscription />
        <HomePage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<OffresEmploi />} />
          <Route path="/espace" element={<MonEspace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscrire" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
