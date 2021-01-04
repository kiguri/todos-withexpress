const express = require('express');
const router = express.Router();

const { getListTodos } = require('../controllers/todo.controller');

router.route('/').get(getListTodos);

module.exports = router;
