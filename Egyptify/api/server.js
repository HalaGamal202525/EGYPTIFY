// server.js
import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// تحديد المسار الصحيح للفايل
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

app.get('/api/Data/places', (req, res) => {
  fs.readFile(path.join(__dirname, 'Data', 'places.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading data' });
    } else {
      const places = JSON.parse(data);
      res.send(places);
    }
  });
});



app.get('/api/Data/places/:id', (req, res) => {
  fs.readFile(path.join(__dirname, 'Data', 'places.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading data' });
    } else {
      const places = JSON.parse(data); // دلوقتي places متعرفة
      const id = parseInt(req.params.id);
      const place = places.find(p => p.id === id);
      if (place) {
        res.json(place);
      } else {
        res.status(404).json({ error: 'Place not found' });
      }
    }
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
