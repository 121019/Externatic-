import { useNavigate } from "react-router-dom";
import { useRef } from "react";
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
    );

    // Récupérer les valeurs des champs du formulaire
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const adress = adressRef.current.value;
    const city = cityRef.current.value;
    const postcode = postcodeRef.current.value;
    const phone = phoneRef.current.value;

    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3000/candidat"
      }/candidat`,
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
      .then((data) => {
        console.error("candidat response data:", data);

        navigate("/");
        console.error("Navigating to home page...");

        // Réinitialiser le formulaire après l'envoi
        firstnameRef.current.value = "";
        lastnameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        adressRef.current.value = "";
        cityRef.current.value = "";
        postcodeRef.current.value = "";
        phoneRef.current.value = "";
      });
  };

  return (
    <div className="inscription_content">
      <p>S'inscrire</p>

      <div className="Inscription">
        <div className="image-container">
          <img
            loading="lazy"
            src="https://www.externatic.fr/wp-content/uploads/2023/04/carte_france-791x1024.png"
            alt="Contact Externatic"
            className="wp-image-16355"
          />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
              <form onSubmit={handleSubmit}>
                <input type="submit" value="Valider" />
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
