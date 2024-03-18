// Import required modules
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Create an Express application
const app = express();

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Create a WebSocket server by passing the HTTP server instance
const wss = new WebSocket.Server({ server });

// Event listener for WebSocket connections
wss.on('connection', function connection(ws) {
  console.log('Driver connected');

  // Event listener for messages received from clients
  ws.on('message', function incoming(message) {
    console.log('Received request:', message);

    // Parse the received JSON message
    const request = JSON.parse(message);

    // Broadcast the received request to all connected drivers
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(request));
      }
    });
  });

  // Event listener for WebSocket disconnections
  ws.on('close', function close() {
    console.log('Driver disconnected');
  });
});

// Start the HTTP server
const PORT = process.env.PORT || 3000;
server.listen(PORT, function() {
  console.log(`Server started on port ${PORT}`);
});
