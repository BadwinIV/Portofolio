const express = require('express');
const app = express();
const port = 3000;

// Set EJS sebagai view engine
app.set('view engine', 'ejs');

// Folder public untuk file statis (CSS, gambar, dll)
app.use(express.static('public'));

// Routing
app.get('/', (req, res) => {
  res.render('index', { title: 'Beranda | Portofolio' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Tentang Saya' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Proyek Saya' });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
