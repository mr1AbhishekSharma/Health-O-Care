const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const userModel=require('./models/userModel')

connectDB(); // Connect to DB

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
