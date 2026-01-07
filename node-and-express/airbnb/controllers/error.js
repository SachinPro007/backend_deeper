const pageNotFound = (req, res, next) => {
  res.render("404", {pageTitle: '404 Page not found'})
}

module.exports = {pageNotFound}