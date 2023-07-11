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
      <h2>S'inscrire</h2>

      <div className="Inscription">
        <div className="image-container">
          <img
            loading="lazy"
            src="https://www.externatic.fr/wp-content/uploads/2023/04/carte_france-791x1024.png"
            alt="Contact Externatic"
            className="wp-image-16355"
          />
        </div>
        <div className="container-inscription">
          <form className="inscription" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstname">
                <input
                  ref={firstnameRef}
                  type="text"
                  id="firsname"
                  placeholder="Nom*"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="lastname">
                <input
                  ref={lastnameRef}
                  type="text"
                  id="email"
                  placeholder="Prénom*"
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="adress">
                <input
                  ref={emailRef}
                  type="text"
                  id="email"
                  placeholder="email*"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="password">
                <input
                  ref={passwordRef}
                  type="password"
                  id="password"
                  placeholder="Mot de passe*"
                  required
                />{" "}
              </label>
            </div>

            <div>
              <label htmlFor="adress">
                <input
                  ref={adressRef}
                  type="text"
                  id="adress"
                  placeholder="Adresse*"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="city">
                <input
                  ref={cityRef}
                  type="text"
                  id="city"
                  placeholder="Ville*"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="postcode">
                <input
                  ref={postcodeRef}
                  type="text"
                  id="postcode"
                  placeholder="Code Postal*"
                  required
                />
              </label>
            </div>

            <div>
              <label htmlFor="phone">
                <input
                  ref={phoneRef}
                  type="text"
                  id="phone"
                  placeholder="Numéro de téléphone*"
                  required
                />
              </label>
            </div>

            <form onSubmit={handleSubmit}>
              <input type="submit" value="Valider" />
            </form>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
