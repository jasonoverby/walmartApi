import React from 'react';
import PropTypes from 'prop-types';
import ProductData from './ProductData.jsx';
import ProductInfo from './ProductInfo.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleToggleProduct(this.props.product);
  }

  render() {
    const { product } = this.props;

    return (
      <li>
        {this.props.viewProduct
          ? <ProductData
            product={product}
          />
          : <ProductInfo product={this.props.product} />}

        <button onClick={this.handleClick}>
          Show {this.props.viewProduct ? 'Products' : 'More'}
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
