const express = require('express');
const cors = require('cors');
const app = express();

// Update allowed origins for CORS
const corsOptions = {
    origin: [
      'http://localhost:5173', // local development
      'https://briangates101.github.io' // GitHub Pages
    ],
    optionsSuccessStatus: 200, // For legacy browsers
  };
  
  // Use CORS middleware with specified options
  app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.send('Hello World from Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});