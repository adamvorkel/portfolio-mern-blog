import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/test', (req, res) => {
    res.send('Test');
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});