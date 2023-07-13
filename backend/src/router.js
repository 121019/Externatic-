const express = require("express");

const router = express.Router();

const multer = require("multer");

const upload = multer({ dest: "./public/uploads/" });

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
router.put(
  "/candidats/cv/:id",

  upload.single("myfile"),
  candidatsControllers.insertCv
);
router.get("/candidats/cv/:id", candidatsControllers.findCv);

router.post(
  "/login",
  authControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);

router.delete("/candidats/:id", candidatsControllers.destroy);

module.exports = router;
