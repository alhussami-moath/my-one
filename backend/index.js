const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Backend! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});