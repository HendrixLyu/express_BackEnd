const my_tasks = [];
let id = 1;
class Task_format {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.done = false;
    }
};

const getAllTasks = (req,res) => {
    const { description } = req.query;
    if (description) {
        const tasks_description = my_tasks.filter((e) => e.description.includes(description));
        res.json(tasks_description)
        return;
    } 
    res.json(my_tasks);
    return;
};

const getTaskById = (req,res) => {
    const { id } = req.params;
    const task = my_tasks.find((e) => e.id === Number(id));
    if (!task) {
        res.status(404).json({error:'Task not found'});
        return;
    }
    res.json(task);
};

const createNewTask = (req,res) => {
    const { description } = req.body;
    const newTask = new Task_format(id++, description);
    my_tasks.push(newTask);
    res.status(201).json(newTask);
    return;
};

const updateTaskById = (req,res) => {
    const { id } = req.params;
    const {description, done} = req.body;
    const task = my_tasks.find((e) => e.id === Number(id));
    if (!task) {
        res.status(404).json('Task not found!');
        return;
    }
    if (description) {
        task.description = description;
    }
    if (done) {
        task.done = !!done;
    }
    res.json(task)
    return;
};

const deleteTaskById = (req,res) => {
    const { id } = req.params;
    const index = my_tasks.findIndex((i) => i.id === Number(id));
    if (index === -1) {
        res.status(404).json({error:'T N F'});
        return;
    }
    my_tasks.splice(index, 1);
    res.sendStatus(204);
    return;
};

module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTaskById,
    deleteTaskById,
};