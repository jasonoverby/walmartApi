import React from 'react';
import PropTypes from 'prop-types';
import ProductData from './ProductData';
import ProductInfo from './ProductInfo';

class Product extends React.Component {
  handleClick = () => {
    const { handleToggleProduct, product } = this.props;
    handleToggleProduct(product);
  }

  render() {
    const { product, viewProduct } = this.props;

    return (
      <li>
        {viewProduct
          ? (
            <ProductData
              product={product}
            />
          )
          : <ProductInfo product={product} />}

        <button type="button" onClick={this.handleClick}>
          Show
          {viewProduct ? ' Products' : ' More'}
        </button>
      </li>
    );
  }
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  viewProduct: PropTypes.bool.isRequired,
  handleToggleProduct: PropTypes.func.isRequired,
};

export default Product;
