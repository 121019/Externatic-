const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const validateUserForm = require("./services/validate");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/" });
const { validateJobOfferData } = require("./services/ValidateJobs");
const CheckCompany = require("./services/checkCompanyName");
const { validateCompanyData } = require("./services/validateCompanyData");
const candidatsControllers = require("./controllers/candidatsControllers");
const jobControllers = require("./controllers/jobControllers");
const authControllers = require("./controllers/authController");
const companyControllers = require("./controllers/companyControllers");
const {
  verifyPassword,
  verifyToken,
  hashPasswordMiddleware,
  logout,
} = require("./services/auth");

// ------------   public route  --------------------

router.get("/jobs", jobControllers.browse);
router.get("/jobs/:id", jobControllers.read);
router.get("/jobs/business/:id", jobControllers.getjob);
router.post("/jobs", validateJobOfferData, jobControllers.add);
router.put("/jobs/:id", jobControllers.edit);
router.delete("/jobs/:id", jobControllers.destroy);

router.get("/candidats", candidatsControllers.browse);
router.get("/candidats/:id", candidatsControllers.read);
router.post(
  "/candidats",
  hashPasswordMiddleware,
  validateUserForm,
  candidatsControllers.add,
  (req, res) => {
    // Génération du token JWT après l'inscription réussie
    const payload = { userId: req.user.id, role: "candidat" };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d", // Vous pouvez définir une durée d'expiration appropriée
    });
    // Envoi du token dans la réponse
    res.cookie("auth_token", token, {
      secure: process.env.NODE_ENV !== "development",
      httpOnly: true,
    });
    // Redirection vers la page d'accueil
    res.redirect("/");
  }
);
router.put(
  "/candidats/:id",
  (req, res, next) => {
    if (req.body.password === "") next();
    else hashPasswordMiddleware(req, res, next);
  },
  candidatsControllers.edit
);
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

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.post(
  "/company",
  validateCompanyData,
  hashPasswordMiddleware,
  CheckCompany,
  companyControllers.add
);
router.post(
  "/company/login",
  authControllers.getCompanyByCompanynameWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/logout", logout);

// ------------   private route  --------------------

router.use(verifyToken);

router.delete("/company/:id", companyControllers.destroy);
router.put("/company/:id", hashPasswordMiddleware, companyControllers.edit);

module.exports = router;
