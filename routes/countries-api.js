const express = require("express");
const router = express.Router();
const countries = require("../resources/countries.json");

router
  .get("/countries", (req, res) => {
    res.status(200).json(countries);
  })
  .get("/countries/region/:region", (req, res) => {
    let countryList = countries.filter(
      (c) => c.region.toLowerCase() === req.params.region.toLowerCase()
    );

    if (!countryList || !countryList.length)
      res
        .status(404)
        .send(`There is no country in '${req.params.region}' region`);

    res.send(countryList);
  })
  .get("/countries/:name", (req, res) => {
    let country = countries.find((c) => c.name.common === req.params.name);
    if (!country)
      res.status(404).send(`There is no country like ${req.params.name}`);

    res.send(country);
  });

module.exports = router;
