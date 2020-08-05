const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task_controller');
router.get('/', taskController.add_task);

module.exports = router;
