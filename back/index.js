const express = require('express');
const app = express();
const port = process.env.PORT ;
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
app.get('/', (req, res) => {
  res.send('Hello from le front, reda benjelloun, ');
});
app.get('/login', (req, res) => {
  res.send('Bienvenue sur la route login.');
});
app.get('/sign-up', (req, res) => {
  res.send('Bienvenue sur la route sign up.');
});
app.get('/api/test', (req, res) => {
  res.json({ message: 'Connexion Front-Back réussie' });
});
connectDB()
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
