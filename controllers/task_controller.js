const express = require('express');
const app = express();
app.use(express.urlencoded());

module.exports.add_task = function(req, res) {
    res.render('add_task', {
        title: "Add Task"
    });
}


module.exports.create_task = function(req, res) {
    console.log(req.query);
    // const Tasks_list = require('../models/task_schema');
    // Tasks_list.create(req.body, function(err, newTask) {
    //     if(err){
    //         console.log(`Error in creating task: ${err}`);
    //     }
    //     return res.redirect('back');
    // });
}