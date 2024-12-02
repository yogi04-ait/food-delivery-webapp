const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');  // Import the DB connection function
const restaurantData = require('./data/resturant');
const userRoutes = require('./routes/userRoutes');
const commonMenu = require('./data/commonMenu');

dotenv.config();  // Load environment variables
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);


// To get resturants
app.get('/restaurants', (req, res) => {
    res.json(restaurantData);
});

// menu 
app.get('/menu', (req, res) => {
    res.json(commonMenu);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


