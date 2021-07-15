const express = require("express");
const router = express.Router();
const countries = require("../resources/countries.json");

router
  .get("/countries", (req, res) => {
    res.status(200).json(countries);
  })
  .get("/countries/:name", (req, res) => {
    let country = countries.find((c) => c.name.common === req.params.name);
    if (!country)
      res.status(404).send(`There is no country like ${req.params.name}`);

    res.send(country);
  });

module.exports = router;
