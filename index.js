const express = require('express');

require('dotenv').config(); // Load environment variables at the very top
const studentRoutes = require('./routes/api');
require('./helpers/init_mongodb');

const app = express();
app.use(express.json());
app.use(studentRoutes);

// Handling 404 error
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log(`Now listening for requests on: http://localhost:4000`);
});