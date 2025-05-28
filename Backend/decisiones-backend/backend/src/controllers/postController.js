async function getAll(req, res) {
  const posts = await req.db.all('SELECT * FROM posts ORDER BY created_at DESC');
  res.json(posts);
}

async function create(req, res) {
  const { title, content } = req.body;
  const result = await req.db.run(
    'INSERT INTO posts (title, content) VALUES (?, ?)',
    [title, content]
  );
  const post = await req.db.get('SELECT * FROM posts WHERE id = ?', [result.lastID]);
  res.status(201).json(post);
}

module.exports = { getAll, create };