const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },  // Price per unit
  totalPrice: { type: Number, required: true } // Total price for the quantity
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
  createdAt: { type: Date, default: Date.now },
});

// Middleware to calculate totalPrice before saving the cart
cartSchema.pre('save', function(next) {
  this.items.forEach(item => {
    item.totalPrice = item.price * item.quantity;
  });
  next();
});

module.exports = mongoose.model('Cart', cartSchema);
