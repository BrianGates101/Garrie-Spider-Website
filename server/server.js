const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'https://BrianGates101.github.io/Garrie-Spider-Website/client/garrie-website'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.send('Hello World from Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});