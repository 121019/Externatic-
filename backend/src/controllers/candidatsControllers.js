const models = require("../models");

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

const add = (req, res) => {
  models.candidat
    .insert(req.body)
    .then(([createdUser]) => {
      console.error(createdUser);
      res.status(201).send("created");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const candidat = req.body;

  candidat.id = parseInt(req.params.id, 10);

  models.candidat
    .update(candidat)
    .then(([result]) => {
      console.warn(result);
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(204);
      }
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
const uploadCV = (req, res) => {
  // Check if a file was uploaded
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  // Access the uploaded file details
  const { originalname, size, mimetype } = req.file;

  // Perform additional validations or processing as needed
  // For example, you could check the file size, allowed file types, etc.

  // Assuming the file upload is successful, you can send a response
  res.status(200).json({
    message: "File uploaded successfully",
    filename: originalname,
    size,
    mimetype,
  });
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
  uploadCV,
};
