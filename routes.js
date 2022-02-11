const express = require("express");
const Router = express.Router();
const handlers = require("./handlers");

Router.get("/", handlers.homePage);
Router.post("/newpage", handlers.newWebPage);
Router.all("*", handlers.errorPage);

module.exports = (app) => {
  app.use(Router);
};
