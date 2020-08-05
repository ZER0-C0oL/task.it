module.exports.home = function(req, res) {
    return res.render('home',{
        title: 'Home',
        project: 'task.it',
        task_list: tasks
    });
}