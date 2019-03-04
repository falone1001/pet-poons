import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.nameHandler = this.nameHandler.bind(this);
    this.quantityHandler = this.quantityHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      totalProducts: '',
      productName: '',
      productQuantity: '',
      productPrice: '',
    }
  }


  nameHandler(e) {
    this.setState({
      productName: e.target.value
    });
  }
  quantityHandler(e) {
    this.setState({
      productQuantity: e.target.value
    });
  }
  priceHandler(e) {
    this.setState({
      productPrice: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    const object = {
      productName: this.state.productName,
      productQuantity: this.state.productQuantity,
      productPrice: this.state.productPrice
    };
    axios.post('http://localhost:4000/products', object)
      .then(res => console.log(res.data));

    this.setState({
      productName: '',
      productQuantity: '',
      productPrice: ''
    })
  }


  render() {
    // axios.get('http://localhost:4000/products')
    //   .then(response => {
    //     this.setState({
    //       totalProducts: response.data.length
    //     });
    //   })
    return (
      <div>
        <h2>Create Product <span></span></h2>
        <form onSubmit={this.submitHandler}>
          <label>Product Name</label>
          <input type="text" value={this.state.productName} onChange={this.nameHandler} />
          <br />
          <label>Product Quantity</label>
          <input type="text" value={this.state.productQuantity} onChange={this.quantityHandler} />
          <br />
          <label>Product Price</label>
          <input type="text" value={this.state.productPrice} onChange={this.priceHandler} />
          <br />
          <label>Create Product</label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}