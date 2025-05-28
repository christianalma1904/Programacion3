async function getByPost(req, res) {
  const { postId } = req.params;
  const comments = await req.db.all(
    'SELECT * FROM comments WHERE post_id = ? ORDER BY created_at DESC',
    [postId]
  );
  res.json(comments);
}

async function create(req, res) {
  const { post_id, author, text } = req.body;
  const result = await req.db.run(
    'INSERT INTO comments (post_id, author, text) VALUES (?, ?, ?)',
    [post_id, author, text]
  );
  const comment = await req.db.get('SELECT * FROM comments WHERE id = ?', [result.lastID]);
  res.status(201).json(comment);
}

module.exports = { getByPost, create };