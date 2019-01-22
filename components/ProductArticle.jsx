import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';

const formatProductData = require('../lib/formatProductData');

const ProductArticle = ({ product }) => {
  const { shortDescription, longDescription } = product;

  const hasShortDescription = () => {
    const shortDescNotAvailStr = 'short description is not available';
    return shortDescription && !shortDescription.match(shortDescNotAvailStr);
  };

  const getDescription = () => (
    hasShortDescription()
      ? formatProductData(shortDescription)
      : formatProductData(longDescription)
  );

  return (
    <article>
      <img
        src={product.mediumImage}
        alt={product.name}
      />
      <div className="product-description">
        <ProductInfo product={product} />
        <p>{getDescription()}</p>
      </div>
    </article>
  );
};

ProductArticle.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductArticle;
