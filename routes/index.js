const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const mongoose = require('mongoose');

router.get('/add-task', homeController.add_task);
router.get('/', homeController.home);

module.exports = router