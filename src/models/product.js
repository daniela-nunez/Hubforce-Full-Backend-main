const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('product', productSchema);
