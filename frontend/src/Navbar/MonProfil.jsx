import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./MonProfil.css";
import { useAuth } from "../contexts/AuthContext";
import { useUser } from "../contexts/UserContext";

function MonProfil() {
  const { token } = useAuth();
  const { user } = useUser();
  const { register, handleSubmit } = useForm();

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
          <h4 className="profil_nomcomplet-h4">
            {" "}
            {user.firstname} {user.lastname}
          </h4>
          <div className="profil_donnee">
            <form className="profil_input" onSubmit={handleSubmit}>
              <label htmlFor="nom">Nom</label>
              <input
                id="nom"
                type="text"
                defaultValue={user.lastname}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("lastName")}
              />
              <label htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                type="text"
                defaultValue={user.firstname}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("firstname")}
              />
              <label htmlFor="telephone">Téléphone</label>
              <input
                id="telephone"
                type="tel"
                defaultValue={user.phone}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("phone")}
              />
              <label htmlFor="mail">Mail</label>
              <input
                id="mail"
                type="email"
                defaultValue={user.email}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("email")}
              />
              <label htmlFor="adressePostal">Adresse postale</label>
              <input
                id="adressePostal"
                type="text"
                defaultValue={user.adress}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("adress")}
              />
              <label htmlFor="codePostal">Code Postal</label>
              <input
                id="codePostal"
                type="number"
                defaultValue={user.postcode}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("postcode")}
              />
              <label htmlFor="ville">Ville</label>
              <input
                id="ville"
                type="text"
                defaultValue={user.city}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("city")}
              />
              <button type="submit">Enregistrer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MonProfil;
