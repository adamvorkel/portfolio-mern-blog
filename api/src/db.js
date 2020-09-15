import mongoose from 'mongoose';

const uri = 'mongodb://mongo:27017';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

export default async () => {
    try {
        await mongoose.connect(uri, options);
        console.log('Connected to db');
        return mongoose.connection;
    } catch(error) {
        console.log('Failed to establish connection to db...');
        process.exit(1);
    }
}