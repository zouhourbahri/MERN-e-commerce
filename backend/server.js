const express = require('express');
const authentificationRoute = require('./routes/authentification');

const connectDB = require('./config/connectDB');
const app = express();
app.use(express.json()); // parsing response

connectDB.connectDB(); // connect to DB

// routes
app.use('/auth', authentificationRoute);

// server
const PORT = process.env.PORT || 7000;
app.listen(PORT, (error) => error ? console.log(error) : console.log(`Server is running on localhost: ${PORT}`));