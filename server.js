const PORT = process.env.PORT || 3099;
const express = require("express");
const app = express();
const api = require("./routes/api");
const activitiesapi = require("./routes/activities-api");
// const countriesapi = require("./routes/countries-api");

app.use(express.json());
app.use("/api", api);
app.use("/api", activitiesapi);
// app.use("/api", countriesapi);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
