# Habesha Restaurant Menu

A responsive menu and ordering app built with Vite, browser JavaScript, and an Express API. Orders are persisted in the browser and can be sent to Telegram; optional SMS delivery uses Twilio.

## Local Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` for Telegram notifications. The optional Twilio variables enable SMS.
3. Run `npm start` and open `http://localhost:3000`. This starts the app and its `/api/notify-order` endpoint together.
4. Run `npm run build` to verify the production frontend bundle.

Do not put bot credentials in browser variables such as `VITE_*` or `REACT_APP_*`; all notification secrets are read by the server. `.env` is ignored by Git.

## Project Structure

- `index.html`, `script.js`, `styles.css`: browser UI and interactions.
- `utils/validation.js`: shared phone, sanitization, and order-payload validation.
- `api/notify-order.js`: serverless notification handler used by Vercel and Express.
- `server.js`: local Express server.
- `foodimage/`, `image/`: menu and fallback images.
