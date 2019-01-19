import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product.jsx';

let key = 0;

const Products = (props) => {
  const products = props.products.map((product) => {
    key += 1;

    return (
      <Product
        product={product}
        handleToggleProduct={props.handleToggleProduct}
        viewProduct={props.viewProduct}
        key={key}
      />
    );
  });

  return (
    <ul>
      {products}
    </ul>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleProduct: PropTypes.func.isRequired,
  viewProduct: PropTypes.bool.isRequired,
};

export default Products;
