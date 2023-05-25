// const Data = require("./Data");

// const express = require("express");
import express from "express"; // Node. JS framework
import bodyParser from "body-parser"; // Process the request body
import mongoose from "mongoose"; // MongoDB access
import cors from "cors"; // Cross origin request
import dotenv from "dotenv"; // Enviroment variables
import multer from "multer"; // File upload locally
import helmet from "helmet"; // Request Safety
import morgan from "morgan"; // Login
import path from "path";
import { fileURLToPath } from "url";

// const app = express();
// const PORT = 5000;

// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
// });

// app.listen(PORT, () =>
//   console.log(`Server runing on port: http://localhost:${PORT}`)
// );

/* Configurations */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", exntended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* File Storage */

// From multer's github repo

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect lol sorry`));

/////////////////////////////////

// Before Experimentation

// import express from "express";
// const app = express();
// const PORT = 5000;

// app.get("/api", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
// });

// app.listen(PORT, () =>
//   console.log(`Server runing on port: http://localhost:${PORT}`)
// );
