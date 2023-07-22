const express = require("express");

const multer = require("multer");

const validateUserForm = require("./services/validate");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/" });
const { validateJobOfferData } = require("./services/ValidateJobs");
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
router.post("/jobs", validateJobOfferData, jobControllers.add);
router.get("/jobs/:id", jobControllers.read);
router.get("/jobs/business/:id", jobControllers.getjob);
router.put("/jobs/:id", jobControllers.edit);
router.delete("/jobs/:id", jobControllers.destroy);

router.get("/candidats", candidatsControllers.browse);
router.get("/candidats/:id", candidatsControllers.read);
router.post(
  "/candidats",
  hashPasswordMiddleware,
  validateUserForm,
  candidatsControllers.add
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
