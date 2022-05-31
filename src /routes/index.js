const express = require('express');
const taskRouter = require('./task');

const v1Router = express.Router();
//所有/tasks开头的路径 均转发给taskRouter.
v1Router.use('/tasks', taskRouter); //把/task路径抽离出来

module.exports = v1Router;