const Todo = require('../models/todo.model');

const getListTodos = async (req, res) => {
  try {
    const recordsPerPage = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Todo.countDocuments();

    const todos = await Todo.find({})
      .limit(recordsPerPage)
      .skip(recordsPerPage * (page - 1));

    res.json({ todos, page, pages: Math.ceil(count / recordsPerPage) });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getListTodos };
