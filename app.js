const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.use(express.static('public'))

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
})
