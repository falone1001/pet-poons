const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  productName: { type: String },
  productQuantity: { type: String },
  productPrice: { type: String }
}, {
    collection: 'product'
  });

module.exports = mongoose.model('Product', Product);