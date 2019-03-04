import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { product: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/products')
      .then(response => {
        this.setState({ product: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.product.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h2>Product Index <span>{this.state.product.length}</span></h2>
        <table border="1">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}