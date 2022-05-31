const express = require('express');//要用到express的Router
const { getAllTasks, getTaskById, createNewTask, updateTaskById, deleteTaskById } = require('../controllers/task');
const taskRouter = express.Router();

//根据不同的路径和不同的method 转发给相对应的route handler.
taskRouter.get('', getAllTasks);

taskRouter.get('/:id', getTaskById);

taskRouter.post('', createNewTask);

taskRouter.put('/:id', updateTaskById);

taskRouter.delete('/:id', deleteTaskById);

module.exports = taskRouter;