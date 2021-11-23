const express = require("express");
let { database } = require("../database.json");

const router = express.Router();

router.get("/create", (req, res) => {
  let userdata = req.body;
  let name = userdata.fullname;

  res.render("people");
});
