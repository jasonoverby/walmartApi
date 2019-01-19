import React from 'react';
import PropTypes from 'prop-types';
import ProductsContainer from './ProductsContainer';
import Product from './Product';

class ToggleableProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewProduct: false,
      product: {},
    };
  }

  handleToggleProduct = (product) => {
    this.setState(prevState => ({
      product,
      viewProduct: !prevState.viewProduct,
    }));
  }

  render() {
    const { product, viewProduct } = this.state;
    const {
      products,
      query,
    } = this.props;

    return (
      <main>
        {viewProduct ? (
          <Product
            handleToggleProduct={this.handleToggleProduct}
            product={product}
            viewProduct={viewProduct}
          />
        ) : (
          <ProductsContainer
            products={products}
            query={query}
            handleToggleProduct={this.handleToggleProduct}
            viewProduct={viewProduct}
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
