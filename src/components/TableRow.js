import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete('http://localhost:4000/products/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.productName}</td>
        <td>{this.props.obj.productQuantity}</td>
        <td>{this.props.obj.productPrice}</td>
        <td><Link to={"/edit/" + this.props.obj._id}>Edit</Link></td>
        <td><button onClick={this.delete}>Delete</button></td>
      </tr>
    );
  }
}

export default TableRow;