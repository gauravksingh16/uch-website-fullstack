const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  sizes: [{ type: String, required: true }],
  colors: [{ type: String, required: true }],
  brand: { type: String, required: true },
  stock: { type: Number, required: true },
  images: [{ type: String, required: true }],
  expertNotes: { type: String, required: true },
  specifications: {
    color: { type: String },
    material: { type: String },
    fit: { type: String },
    washInstructions: { type: String }
  },
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
});

productSchema.methods.calculateAverageRating = async function() {
  const reviews = await mongoose.model('Review').find({ product: this._id });
  if (reviews.length === 0) {
    this.rating = 0;
  } else {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    this.rating = total / reviews.length;
  }
  return this.save();
};

module.exports = mongoose.model('Product', productSchema);
