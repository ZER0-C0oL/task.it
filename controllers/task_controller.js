const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

module.exports.add_task = function(req, res) {
    res.render('add_task', {
        title: "Add Task"
    });
}



module.exports.create_task = function(req, res) {
    const Tasks_list = require('../models/task_schema');
    Tasks_list.create(req.body, function(err, newTask) {
        if(err){
            console.log(`Error in creating task: ${err}`);
        }
        return res.redirect('/');
    });
}

module.exports.delete_task = function(req, res) {
    const id = req.query.id;
    const Tasks_list = require('../models/task_schema');
    Tasks_list.findByIdAndDelete(id, function(err) {
        if(err) {
            console.log('Error in deleting', err);
            return;
        }
        return res.redirect('/');
    });
}