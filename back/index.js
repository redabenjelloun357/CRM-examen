const express = require('express');
const app = express();
const port = process.env.PORT ;
const dotenv = require('dotenv');
dotenv.config();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});