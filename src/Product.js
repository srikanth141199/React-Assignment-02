import React from 'react';

const Product = ({ product }) => {
  return (
    <tr>
      <td style={{ border: '1px solid black' }}>{product.id}</td>
      <td style={{ border: '1px solid black' }}>{product.Name}</td>
      <td style={{ border: '1px solid black' }}>{product.Quantity}</td>
      <td style={{ border: '1px solid black' }}>{product.Price}</td>
    </tr>
  );
};

export default Product;
