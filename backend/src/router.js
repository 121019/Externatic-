const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const jobControllers = require("./controllers/jobControllers");
const candidatsControllers = require("./controllers/candidatsControllers");
const contactControllers = require("./controllers/contactControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/jobs", jobControllers.browse);
router.get("/jobs/:id", jobControllers.read);
router.put("/jobs/:id", jobControllers.edit);
router.post("/jobs", jobControllers.add);
router.delete("/jobs/:id", jobControllers.destroy);

router.get("/candidats", candidatsControllers.browse);
router.get("/candidats/:id", candidatsControllers.read);
router.post("/candidats", candidatsControllers.add);
router.put("/candidats/:id", candidatsControllers.edit);
router.delete("/candidats/:id", candidatsControllers.destroy);

router.post("/candidat/login", candidatsControllers.login);

router.post("/candidats/inscription", candidatsControllers.register);

router.post("/contact", contactControllers.sendContactData);

module.exports = router;
