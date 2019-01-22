import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products';

const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
const getHeadingText = query => ` Matching "${capitalize(query)}"`;

class ProductsContainer extends React.Component {
  componentDidMount() {
    const { scrollPosition } = this.props;
    window.scrollTo(0, scrollPosition);
  }

  render() {
    const {
      query,
      products,
      handleToggleProduct,
      viewProduct,
    } = this.props;

    return (
      <section>
        <h1>
          {products.length === 0 ? 'No ' : ''}
          Products
          {query === 'all' ? '' : getHeadingText(query)}
        </h1>
        <Products
          products={products}
          query={query}
          handleToggleProduct={handleToggleProduct}
          viewProduct={viewProduct}
        />
      </section>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  handleToggleProduct: PropTypes.func.isRequired,
  viewProduct: PropTypes.bool.isRequired,
  scrollPosition: PropTypes.number.isRequired,
};

export default ProductsContainer;
