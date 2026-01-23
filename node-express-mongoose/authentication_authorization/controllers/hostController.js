const Home = require("../models/home")

const getAddHome = (req, res, next) => {
  res.render("host/edit-home", { 
    pageTitle: "Add your Home on airbnb", 
    editing: false, 
    isLoggedIn: req.isLoggedIn, 
    user: req.user 
  })
}

const getEditHome = async (req, res, next) => {

  try {
    const homeId = req.params.homeId
    const editing = req.query.editing === "true"

    const home = await Home.findOne({_id: homeId})

    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-home-list")
    }

    res.render("host/edit-home", { 
      pageTitle: "Edit your home details", 
      editing, 
      home, 
      isLoggedIn: req.isLoggedIn, 
      user: req.user 
    })

  } catch (error) {
    console.log(error);
    return res.redirect("/host/host-home-list")
  }
}

const postEditHome = async (req, res, next) => {
  try {
    const { id, houseName, description, price, rating, location, photoUrl } = req.body
    const updatedHome = { houseName, description, price, rating, location, photoUrl }

    await Home.updateOne({_id: id}, updatedHome)

  } catch (error) {
    console.log(error);


  } finally {
    res.redirect("/host/host-home-list")
  }


}

const postDeleteHome = async (req, res, next) => {
  try {
    const homeId = req.params.homeId
    await Home.deleteOne({_id: homeId})

  } catch (err) {
    if (err) {
      console.log("Something went wrong on deleting home", err);
    }
  } finally {
    res.redirect("/host/host-home-list")
  }
}


const postAddHome = async (req, res, next) => {
  try {
    const { houseName, description, price, location, rating, photoUrl } = req.body

    const newHome = new Home({ houseName, description, price, location, rating, photoUrl })
    await newHome.save()
    return res.render("host/home-added", { 
      pageTitle: "Home success page", 
      isLoggedIn: req.isLoggedIn, 
      user: req.user 
    })

  } catch (error) {
    console.log(error);
  }
}


const getHostHomes = (req, res, next) => {
  Home.find().then((homes) => {
    res.render("host/host-home-list", { 
      pageTitle: "Host Homes List", 
      homes, 
      isLoggedIn: req.isLoggedIn, 
      user: req.user 
    })
  })
}



const hostProtect = (req, res, next) => {
  const userType = req.user.role;
  
  if(userType === "host"){
    next()  
  }else{
    return res.redirect("/")
  }
}

module.exports = { getAddHome, postAddHome, getHostHomes, getEditHome, postEditHome, postDeleteHome, hostProtect }