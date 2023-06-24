const argon2 = require("argon2");
const models = require("../models");
const Candidat = require("../models/CandidatManager");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await models.candidat.findByName(email);

    if (!rows[0]) {
      res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    } else {
      const user = rows[0];

      if (await argon2.verify(user.password, password)) {
        // TODO: Create a session or generate a JWT for the logged-in user
        res
          .status(200)
          .json({ success: true, message: "Login successful", user });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Invalid username or password" });
      }
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const browse = async (req, res) => {
  try {
    const [rows] = await models.candidat.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  try {
    const [rows] = await models.candidat.find(req.params.id);
    if (rows[0]) {
      res.send(rows[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const candidat = req.body;
  candidat.id = parseInt(req.params.id, 10);

  try {
    const [result] = await models.candidat.update(candidat);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const candidat = req.body;
  try {
    candidat.password = await argon2.hash(candidat.password);

    const [result] = await models.candidat.insert(candidat);

    res.location(`/items/${result.insertId}`).sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  try {
    const [result] = await models.candidat.delete(req.params.id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const uploadCV = async (req, res) => {
  const { candidatId } = req.body;
  const candidat = await Candidat.findById(candidatId);

  if (!candidat) {
    res.status(404).send({ error: "No candidate found with this ID" });
  } else {
    const updatedCandidat = {
      ...candidat,
      cv: `/uploads/${req.file.filename}`,
    };

    try {
      await Candidat.updateOne({ _id: candidatId }, updatedCandidat);
      res.send({ success: true });
    } catch (error) {
      res
        .status(500)
        .send({ error: "There was a problem updating the candidate." });
    }
  }

  // The catch-all response
  res.status(500).send({ error: "An unknown error occurred." });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
  uploadCV,
};
