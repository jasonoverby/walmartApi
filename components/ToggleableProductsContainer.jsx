import React from 'react';
import PropTypes from 'prop-types';
import ProductsContainer from './ProductsContainer';
import Product from './Product';


class ToggleableProductsContainer extends React.Component {
  state = {
    viewProduct: false,
    product: {},
    window: null,
    scrollPosition: 0,
  };

  componentDidMount() {
    this.setState({ window });
  }

  handleToggleProduct = (product) => {
    const getScrollPosition = window => window.scrollY;
    const { viewProduct, window } = this.state;

    if (!viewProduct) {
      this.setState({ scrollPosition: getScrollPosition(window) });
    }

    this.setState(prevState => ({
      product,
      viewProduct: !prevState.viewProduct,
    }));
  }

  render() {
    const { product, viewProduct, scrollPosition } = this.state;
    const { products, query } = this.props;

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
            scrollPosition={scrollPosition}
            products={products}
            query={query}
            handleToggleProduct={this.handleToggleProduct}
            viewProduct={viewProduct}
          />
        )}

        <a
          className="btn product-search"
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
