const bcrypt = require("bcryptjs");
const models = require("../models");

const login = (req, res) => {
  const { Email, password } = req.body;

  models.candidat
    .findByName(Email) // Assuming username is the email
    .then(([rows]) => {
      if (!rows[0]) {
        res
          .status(400)
          .json({ success: false, message: "Invalid username or password" });
      } else {
        const user = rows[0];

        bcrypt.compare(
          password,
          user.Password,
          function compareCallback(err, result) {
            if (result) {
              // TODO: Create a session or generate a JWT for the logged-in user
              res
                .status(200)
                .json({ success: true, message: "Login successful", user });
            } else {
              res.status(400).json({
                success: false,
                message: "Invalid username or password",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = (req, res) => {
  models.candidat
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.candidat
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const candidat = req.body;

  // TODO validations (length, format...)

  candidat.id = parseInt(req.params.id, 10);

  models.candidat
    .update(candidat)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const candidat = req.body;

  // Hash the password with bcrypt before storing
  const salt = bcrypt.genSaltSync(10);
  candidat.Password = bcrypt.hashSync(candidat.Password, salt);

  // TODO validations (length, format...)

  models.candidat
    .insert(candidat)
    .then(([result]) => {
      res.location(`/items/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.candidat
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
};
