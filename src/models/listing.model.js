const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: {
        type: Number,
        min: 0
    },
    location: String,
    country: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User' // "User" model-er reference
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review" // "Review model reference"
        }
    ],
    geometry: {
        type: {
            type: String,
            enum: ['Point'], // 'geometry.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number], // An array of numbers [longitude, latitude]
            required: true
        }
    }

})


listingSchema.index({ title: 'text', description: 'text', location: 'text' });


const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing;