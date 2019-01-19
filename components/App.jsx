import React from 'react';
import PropTypes from 'prop-types';
import ToggleableProductsContainer from './ToggleableProductsContainer.jsx';
import QueryForm from './QueryForm.jsx';

const App = props => (
  props.isResultsPage ? (
    <ToggleableProductsContainer
      products={props.products}
      query={props.query}
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
