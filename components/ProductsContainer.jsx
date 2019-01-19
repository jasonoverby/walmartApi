import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products.jsx';

const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
const getHeadingText = query => ` Matching "${capitalize(query)}"`;

const ProductsContainer = props => (
  <section>
    <h1>
      Products{props.query === 'all' ? '' : getHeadingText(props.query)}
    </h1>
    <Products
      products={props.products}
      query={props.query}
      handleToggleProduct={props.handleToggleProduct}
      viewProduct={props.viewProduct}
    />
  </section>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  handleToggleProduct: PropTypes.func.isRequired,
  viewProduct: PropTypes.bool.isRequired,
};

export default ProductsContainer;
