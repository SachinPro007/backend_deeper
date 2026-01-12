const Home = require("../models/home")

const getAddHome = (req, res, next) => {
  res.render("host/edit-home", { pageTitle: "Add your Home on airbnb", editing: false })
}

const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId
  const editing = req.query.editing === "true"  

  Home.findById(homeId, (home) => {
    if(!home){
      console.log("Home not found for editing");      
      return res.redirect("/host/host-home-list")
    }    
    res.render("host/edit-home", {pageTitle: "Edit your home details", editing, home})
  }) 

}

const postEditHome = (req, res, next) => {
  const {id, houseName, price, rating, location, photoUrl} = req.body
  const newHome = new Home(id, houseName, price, rating, location, photoUrl)
  newHome.save()
  
  res.redirect("/host/host-home-list")  
}

const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId
  Home.delete(homeId, (err) => {  
    if(err){
      console.log("Something went wrong on deleting home", err);      
    }  
    res.redirect("/host/host-home-list")  
  })

}


const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body
  const newHome = new Home(undefined, houseName, price, location, rating, photoUrl)
  newHome.save()

  res.render("host/home-added", { pageTitle: "Home success page" })
}


const getHostHomes = (req, res, next) => {
  Home.fetchAll((homes) => {
    res.render("host/host-home-list", {pageTitle: "Host Homes List", homes})
  })
}


module.exports = {getAddHome, postAddHome, getHostHomes, getEditHome, postEditHome, postDeleteHome}