import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
