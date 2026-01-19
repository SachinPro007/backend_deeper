const getLogin = (req, res, next) => {
  res.render("auth/login", {pageTitle: "Login Form", isLoggedIn: false})  
}


const postLogin = (req, res, next) => {
  console.log(req.body);
  res.cookie("isLoggedIn", true)

  res.redirect("/homes")  
}

const postLogout = (req, res, next) => {
  // res.clearCookie("isLoggedIn")
  res.cookie("isLoggedIn", false)
  res.redirect("/")
}


module.exports = {getLogin, postLogin, postLogout}