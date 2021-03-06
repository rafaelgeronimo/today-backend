const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.removeTask);
router.get('/user/:id', taskController.getTasksByUserId);

module.exports = router;
