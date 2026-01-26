const TodoModel = require('../models/todoItem')


const getItems = (req, res, next) => {
  TodoModel.find().then((todos) => {
    res.json({todos})
  }).catch(err => next(err))
}


const postCreateItem = async (req, res, next) => {
  const {text} = req.body 

  try {
    const newItem = new TodoModel({text})
    const item = await newItem.save()
    res.status(201).json(item)
    
  } catch (error) {
    next(error)
  }
}

const deleteItem = async (req, res, next) => {
  const itemId = req.params.id
  await TodoModel.deleteOne({_id: itemId})
  res.status(204).end()  
}

module.exports = {getItems, postCreateItem, deleteItem}