import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const productSchema = new mongoose.Schema({
    name: String,
    categories: [String],
    price: Number,
    imgUrl: String,

},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('Product', productSchema)