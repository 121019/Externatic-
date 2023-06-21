const models = require("../models");

const getAll = (req, res) => {
  models.candidat
    .findAll()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getById = ({ params: { id } }, res) => {
  models.candidat
    .find(id)
    .then(([row]) => {
      if (row) {
        res.send(row);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const candidat = req.body;

  models.candidat
    .insert(candidat)
    .then(([result]) => {
      res.location(`/candidats/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const update = ({ params: { id }, body }, res) => {
  models.candidat
    .update(id, body)
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

const del = ({ params: { id } }, res) => {
  models.candidat
    .delete(id)
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
  getAll,
  getById,
  create,
  update,
  delete: del,
};
