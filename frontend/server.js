const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// Serve static files from the dist directory
// The path to static files is relative to where this script is running.
// In Azure (and our CI setup), this script will be in the same folder as the browser assets or parent.
// Based on angular.json, the output is dist/frontend/browser
// We will place this script inside 'browser' folder or at root of zip?
// Plan says: "Copy server.js to dist/frontend/browser/"
// So this script will be inside the same directory as index.html
app.use(express.static(__dirname));

// Send all requests to index.html
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
