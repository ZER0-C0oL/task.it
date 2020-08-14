const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'Other'
    },
    date: {
        type: Date
    }
});


const Tasks_list = mongoose.model('Tasks_list', taskSchema);

module.exports = Tasks_list;