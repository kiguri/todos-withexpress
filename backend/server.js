const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());

//run
app.listen(
  process.env.PORT,
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
