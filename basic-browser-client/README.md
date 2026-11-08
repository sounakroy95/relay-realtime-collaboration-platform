# Relay Browser Client

A minimal browser client for the Relay WebSocket server.

## Run

1. Start the API server (from the repo root):

   ```bash
   cd relay/apps/api
   npm start
   ```

2. Open `browser-client/index.html` in a browser.

   You can double-click the file, or serve it locally:

   ```bash
   npx serve browser-client
   ```

3. Click **Connect**, type a message, and click **Send**. The server echoes it
   back as `Server received: <your message>`.

The client connects to `ws://localhost:3000`. To point it elsewhere, change the
`WS_URL` constant near the top of the script in `index.html`.
