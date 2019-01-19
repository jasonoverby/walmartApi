import React from 'react';
import PropTypes from 'prop-types';
import ProductArticle from './ProductArticle';

const ProductData = ({ product }) => (
  <span>
    <ProductArticle product={product} />
    <a
      className="btn"
      href={product.productUrl}
      target="_blank"
    >
      Learn More
    </a>
  </span>
);

ProductData.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductData;
