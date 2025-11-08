// Set up express
const express = require("express");
const app = express();

// Define the port for which the application will listen to HTTP requests
const port = 8000;

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));
