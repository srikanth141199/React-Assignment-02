import React, { Component } from 'react';
import ProductList from './ProductList';
import { data } from './data';

class AllProductPage extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1 style={{ color: 'Blue' }}>All Products</h1>
        <ProductList products={products} />
      </div>
    );
  }
}

export default AllProductPage;
