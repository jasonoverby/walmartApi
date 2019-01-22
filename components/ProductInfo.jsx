import React from 'react';
import PropTypes from 'prop-types';

const formatProductData = require('../lib/formatProductData');

const ProductInfo = ({ product }) => {
  const productName = formatProductData(product.name);
  const sizeStr = product.size ? product.size : 'N/A';
  const size = formatProductData(sizeStr);

  return (
    <span>
      <h2>{productName}</h2>
      <h3>
        Size:
        {` ${size}`}
      </h3>
    </span>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductInfo;
