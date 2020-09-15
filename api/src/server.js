import express from 'express';
import dbConnect from './db';

const db = dbConnect();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/articles/:title', async (req, res) => {
//     const title = req.params.title;
// });

// app.post('/api/articles', async (req, res) => {
  
// })

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});