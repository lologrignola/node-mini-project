function newWebPage(req, res) {
  console.log("User posted " + req.body.first_name + req.body.last_name);
  res.render("newpage", {
    name: req.body.first_name,
    lastname: req.body.last_name,
  });
}

function homePage(req, res) {
  console.log("User entered the webpage.");
  res.render("home");
}

function errorPage(req, res) {
  res.status(404).send("Page does not exist.");
}

module.exports = {
  newWebPage,
  homePage,
  errorPage,
};
