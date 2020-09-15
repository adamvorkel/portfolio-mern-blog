import express from 'express';
import dbConnect from './db';

import Article from './models/Article';

const db = dbConnect();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/articles/:slug', async (req, res) => {
    const slug = req.params.slug;
    try {
        const article = await Article.findOne({ slug })
    } catch(error) {
        console.log('Failed to get article')
    }
});

// app.post('/api/articles', async (req, res) => {
  
// })

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});