const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyPassword } = require("../models/Hash");

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

      if (await verifyPassword(user.password, password)) {
        const token = jwt.sign({ id: user.id }, "your_secret_key", {
          expiresIn: "1h",
        });
        res
          .status(200)
          .json({ success: true, message: "Login successful", token });
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

module.exports = { login };
