const express = require('express');
const app = express();
const { join } = require('node:path');

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  res.write('data: Hello from server-sent events!\n\n');

  let count = 0;
  const intervalId = setInterval(() => {
    count += 1;
    res.write(`data: Message ${count}\n\n`);
  }, 5000);

  req.on('close', () => {
    clearInterval(intervalId);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});