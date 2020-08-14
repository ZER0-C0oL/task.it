tasks = [
    {name: "task1", date: "22nd July 2018", category: "Personal"},
    {name: "task1", date: "22nd July 2018", category: "Personal"},
    {name: "task1", date: "22nd July 2018", category: "Personal"}
]

module.exports.home = function(req, res) {

    const Tasks_list = require('../models/task_schema');
    const moment = require('moment');
    Tasks_list.find({}, function(err, tasks_list){
        tasks_list.sort(function(a,b) {
            if(b['date'] == null)
                return -1;
            if(a['date'] == null)
                return 1;
            return ((a['date'] < b['date']) ? -1: ((a['date'] > b['date']) ? 1 : 0)); 
        })
        if(err){
            console.log("Error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Home",
            tasks_list: tasks_list,
            moment: moment
        });

    })
}