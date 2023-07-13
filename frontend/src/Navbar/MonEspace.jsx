import React from "react";
import { Link } from "react-router-dom";
import "./MonEspace.css";

function MonEspace() {
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
          <p className="espace_section-bulle">Mon cv</p>
          <p className="espace_section-bulle">Mes offres d'emploi</p>
          <p className="espace_section-bulle">Mes candidatures</p>
          <p className="espace_section-bulle">Paramètres</p>
        </div>
      </div>
    </>
  );
}
export default MonEspace;
