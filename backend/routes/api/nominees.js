const express = require("express");

const router = express.Router();

const Country = require("../../models/Country");
const State = require("../../models/State");
const City = require("../../models/City");

router.post("/countries-data", (req, res) => {
  Country.find({}).then((user) => {
    if (user) {
      return res.status(200).send(user);
    }
  });
});

router.get("/states-data/:id", (req, res) => {
  console.log(req.params.id);
  State.find({ country: req.params.id }).then((user) => {
    if (user) {
      return res.status(200).send(user);
    }
  });
});

router.get("/city-data/:id", (req, res) => {
  console.log(req.params.id);
  City.find({ state: req.params.id }).then((user) => {
    if (user) {
      return res.status(200).send(user);
    }
  });
});

module.exports = router;
