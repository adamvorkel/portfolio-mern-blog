import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);

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
    },
    slug: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true
    }
});

ArticleSchema.pre('validate', async function(next) {
    this.slug = this.title
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
    
    const other = await this.constructor.countDocuments({ slug: { $regex: `^${this.slug}` } });
    if(other) this.slug = `${this.slug}-${other}` 
    next();
})

const Article = mongoose.model('Article', ArticleSchema);

export default Article;