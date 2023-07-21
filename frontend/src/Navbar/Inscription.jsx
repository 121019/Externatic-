import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import carteOuestFrance from "../assets/carte_france.png";

import "./Inscription.css";

function Inscription() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const adressRef = useRef();
  const cityRef = useRef();
  const postcodeRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier si les champs obligatoires sont remplis
    if (
      firstnameRef.current.value === "" ||
      lastnameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef.current.value === "" ||
      adressRef.current.value === "" ||
      cityRef.current.value === "" ||
      postcodeRef.current.value === "" ||
      phoneRef.current.value === ""
    ) {
      return;
    }
    // Récupérer les valeurs des champs du formulaire
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const adress = adressRef.current.value;
    const city = cityRef.current.value;
    const postcode = postcodeRef.current.value;
    const phone = phoneRef.current.value;

    // Réinitialiser le formulaire après l'envoi
    formRef.current.reset();
    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    adressRef.current.value = "";
    cityRef.current.value = "";
    postcodeRef.current.value = "";
    phoneRef.current.value = "";

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5080"
      }/candidats`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          adress,
          city,
          postcode,
          phone,
        }),
      }
    )
      .then((response) => response.json())
      .then(() => {
        navigate("/espace");
      });
  };
  return (
    <div className="inscription_content">
      <p>Nouveau Candidat :</p>

      <div className="Inscription">
        <div className="image-container">
          <img
            loading="lazy"
            src={carteOuestFrance}
            alt="Contact Externatic"
            className="wp-image-16355"
          />
        </div>
        <div className="form-container">
          <div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="firstname"
                  ref={firstnameRef}
                  placeholder="Nom *"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="lastname"
                  ref={lastnameRef}
                  placeholder="Prénom *"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
                  placeholder="Email *"
                  required
                />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  ref={passwordRef}
                  placeholder="Mot de passe *"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="adress"
                  ref={adressRef}
                  placeholder="Adresse *"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="city"
                  ref={cityRef}
                  placeholder="Ville *"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="postcode"
                  ref={postcodeRef}
                  placeholder="Code postal *"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="phone"
                  ref={phoneRef}
                  placeholder="Téléphone *"
                  required
                />
              </label>
              <div className="validate">
                <input type="submit" value="Valider" />
              </div>
            </form>
          </div>
          <div className="switch_company_page">
            <Link to="/companyregistration">
              <button type="button">Je suis une Entreprise</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
