import mongoose from 'mongoose';

const materialSchema = new mongoose.Schema({
    title: String,
    url: String,
    category: String
});

export default mongoose.model('Material', materialSchema);