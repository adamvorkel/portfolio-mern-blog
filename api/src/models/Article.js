import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    headline: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date.now()
    }
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;