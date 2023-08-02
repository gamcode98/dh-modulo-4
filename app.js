const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
})

app.post(['/login', '/signup'], (req, res) => { 
  res.redirect('/');
})

app.use(express.static('public'));

app.listen(PORT, () => { 
  console.log(`Server running on: http://localhost:${PORT}`);
})
