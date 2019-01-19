import React from 'react';
import PropTypes from 'prop-types';
import ProductsContainer from './ProductsContainer.jsx';
import Product from './Product.jsx';

class ToggleableProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProduct: false,
      product: {},
    };

    this.handleToggleProduct = this.handleToggleProduct.bind(this);
  }

  handleToggleProduct(product) {
    this.setState({
      product,
      viewProduct: !this.state.viewProduct,
    });
  }

  render() {
    return (
      <main>
        {this.state.viewProduct ? (
          <Product
            handleToggleProduct={this.handleToggleProduct}
            product={this.state.product}
            viewProduct={this.state.viewProduct}
          />
        ) : (
          <ProductsContainer
            products={this.props.products}
            query={this.props.query}
            handleToggleProduct={this.handleToggleProduct}
            viewProduct={this.state.viewProduct}
          />
        )}

        <a
          className="btn"
          href="/"
        >
          Product Search
        </a>
      </main>
    );
  }
}

ToggleableProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};

export default ToggleableProductsContainer;
