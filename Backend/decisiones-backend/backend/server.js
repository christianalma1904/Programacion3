require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const postRoutes = require('./src/routers/postRoutes');
const commentRoutes = require('./src/routers/commentRoutes');

async function main() {
  try {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // Pasa el objeto db con query() a cada request
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    app.use('/posts', postRoutes);
    app.use('/comments', commentRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

main();
