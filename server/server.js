//Core
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
/* const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors"); */
dotenv.config();

const app = express();
// parse application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
console.log("-> in app");
app.get("/", async (req, res) => {
  console.log("-> in route");
  return res.json({
    myTest: "rererere",
  });
});
app.post("/data", async (req, res) => {
  console.log("-> in response");
  const data = req.body;

  if (data) {
    const response = await axios.post(
      `https://marketing.affboat.com/api/v3/integration?api_token=${process.env.TOKEN}`,
      data
    );
    console.log("-> response", response.data);
    return res.json(response.data);
  }
  return res.json({
    success: false,
    message: "Не все поля заполнены",
  });
});

const PORT = process.env.PORT || 4444;

app.listen(
  PORT,
  console.log(`✔️  !!!Start server on ${PORT} port!  `.yellow.bold)
);
