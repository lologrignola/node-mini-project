const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = 3000;

app.get("/", (req, res) => {
  console.log("User entered the webpage.");
  res.render("home");
});

app.post("/newpage", function (req, res) {
  console.log(req.body);
  res.render("newpage", {
    name: req.body.first_name,
    lastname: req.body.last_name,
  });
});

app.all("*", (req, res) => {
  res.status(404).send("Page does not exist.");
});

app.listen(port, () => console.log("Server running in port: " + port));
