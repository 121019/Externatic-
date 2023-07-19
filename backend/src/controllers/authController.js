const models = require("../models");

const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  models.candidat
    .findByUsernameWithHashedPassword(req.body.email)
    .then(([rows]) => {
      console.error("Rows:", rows); // Log the retrieved rows
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        console.error("User not found");
        res.sendStatus(422);
      } else {
        console.error("User found from authController:", userInDatabase);
        req.user = userInDatabase;
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
    .findByCompanynameWithHashedPassword(req.body.email)
    .then(([rows]) => {
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        console.error("User not found");
        res.sendStatus(422);
      } else {
        req.user = userInDatabase;
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
