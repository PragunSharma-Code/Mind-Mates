const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require('./config/database');

// PORT for the BD
const PORT = process.env.PORT || 4000;
require('dotenv').config();

//? When using Socket.io
// const http = require('http');
// const server = http.createServer(app);


// Adding middlewares
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);


// Connecting to Database
dbConnect();


// Adding the default route
app.get('/', (req, resp) => {
    return resp.status(200).json({
        success: true,
        message: 'Server is up and running...'
    })
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is up and running at PORT; ${PORT}`);
});

// server.listen(PORT, () => {
//     console.log(`Server is up and running at PORT; ${PORT}`);
// }) //? When using Socket.io
