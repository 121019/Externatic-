import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./MonProfil.css";
import { useAuth } from "../contexts/AuthContext";

function MonProfil() {
  const { token } = useAuth();
  const { handleSubmit } = useForm();

  return (
    <div>
      <div className="profil">
        <h3>Mon profil</h3>
      </div>
      {token === true ? (
        <div className="profilNonConnecte">
          <h3>
            <Link to="/connexion">Veuillez vous connecter</Link>
          </h3>
        </div>
      ) : (
        <div className="profilPersonalise">
          <h4 className="profil_nomcomplet-h4"> Homer Simpson</h4>
          <div className="profil_donnee">
            <form className="profil_input" onSubmit={handleSubmit}>
              <label htmlFor="nom">Nom</label>
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
              <button type="submit">Enregistrer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MonProfil;
