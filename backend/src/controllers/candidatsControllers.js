const { v4: uuidv4 } = require("uuid");

const fs = require("fs");
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

const findCv = (req, res) => {
  const { id } = req.params;
  models.candidat
    .find(id)
    .then(([rows]) => {
      if (rows.length > 0) {
        const cvPath = rows[0].cv; // Assuming the file path is stored in the 'cv' field
        res.json({ cvPath });
      } else {
        res.sendStatus(404); // Handle case where CV is not found for the given ID
      }
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
      res.status(201).json({ id: createdUser.insertId });
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
const insertCv = async (req, res) => {
  const { originalname, filename } = req.file;
  const { id } = req.params;

  if (!req.file) {
    return res.status(400).send("Invalid file data");
  }

  const sourcePath = `./public/uploads/${filename}`;
  const destinationPath = `./public/uploads/${uuidv4()}-${originalname}`;

  try {
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, destinationPath);
    } else {
      throw new Error("Source file not found");
    }

    const cvPath = destinationPath;

    await models.candidat.sendCv(id, cvPath); // Assuming the method to update the CV is called insertCv

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
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
    message: "File uploaded successfully!!!",
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
  insertCv,
  findCv,
};
