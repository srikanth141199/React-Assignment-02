import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr style={{ color: 'green' }}>
            <th style={{ border: '1px solid black' }}>ID</th>
            <th style={{ border: '1px solid black' }}>Name</th>
            <th style={{ border: '1px solid black' }}>Price</th>
            <th style={{ border: '1px solid black' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductList;
