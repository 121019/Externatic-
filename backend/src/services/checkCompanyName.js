const models = require("../models");

function CheckCompany(req, res, next) {
  const { name } = req.body;
  models.company.findByName(name).then(([rows]) => {
    if (rows[0]) {
      res.status(401).json({ message: "l'entreprise' existe deja." });
    } else {
      next();
    }
  });
}

module.exports = CheckCompany;
