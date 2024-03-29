const models = require("../models");

const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  models.candidat
    .findByEmail(req.body.email)
    .then(([rows]) => {
      const userInDatabase = rows[0];
      if (userInDatabase == null) {
        console.error("User not found");
        res.sendStatus(422);
      } else {
        req.user = userInDatabase;
        req.user.role = "candidat";
        next();
      }
    })
    .catch((error) => {
      console.error("Error during user retrieval:", error);
      res.sendStatus(500);
    });
};

const getCompanyByCompanynameWithPasswordAndPassToNext = (req, res, next) => {
  models.company
    .findByCompanynameWithHashedPassword(req.body.name)
    .then(([rows]) => {
      const userInDatabase = rows[0];
      if (userInDatabase == null) {
        console.error("User not found");
        res.sendStatus(422);
      } else {
        req.user = userInDatabase;
        req.user.role = "company";
        next();
      }
    })
    .catch((error) => {
      console.error("Error during user retrieval:", error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByUsernameWithPasswordAndPassToNext,
  getCompanyByCompanynameWithPasswordAndPassToNext,
};
