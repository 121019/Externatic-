const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const candidatsControllers = require("./controllers/candidatsControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/candidats", candidatsControllers.getAll);
router.get("/candidats/:id", candidatsControllers.getById);
router.post("/candidats", candidatsControllers.create);
router.put("/candidats/:id", candidatsControllers.update);
router.delete("/candidats/:id", candidatsControllers.delete);

module.exports = router;
