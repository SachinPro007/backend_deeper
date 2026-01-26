const todoItemsRouter = require('express').Router()
const todoItemsController = require('../controllers/todosItemController')

todoItemsRouter.get("/", todoItemsController.getItems)
todoItemsRouter.post("/", todoItemsController.postCreateItem)
todoItemsRouter.delete("/:id", todoItemsController.deleteItem)



module.exports = todoItemsRouter