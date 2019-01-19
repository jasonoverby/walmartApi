import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo.jsx';

const ProductArticle = (props) => {
  const { product } = props;

  return (
    <article>
      <img
        src={product.mediumImage}
        alt={props.product.name}
      />
      <div className="product-description">
        <ProductInfo product={props.product} />
        <p>{product.shortDescription}</p>
      </div>
    </article>
  );
};

ProductArticle.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductArticle;
