const express = require('express');
const { Telegraf } = require('telegraf');  // Example for Telegram bot
const app = express();
const port = 3000;

// Setup your Telegram bot here
const bot = new Telegraf('7405438395:AAE_lMyHZjxA3NeKWyEhXHKBuRzBG1tTWbs');

// Example route
app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});