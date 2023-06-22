const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const candidatsControllers = require("./controllers/candidatsControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/candidats", candidatsControllers.browse);
router.get("/candidats/:id", candidatsControllers.read);
router.post("/candidats", candidatsControllers.add);
router.put("/candidats/:id", candidatsControllers.edit);
router.delete("/candidats/:id", candidatsControllers.destroy);

router.post("/candidat/login", candidatsControllers.login);

module.exports = router;
