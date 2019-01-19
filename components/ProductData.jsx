import React from 'react';
import PropTypes from 'prop-types';
import ProductArticle from './ProductArticle.jsx';

const ProductData = (props) => {
  const { product } = props;

  return (
    <span>
      <ProductArticle product={props.product} />
      <a
        className="btn"
        href={product.productUrl}
        target="_blank"
      >
        Learn More
      </a>
    </span>
  );
};

ProductData.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductData;
