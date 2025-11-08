// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.send('<h1>Contact me</h1>'))

// Gets the current date and time
const date = new Date();
router.get('/date', (req, res) => res.send(date))

// Export the router object so index.js can access it
module.exports = router;
