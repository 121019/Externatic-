const models = require("../models");

const sendContactData = (req, res) => {
  const { nom, prenom, email, numeroTel, message } = req.body;

  // Créer un nouvel objet pour représenter les données de contact
  const contactData = {
    nom,
    prenom,
    email,
    numeroTel,
    message,
  };

  // Enregistrer les données de contact dans la base de données
  models.contact
    .create(contactData)
    .then((createdContact) => {
      console.warn("Contact data saved:", createdContact);
      res.status(201).send("Contact data saved successfully");
    })
    .catch((error) => {
      console.error("Error saving contact data:", error);
      res.sendStatus(500);
    });
};

module.exports = {
  sendContactData,
};
