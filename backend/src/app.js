const express = require("express");

const path = require("node:path");

const app = express();

const cors = require("cors");

const fs = require("node:fs");

const cookieParser = require("cookie-parser");

const router = require("./router");

// middlewares

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  cors({
    credentials: true,
    origin:
      process.env.FRONTEND_URL ??
      "https://externatic-front.valence.wilders.dev",
    optionsSuccessStatus: 200,
  })
);

app.use(router);

/* serve static */

app.use(express.static(path.join(__dirname, "../public")));

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    console.error("redirecting to react index file");
    res.sendFile(reactIndexFile);
  });
}

// ready to export

module.exports = app;
