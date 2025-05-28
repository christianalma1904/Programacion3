require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initDB } = require('./db');

const postRoutes = require('./src/routes/postRoutes');
const commentRoutes = require('./src/routes/commentRoutes');

async function main() {
  const db = await initDB();
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use((req, res, next) => { req.db = db; next(); });

  app.use('/posts', postRoutes);
  app.use('/comments', commentRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

main();