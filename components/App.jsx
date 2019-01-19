import React from 'react';
import PropTypes from 'prop-types';
import ToggleableProductsContainer from './ToggleableProductsContainer';
import QueryForm from './QueryForm';

const App = ({ products, query, isResultsPage }) => (
  isResultsPage ? (
    <ToggleableProductsContainer
      products={products}
      query={query}
    />
  ) : (
    <QueryForm />
  )
);

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
  isResultsPage: PropTypes.bool.isRequired,
};

App.defaultProps = {
  products: [],
  query: '',
};

export default App;
