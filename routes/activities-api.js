const express = require("express");
const router = express.Router();
const lodash = require("lodash");
const activities = require("../resources/activities");

router
  .get("/activities", (req, res) => {
    res.status(200).json(activities);
  })
  .get("/activity", (req, res) => {
    let activitiesArray = [];
    activities.forEach((item) => {
      //   console.log(item.activity, item.activity.length);
      activitiesArray.push(item.activity);
    });

    res.status(200).json({ ativity: lodash._.sample(activitiesArray) });
  });

module.exports = router;
