const express = require('express');
const productRoutes = express.Router();

const Product = require('./product.model');

productRoutes.route('/').post(function (req, res) {
  const product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({ 'product': 'Product Added' });
    })
    .catch(err => {
      res.status(400).send('Error')
    })
})

productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(products)
    }
  });
});

productRoutes.route('/:id').get(function (req, res) {
  const id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});

productRoutes.route('/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product) {
      res.status(404).send('Product Not Found');
    }
    else {
      product.productName = req.body.productName;
      product.productQuantity = req.body.productQuantity;
      product.productPrice = req.body.productPrice;

      product.save().then(product => {
        res.json('Product Updated');
      })
        .catch(err => {
          res.status(400).send('Unable To Update');
        })
    }
  })
});

productRoutes.route('/:id').delete(function (req, res) {
  Product.findByIdAndRemove({ _id: req.params.id }, function (err, product) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = productRoutes;