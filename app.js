const express = require('express');
const app = express();
const recipeRouter = require('./routes/recipeRoutes'); // Adjust the path if necessary

// Middleware
app.use(express.json());

// API Routes
app.use('/api/v1/recipes', recipeRouter);

// Default Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API! Use /api/v1/recipes for accessing recipes.');
});

module.exports = app;
