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
      res.status(201).send(`Contact data saved successfully ${createdContact}`);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.error(error);
    });
};

module.exports = {
  sendContactData,
};
