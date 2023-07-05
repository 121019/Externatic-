import React, { useState } from "react";
import "./Inscription.css";

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
    <>
      <h2>S'inscrire</h2>

      <h4>{envoiMessage && <p>Votre inscription est validée !</p>}</h4>

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
          <div className="je-suis">
            <h3>Je suis :</h3>
            <div>
              <input type="radio" name="status" value="Entreprise" />
              <span>Entreprise</span>
            </div>
            <div>
              <input type="radio" name="status" value="Candidat" />
              <span>Candidat</span>
            </div>
            <div>
              <input type="radio" name="status" value="Autre" />
              <span>Autre</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                placeholder="Nom *"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                placeholder="Prénom *"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                required
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mot de passe *"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="adress"
                value={formData.adress}
                onChange={handleInputChange}
                placeholder="Adresse *"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Ville *"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                placeholder="Code postal *"
                required
              />
            </label>
            <label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Téléphone *"
                required
              />
            </label>
            <input type="submit" value="Valider" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Inscription;
