import React from "react";
import { Link } from "react-router-dom";
import "./MonEspace.css";
import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook from AuthContext

function MonEspace() {
  const { token } = useAuth(); // Access the token from the AuthContext
  console.warn(token);

  // Render the component only if the user is connected
  if (!token) {
    return <p>Please log in to access this page.</p>;
  }
  return (
    <>
      <div className="monEspace">
        <h3>Mon espace</h3>
      </div>
      <div className="espacePersonalise">
        <h4 className="espace_nomcomplet-h4"> Homer Simpson</h4>
        <div className="espace_section">
          <Link to="/espace/profil" className="espace_section-bulle">
            <p>Mon profil</p>
          </Link>
          <p className="espace_section-bulle">Mon profil public</p>
          <Link to="/mycv" className="espace_section-bulle">
            <p className="espace_section-bulle">Mon CV</p>
          </Link>
          <p className="espace_section-bulle">Mes offres d'emploi</p>
          <p className="espace_section-bulle">Mes candidatures</p>
          <p className="espace_section-bulle">Paramètres</p>
        </div>
      </div>
    </>
  );
}
export default MonEspace;
