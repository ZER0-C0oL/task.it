const express = require('express');
const router = express.Router();
router.use(express.urlencoded());

const taskController = require('../controllers/task_controller');
router.get('/', taskController.add_task);
router.post('/', taskController.create_task);
router.get('/delete', taskController.delete_task);

module.exports = router;
