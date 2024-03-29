import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import "./MonProfil.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUser } from "../contexts/UserContext";

function MonProfil({ toastOptions }) {
  const { user, setUser } = useUser();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.justRegistered) {
      navigate("/espace");
    }
  }, [user, navigate]);

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
          navigate("/espace");
          toast.success("Modifié avec succès", toastOptions);
        }
      })
      .catch((error) => {
        console.error("Error processing response:", error);
      });
  };

  return (
    <div>
      <div className="espace">
        <h3>Mon profil</h3>
      </div>
      {user === null ? (
        <div className="profilNonConnecte">
          <h3 className="profilNonConnecte-h3">
            <Link className="profilNonConnecte-h3-link" to="/connexion">
              Veuillez vous connecter
            </Link>
          </h3>
        </div>
      ) : (
        user && (
          <div className="profilPersonalise">
            <h4 className="profil_nomcomplet-h4">
              {user.firstname} {user.lastname}
            </h4>
            <div className="update">
              <p>Veuillez mettre à jour vos informations personnelles :</p>
            </div>

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
        )
      )}
    </div>
  );
}

export default MonProfil;

MonProfil.propTypes = {
  toastOptions: PropTypes.shape({
    position: PropTypes.string,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    draggable: PropTypes.bool,
    progress: PropTypes.number,
    theme: PropTypes.string,
  }).isRequired,
};
