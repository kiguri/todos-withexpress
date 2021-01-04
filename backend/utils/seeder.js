const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const connectDb = require('../config');

const User = require('../models/user.model');
const Todo = require('../models/todo.model');

dotenv.config();
connectDb();

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'huyha',
    email: 'huyha@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

const todos = [
  {
    title: 'Lorem ipsum 1',
    status: 'todo',
  },
  {
    title: 'Lorem ipsum 2',
    status: 'doing',
  },
  {
    title: 'Lorem ipsum 3',
    status: 'done',
  },
];

const importData = async () => {
  try {
    const createdUsers = await User.insertMany(users);

    const sampleTodos = todos.map((todo) => ({
      ...todo,
      user: createdUsers[0]._id,
    }));

    await Todo.insertMany(sampleTodos);

    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

importData();
