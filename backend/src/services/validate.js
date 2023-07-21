const models = require("../models");

function validateUserForm(req, res, next) {
  const { email } = req.body;
  models.candidat.findByEmail(email).then(([rows]) => {
    if (rows[0]) {
      res
        .status(401)
        .json({ message: "Email déjà enregistré, veuillez vous connecter." });
    } else {
      next();
    }
  });
}

module.exports = validateUserForm;
