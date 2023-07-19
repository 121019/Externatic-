import React from "react";
import { Link } from "react-router-dom";
import "./MonEspace.css";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";

function MonEspace() {
  const { user } = useUser();
  const { token } = useAuth();

  return (
    <>
      <div className="espace">
        <h3>Mon espace</h3>
      </div>
      {token === false ? (
        <div className="espaceNonConnecte">
          <h3 className="espaceNonConnecte-h3">
            <Link className="espaceNonConnecte-h3-link" to="/connexion">
              Veuillez vous connecter
            </Link>
          </h3>
        </div>
      ) : (
        <div className="espacePersonalise">
          <h4 className="espace_nomcomplet-h4">
            {user.firstname} {user.lastname}
          </h4>
          <div className="espace_section">
            <Link to="/espace/profil" className="espace_section-bulle">
              <p>Mon profil</p>
            </Link>
            <p className="espace_section-bulle">Mon profil publique</p>
            <Link to="/mycv" className="espace_section-bulle">
              <p>Mon CV</p>
            </Link>
            <p className="espace_section-bulle">Mes offres d'emploi</p>
            <p className="espace_section-bulle">Mes candidatures</p>
            <p className="espace_section-bulle">Paramètre</p>
          </div>
        </div>
      )}
    </>
  );
}
export default MonEspace;
