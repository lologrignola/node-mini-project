const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

routes(app);

app.listen(port, () => console.log("Server running in port: " + port));
