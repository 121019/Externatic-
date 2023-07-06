const express = require("express");

const router = express.Router();
const uploadMiddleware = require("./middleware/uploadMiddleware");

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
router.post(
  "/candidats/:id/uploadcv",
  uploadMiddleware.upload,
  candidatsControllers.uploadCV
);
module.exports = router;
