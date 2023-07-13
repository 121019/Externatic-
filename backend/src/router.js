const express = require("express");

const router = express.Router();

const candidatsControllers = require("./controllers/candidatsControllers");

const jobControllers = require("./controllers/jobControllers");
const authControllers = require("./controllers/authController");
const companyControllers = require("./controllers/companyControllers");
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

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.post("/company", companyControllers.add);
router.put("/company/:id", companyControllers.edit);
router.delete("/company/:id", companyControllers.destroy);
router.post("/company/login", authControllers.loginCompany);

module.exports = router;
