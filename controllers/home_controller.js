tasks = [
    {name: "task1", date: "22nd July 2018", category: "Personal"},
    {name: "task1", date: "22nd July 2018", category: "Personal"},
    {name: "task1", date: "22nd July 2018", category: "Personal"}
]

module.exports.home = function(req, res) {

    const Tasks_list = require('../models/task_schema');
    Tasks_list.find({}, function(err, tasks_list){
        if(err){
            console.log("Error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Home",
            tasks_list: tasks_list
        });

    })
}