const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
app.use(express.json());

// connect to DB
connectDB();

// routes

// server
const PORT = process.env.PORT || 7000 ;

app.listen(PORT, (error)=> error ? console.log(error) : console.log(`Server is running on localhost: ${PORT}`));