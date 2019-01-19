import React from 'react';
import PropTypes from 'prop-types';

const formatProductData = (name) => {
  const regexForSurroundingQuotes = new RegExp(/(^"|"$)/, 'g');
  const regexforExtraQuotes = new RegExp(/"{2,}/, 'g');
  return name.replace(regexForSurroundingQuotes, '')
    .replace(regexforExtraQuotes, '"');
};

const ProductInfo = (props) => {
  const { product } = props;
  const productName = formatProductData(product.name);
  const sizeStr = props.product.size ? props.product.size : 'N/A';
  const size = formatProductData(sizeStr);

  return (
    <span>
      <h2>{productName}</h2>
      <h3>Size: {size}</h3>
    </span>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductInfo;
