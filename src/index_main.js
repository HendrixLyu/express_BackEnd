const express = require('express');

const cors = require('./middleware/cors');
const v1Router = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json()); //将传输的数据转成js obj,再赋值到request body
app.use(cors);

app.use(v1Router); //所有/v1开头路径的请求 都转发给v1Router.

app.listen(PORT, () => {
    console.log(`Sever start @ Port #${PORT} !!!`)
    // console.log("Success")
});  