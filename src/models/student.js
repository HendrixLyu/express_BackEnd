const { Schema, model } = require('mongoose');

const mySchema = new Schema({
    // _id:{
    //     type: Number,
    // } //可以手动改id的数据类型，但不建议碰id
    firstName: {
        type: String, //数据类型
        require: true, //必须
        maxlength: 12, //长度要求
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNum: {//非必须
        type: Number,
        minlength:10,
    }
});

const Model_Student = model('Student_table', mySchema); //创建的表名:Student_table 和 使用的Schema格式:mySchema

module.exports = Model_Student;

