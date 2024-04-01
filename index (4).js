const express = require('express');
const app = express();
const port = 3002;

// Define a route to handle GET requests
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
