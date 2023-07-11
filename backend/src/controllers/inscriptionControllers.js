/*
-------------------------------- A EFFACER -------------------------------------


!!!!! -------- INSERER POUR PASSWORD = HASHER MOT PASSE -------- !!!!!!!!

const express=require('express');
import react from 'react';

const { Router, response } = require("express");
const { Candidat } = require("../models");
const db = require ('mvc_express OU table');
const cors = require("cors");
const express = require("express");
const argon2=require("argon2");
const app = express();
const mysql =require('mysql2');
const config = require('config.json');
const router=Router();

app.use(express.json());
app.use(cors());

db.connect();


const register = async (req, res) => {
  try {
    // Récupérer données du formulaire depuis req.body
    const { firstname, lastname, email, password, adress, city, postcode, phone } = req.body;

    // pour créer un nouveau candidat dans la base de données
    const candidat = await Candidat.create({
      firstname,
      lastname,
      email,
      password,
      adress,
      city,
      postcode,
      phone,
    });

    // Répondre au candidat créé
    res.status(201).json(candidat);
  } catch (error) {
    // Gérer les erreurs
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'inscription." });
  }
};

const connexion=mysql2.createConnection({
  debv APP_PORT=5000
  FRONTEND_URL=http://localhost:3000
  host: "localhost",
  DB_PORT=3306,
  user: "notroot",
  password: "",
  database:"mcv_express" 
  })

  connection.connect();

  const connexion=mysql2.createConnection({
  debv APP_PORT=5000
  BACKEND =http://localhost: 
  host: "localhost",
  DB_PORT=3306,
  user: "notroot",
  password: "",
  database:"mcv_express" 
  })


app.get("/register", (req, res) => {
    db.query(" ", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
            console.log('created!');
        }
    });
});

  app.post('/register', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const 
    ...
  
      adress,
      city,
      postcode,
      phone,
    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})


 ------- CREER ACTIVATION COMPTE ----------
 
router.post("/selfactivation", async (req, res = response) => {
    const { email, token } = req.body;

    const { account, error } = await getAccount(email, null, true);
    if (account === null) return res.status(error.code).json({ message: error.message });

    if (token !== account.activation_token) return res.status(403).json({ message: "Bad security token." });

    if (!(await activate(email, true))) return res.sendStatus(500);

    res.sendStatus(204);
});

--------- ACTIVER COMPTE --------
router.post("/activate", authenticate, async (req, res = response) => {
    const currentAuthAccount = req.auth.account;
    if (currentAuthAccount.is_admin) {
        const { email, active } = req.body;

        if (email === currentAuthAccount.email)
            return res.status(400).json({ message: "Unable to change your account activation state." });

        const { account, error } = await getAccount(email, null, true);
        if (account === null) return res.status(error.code).json({ message: error.message });

        let activationState = parseInt(active);
        if (activationState !== 1) activationState = 0;

        if (!(await activate(email, activationState === 1))) return res.sendStatus(500);

        return res.sendStatus(204);
    }

    return res.status(403).json({ message: "Account not allowed." });
});

----------- DECONNECTER SON COMPTE ----------

router.get("/logout", authenticate, async (req, res = response) => {
    const currentAuthAccount = req.auth.account;

    const cleared = await clearToken(currentAuthAccount.email, "access_token");
    if (!cleared) return res.sendStatus(500);

    return res.sendStatus(204);
});

router.post("/logout", authenticate, async (req, res = response) => {
    const currentAuthAccount = req.auth.account;
    if (currentAuthAccount.is_admin) {
        const { email } = req.body;

        const { account, error } = await getAccount(email);
        if (account === null) return res.status(error.code).json({ message: error.message });

        const cleared = await clearToken(account.email, "access_token");
        if (!cleared) return res.sendStatus(500);

        return res.sendStatus(204);
    }
     return res.status(403).json({ message: "Account not allowed." });
});

--------------- SI EMAIL EXISTE DEJA ------------------
 
router.post("/emailexists", async (req, res = response) => {
    const { email } = req.body;

    const { account, error } = await getAccount(email);
    return res.status(200).json({ exists: account !== null });
});


----- SI NOM EXISTE DEJA ---------- 
 
router.post("/nameexists", authenticate, async (req, res = response) => {
    const currentAuthAccount = req.auth.account;
    if (currentAuthAccount.is_admin) {
        const { name } = req.body;

        const exists = await nameExists(name);
        return res.status(200).json({ exists });
    }

    return res.status(403).json({ message: "Account not allowed." });
});


------------- POUR CREER UTILISATEUR ----------------------

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
        ......
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

-------------------------------------- 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

server.listen (3000, () => {
    console.log("running backend server");
})

connexion.query('DATABASE mcv_express');
connexion.query('Use Candidats');


import inscriptionControllers;
*/
