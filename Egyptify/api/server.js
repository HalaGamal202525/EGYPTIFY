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

// ✅ Endpoint الصحيح
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
