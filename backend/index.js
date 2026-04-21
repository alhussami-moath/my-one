const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Add CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Backend! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
