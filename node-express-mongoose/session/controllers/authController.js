const getLogin = (req, res, next) => {
  res.render("auth/login", {pageTitle: "Login Form", isLoggedIn: false})  
}


const postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  // reqisLoggedIn = true;

  res.redirect("/homes")  
}

const postLogout = (req, res, next) => {
  // req.session.isLoggedIn = false
  // res.clearCookie("isLoggedIn")
  // res.cookie("isLoggedIn", false)
  req.session.destroy(() => {
    res.redirect("/login")
  })
}


module.exports = {getLogin, postLogin, postLogout}