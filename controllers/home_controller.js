var tasks = [
    { name: "task1", date: "3rd July 20", category: "Personal"},
    { name: "task2", date: "2nd July 20", category: "Work"},
    { name: "task3", date: "4th August 20", category: "Other"}
]

module.exports.home = function(req, res) {
    return res.render('home',{
        title: 'Home',
        project: 'task.it',
        task_list: tasks
    });
}