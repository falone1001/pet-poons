import React, { Component } from 'react';
import axios from 'axios';
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.nameHandler = this.nameHandler.bind(this);
    this.quantityHandler = this.quantityHandler.bind(this);
    this.priceHandler = this.priceHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      productName: '',
      productQuantity: '',
      productPrice: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/products/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          productName: response.data.productName,
          productQuantity: response.data.productQuantity,
          productPrice: response.data.productPrice
        });
      })
      .catch(function (error) {
        console.log(error);
      })
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
    axios.post('http://localhost:4000/products/' + this.props.match.params.id, object)
      .then(res => console.log(res.data));
    this.props.history.push('/index');
  }
  render() {
    return (
      <div>
        <h2>Edit Product</h2>
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
          <label>Update Product</label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}