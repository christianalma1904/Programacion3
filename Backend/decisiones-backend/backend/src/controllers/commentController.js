const db = require('../../db');

async function getByPost(req, res) {
  try {
    const { postId } = req.params;
    const result = await db.query(
      'SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at DESC',
      [postId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Error al obtener comentarios' });
  }
}

async function create(req, res) {
  try {
    const { post_id, author, text } = req.body;
    if (!post_id || !author || !text) {
      return res.status(400).json({ error: 'post_id, author y text son requeridos' });
    }

    const insertQuery = `
      INSERT INTO comments (post_id, author, text) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const result = await db.query(insertQuery, [post_id, author, text]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Error al crear comentario' });
  }
}

module.exports = { getByPost, create };