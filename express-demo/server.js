// Import the built-in HTTP module
const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
	// Set response header
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});

	res.end("Hello! Welcome to Node.js HTTP Server");
});

// Start the server
server.listen(3000, () => {
	console.log("Server is running at http://localhost:3000");
});

