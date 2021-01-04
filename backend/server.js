const express = require('express');
const connectDb = require('./config');
const notFound = require('./middleware/notFound');
require('dotenv').config();

const todoRouter = require('./routes/todo.routes');
const userRouter = require('./routes/user.routes');

connectDb();

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/todos', todoRouter);
app.use(notFound);

//run
app.listen(
  process.env.PORT,
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
