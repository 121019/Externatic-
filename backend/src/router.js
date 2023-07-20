const express = require("express");

const router = express.Router();

const multer = require("multer");

const { hashPasswordMiddleware } = require("./services/auth");

const upload = multer({ dest: "./public/uploads/" });

const candidatsControllers = require("./controllers/candidatsControllers");
const jobControllers = require("./controllers/jobControllers");
const authControllers = require("./controllers/authController");
const companyControllers = require("./controllers/companyControllers");
const { verifyPassword, verifyToken } = require("./services/auth");

// ------------   public route  --------------------

router.get("/jobs", jobControllers.browse);
router.post("/jobs", jobControllers.add);
router.get("/jobs/:id", jobControllers.read);
router.put("/jobs/:id", jobControllers.edit);
router.delete("/jobs/:id", jobControllers.destroy);

router.get("/candidats", candidatsControllers.browse);
router.get("/candidats/:id", candidatsControllers.read);
router.post("/candidats", hashPasswordMiddleware, candidatsControllers.add);

router.put("/candidats/:id", hashPasswordMiddleware, candidatsControllers.edit);
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
router.post("/company", hashPasswordMiddleware, companyControllers.add);
router.post(
  "/company/login",
  authControllers.getCompanyByCompanynameWithPasswordAndPassToNext,
  verifyPassword
);

// ------------   private route  --------------------

router.use(verifyToken);

router.delete("/company/:id", companyControllers.destroy);
router.put("/company/:id", hashPasswordMiddleware, companyControllers.edit);

module.exports = router;
