import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import carteOuestFrance from "../../assets/carte_france.png";

import "../../Navbar/Inscription.css";
import "./CompanyRegistration.css";

function CompanyRegistration({ toastOptions }) {
  const [error, setError] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const postcodeRef = useRef();
  const descRef = useRef();
  const formRef = useRef();

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier si les champs obligatoires sont remplis
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef.current.value === "" ||
      addressRef.current.value === "" ||
      cityRef.current.value === "" ||
      postcodeRef.current.value === "" ||
      descRef.current.value === ""
    ) {
      return;
    }
    // Récupérer les valeurs des champs du formulaire
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const postcode = postcodeRef.current.value;
    const description = descRef.current.value;

    // Réinitialiser le formulaire après l'envoi
    formRef.current.reset();
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    postcodeRef.current.value = "";
    descRef.current.value = "";

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080"}/company`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          description,
          address,
          city,
          postcode,
          selectedImage,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          toast.success("Nouvelle Entreprise créée", toastOptions);
          navigate("/companylogin");
        }
      })
      .catch(() => {
        setError("Une erreur s'est produite lors de l'inscription.");
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="inscription_company_content">
      <p>Nouvelle Entreprise :</p>

      <div className="Inscription-company">
        <div className="image_compagny-container">
          <img
            loading="lazy"
            src={carteOuestFrance}
            alt="Contact Externatic"
            className="wp-image-16355"
          />
        </div>
        <div className="companyRegistration_form_container">
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info company-form-container-info-first"
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Nom *"
              id="name"
              required
            />

            <label htmlFor="email">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info"
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email *"
              id="email"
              required
            />
            <label htmlFor="password">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info"
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Mot de passe *"
              id="password"
              required
            />
            <label htmlFor="confirmPassword">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info"
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Confirmer le Mot de passe *"
              id="confirmPassword"
              required
            />
            <label htmlFor="address">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info"
              type="text"
              name="address"
              ref={addressRef}
              placeholder="Adresse *"
              id="address"
              required
            />
            <label htmlFor="city">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info"
              type="text"
              name="city"
              ref={cityRef}
              placeholder="Ville *"
              id="city"
              required
            />
            <label htmlFor="postcode">{/* volontairement vide */}</label>
            <input
              className="company-form-container-info"
              type="number"
              name="postcode"
              ref={postcodeRef}
              placeholder="Code postal *"
              id="postcode"
              required
            />
            <label htmlFor="desc">{/* volontairement vide */}</label>
            <textarea
              name="postcode"
              ref={descRef}
              placeholder="Description rapide de l'entreprise"
              id="desc"
              className="company-form-container-info companyRegistration_text_area"
              required
            />
            <div className="design-image-file">
              <label htmlFor="image-file">Sélectionnez une image :</label>
              <input
                id="image-file"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="validate">
              <button type="submit" value="Valider">
                {" "}
                Valider
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyRegistration;

CompanyRegistration.propTypes = {
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
