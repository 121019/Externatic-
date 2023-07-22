import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./MonProfil.css";
import { useUser } from "../contexts/UserContext";

function MonProfil() {
  const { user, setUser } = useUser();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080"
      }/candidats/${user.id}`,
      {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.status === 204) {
          const { password: _, ...rest } = data;
          setUser((old) => ({ ...old, ...rest }));
        }
      })
      .catch((error) => {
        console.error("Error processing response:", error);
      });
  };

  return (
    <div>
      <div className="profil">
        <h3>Mon profil</h3>
      </div>
      {user === false ? (
        <div className="profilNonConnecte">
          <h3 className="profilNonConnecte-h3">
            <Link className="profilNonConnecte-h3-link" to="/connexion">
              Veuillez vous connecter
            </Link>
          </h3>
        </div>
      ) : (
        <div className="profilPersonalise">
          <h4 className="profil_nomcomplet-h4">
            {user.firstname} {user.lastname}
          </h4>
          <div className="profil_donnee">
            <form className="profil_input" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="nom">Nom</label>
              <input
                id="nom"
                type="text"
                name="lastname"
                defaultValue={user.lastname}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("lastname")}
              />
              <label htmlFor="prenom">Prénom</label>
              <input
                id="prenom"
                type="text"
                name="firstname"
                defaultValue={user.firstname}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("firstname")}
              />
              <label htmlFor="telephone">Téléphone</label>
              <input
                id="telephone"
                type="tel"
                name="phone"
                defaultValue={user.phone}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("phone")}
              />
              <label htmlFor="mail">Mail</label>
              <input
                id="mail"
                type="email"
                name="mail"
                defaultValue={user.email}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("email")}
              />
              <label htmlFor="adressePostal">Adresse postale</label>
              <input
                id="adressePostal"
                type="text"
                name="adress"
                defaultValue={user.adress}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("adress")}
              />
              <label htmlFor="codePostal">Code Postal</label>
              <input
                id="codePostal"
                type="number"
                name="postcode"
                defaultValue={user.postcode}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("postcode")}
              />
              <label htmlFor="ville">Ville</label>
              <input
                id="ville"
                type="text"
                name="city"
                defaultValue={user.city}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("city")}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                name="password"
                defaultValue=""
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("password")}
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
