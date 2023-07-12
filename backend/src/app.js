// import some node modules for later
const express = require("express");

const path = require("node:path");

const app = express();

const cors = require("cors");

const fs = require("node:fs");

const router = require("./router");

// middlewares
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(router);

/* serve static */

app.use(express.static(path.join(__dirname, "../public")));

/* 
2eme controle pour validation
app.post('/candidat', (req, res) => {
  const schema = Joi.object({
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    adress: Joi.string().required(),
    city: Joi.string().required(),
    postcode: Joi.string().required(),
    phone: Joi.string().required(),
  }); */

/* const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } */

// Les données du formulaire sont valides, continuez avec le traitement

// ... Logique de création d'un nouveau candidat ...

/* Renvoyer une réponse de succès
res.status(201).json({ message: "Candidat créé avec succès" }); */

// ... Autres routes et configurations ...

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    console.error("redirecting to react index file");
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
