import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';

const ProductArticle = ({ product }) => (
  <article>
    <img
      src={product.mediumImage}
      alt={product.name}
    />
    <div className="product-description">
      <ProductInfo product={product} />
      <p>{product.shortDescription}</p>
    </div>
  </article>
);

ProductArticle.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductArticle;
