const models = require("../models");

const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  models.candidat
    .findByUsernameWithHashedPassword(req.body.email)
    .then(([rows]) => {
      console.log("Rows:", rows); // Log the retrieved rows
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        console.log("User not found");
        res.sendStatus(422);
      } else {
        console.log("User found:", userInDatabase);
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
};
