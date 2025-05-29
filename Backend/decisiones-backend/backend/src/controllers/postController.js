const db = require('../../db');  // Ajusta la ruta si es necesario

async function getAll(req, res) {
  try {
    const result = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Error al obtener posts' });
  }
}

async function create(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title y content son requeridos' });
    }

    console.log('Insertando post:', { title, content });

    const insertQuery = `
      INSERT INTO posts (title, content) 
      VALUES ($1, $2) 
      RETURNING *;
    `;
    const result = await db.query(insertQuery, [title, content]);

    console.log('Resultado insert:', result.rows[0]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Error al crear post' });
  }
}

module.exports = { getAll, create };
