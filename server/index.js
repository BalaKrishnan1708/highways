const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Serve static files from the React app if needed in production
// app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/message', (req, res) => {
  res.json({ message: "Welcome to Highways 26 API" });
});

// For any other request, send back the index.html from React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
