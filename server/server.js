// const Data = require("./Data");

// const express = require("express");
import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import multer from "multer";
// import helmet from "helmet";
// import morgan from "morgan";
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

app.listen(PORT, () =>
  console.log(`Server runing on port: http://localhost:${PORT}`)
);

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
