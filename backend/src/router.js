const express = require("express");

const router = express.Router();

const multer = require("multer");

const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

const candidatsControllers = require("./controllers/candidatsControllers");

const jobControllers = require("./controllers/jobControllers");
const authControllers = require("./controllers/authController");
const { hashPassword, verifyPassword } = require("./services/auth");

router.get("/jobs", jobControllers.browse);
router.get("/jobs/:id", jobControllers.read);
router.put("/jobs/:id", jobControllers.edit);
router.delete("/jobs/:id", jobControllers.destroy);

router.get("/candidats", candidatsControllers.browse);
router.get("/candidats/:id", candidatsControllers.read);
router.post("/candidats", candidatsControllers.add);
router.put("/candidats/:id", hashPassword, candidatsControllers.edit);
router.post(
  "/login",
  (req, res, next) => {
    console.error("Before getUserByUsernameWithPasswordAndPassToNext");
    authControllers.getUserByUsernameWithPasswordAndPassToNext(req, res, next);
  },
  (req, res, next) => {
    verifyPassword(req, res, next);
  }
);
router.delete("/candidats/:id", candidatsControllers.destroy);

const upload = multer({ dest: "./public/uploads/" });

// route POST pour recevoir un fichier
router.post("/myfile", upload.single("myfile"), (req, res) => {
  // On récupère le nom du fichier
  const { originalname } = req.file;

  // On récupère le nom du fichier
  const { filename } = req.file;

  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});
module.exports = router;
