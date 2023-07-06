import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./MonEspace.css";
import { useAuth } from "../contexts/AuthContext";

function MonEspace() {
  const { token } = useAuth();
  const { handleSubmit } = useForm();

  return (
    <div>
      <div className="monEspace">
        <h3>Mon espace</h3>
      </div>
      {token === true ? (
        <div className="monEspaceNonConnecte">
          <h3>
            <Link to="/connexion">Veuillez vous connecter</Link>
          </h3>
        </div>
      ) : (
        <>
          <h4 className="monEspace_nomcomplet-h4"> Homer Simpson</h4>
          <div className="monEspace_donnee">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nom">Name</label>
              <input id="nom" type="text" />
              <label htmlFor="prenom">Prénom</label>
              <input id="prenom" type="text" />
              <label htmlFor="telephone">Téléphone</label>
              <input id="telephone" type="tel" />
              <label htmlFor="mail">mail</label>
              <input id="mail" type="email" />
              <label htmlFor="adressePostal">Adresse postal</label>
              <input id="adressePostal" type="text" />
              <label htmlFor="codePostal">Code Postal</label>
              <input id="codePostal" type="number" />
              <label htmlFor="ville">Ville</label>
              <input id="ville" type="text" />
              <label htmlFor="cv">Télécharger mon cv</label>
              <input id="cv" type="file" />
              <button type="submit">Enregistrer</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default MonEspace;
