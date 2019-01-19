import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

let key = 0;

const Products = ({ products, handleToggleProduct, viewProduct }) => {
  const productComponents = products.map((product) => {
    key += 1;

    return (
      <Product
        product={product}
        handleToggleProduct={handleToggleProduct}
        viewProduct={viewProduct}
        key={key}
      />
    );
  });

  return (
    <ul>
      {productComponents}
    </ul>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleProduct: PropTypes.func.isRequired,
  viewProduct: PropTypes.bool.isRequired,
};

export default Products;
