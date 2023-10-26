const express = require('express');
const app = express();
const port = process.env.PORT || 8500; // Set your desired port

// Serve your React app's static files
app.use(express.static('../build'));

// Define additional routes or backend functionality here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
