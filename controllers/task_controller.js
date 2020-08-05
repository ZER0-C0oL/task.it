module.exports.add_task = function(req, res) {
    res.render('add_task', {
        title: "Add Task"
    });
}