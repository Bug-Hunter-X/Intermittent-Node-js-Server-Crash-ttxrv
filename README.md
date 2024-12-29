# Intermittent Node.js Server Crash

This repository demonstrates a bug causing intermittent crashes in a Node.js HTTP server.  The server runs without any errors for a period of time, then unexpectedly stops responding to requests. No error messages are logged in the console.

## Bug Description
The server is a simple HTTP server that responds with 'Hello World!'.  The crash happens without any apparent pattern or error. It is not triggered by specific requests or load.

## Bug Reproduction
1. Clone this repository.
2. Run `node bug.js`.
3. Send requests to `http://localhost:3000/`. The server will initially respond correctly.
4. After some unpredictable time, the server will stop responding without logging any errors. You will need to manually restart it using Ctrl+C and then `node bug.js`.

## Solution
The solution involves implementing proper error handling to catch unexpected exceptions that might lead to the server crashing silently.  Check out `bugSolution.js` for the corrected code.