import React, { useState } from "react";
import "./Inscription.css";
import axios from "axios";

function Inscription() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    adress: "",
    city: "",
    postcode: "",
    phone: "",
  });

  const [envoiMessage, setEnvoiMessage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const firstname = event.target.elements.name.value;
    const lastname = event.target.elements.lastname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const adress = event.target.elements.adress.value;
    const city = event.target.elements.city.value;
    const postcode = event.target.elements.postcode.value;
    const phone = event.target.elements.phone.value;

    // Créer un objet contenant les données du formulaire
    const formDataToSend = {
      firstname,
      lastname,
      email,
      password,
      adress,
      city,
      postcode,
      phone,
    };

    // Envoyer les données au backend en utilisant une requête POST
    axios
      .post("/candidats/inscription", formDataToSend)
      .then((response) => {
        // Traiter la réponse du serveur si nécessaire
        console.warn(response.data);
        setEnvoiMessage(true);
      })
      .catch((error) => {
        // Traiter les erreurs de la requête si nécessaire
        console.error(error);
      });

    // Réinitialiser le formulaire après l'envoi
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      adress: "",
      city: "",
      postcode: "",
      phone: "",
    });
    setEnvoiMessage(true);
  };

  return (
    
      <><div className="message validate">
      {envoiMessage&&<p>Votre inscription est validée !</p>}
    </div>
    <div className="inscription_content"><p>S'inscrire</p>

        <div className="Inscription">
          <div className="image-container">
            <img
              loading="lazy"
              src="https://www.externatic.fr/wp-content/uploads/2023/04/carte_france-791x1024.png"
              alt="Contact Externatic"
              className="wp-image-16355" />
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Nom *"
                  required />
              </label>
              <label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Prénom *"
                  required />
              </label>
              <label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  required />
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Mot de passe *"
                  required />
              </label>
              <label>
                <input
                  type="text"
                  name="adress"
                  value={formData.adress}
                  onChange={handleInputChange}
                  placeholder="Adresse *"
                  required />
              </label>
              <label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Ville *"
                  required />
              </label>
              <label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  placeholder="Code postal *"
                  required />
              </label>
              <label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Téléphone *"
                  required />
              </label>
              <div className="validate">
                <form onSubmit={handleSubmit}>
                  <input type="submit" value="Valider" />
                </form>
              </div>
            </form>
          </div>
        </div>
      </div></>
  );
}

export default Inscription;
