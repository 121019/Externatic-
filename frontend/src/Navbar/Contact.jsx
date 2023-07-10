import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    numeroTel: "",
    message: "",
  });

  const [envoiMessage, setEnvoiMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer le formulaire ou effectuer d'autres actions
    // ...

    // Réinitialiser le formulaire après l'envoi
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      numeroTel: "",
      message: "",
    });

    setEnvoiMessage(true);
  };

  return (
    <>
      <div className="contact">Nous contacter</div>

      <div className="contactMessage">
        {envoiMessage && <p>Message envoyé avec succès !</p>}
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              placeholder="Nom *"
              required
            />
          </label>

          <label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              placeholder="Prénom *"
              required
            />
          </label>

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email *"
              required
            />
          </label>

          <label>
            <input
              type="tel"
              name="numeroTel"
              value={formData.numeroTel}
              onChange={handleInputChange}
              placeholder="Numéro de téléphone *"
              required
            />
          </label>

          <label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message *"
              required
            />
          </label>
          <button id="pinkButton" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
