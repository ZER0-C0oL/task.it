module.exports.home = function(req, res) {
    return res.render('home',{
        title: 'Home',
        project: 'task.it',
        task_list: tasks
    });
}

module.exports.add_task = function(req, res) {
    return res.render('add_task', {
        title: "Add Task"
    });
}