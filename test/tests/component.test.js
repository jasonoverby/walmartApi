import React from 'react';
import QueryForm from '../../components/QueryForm';
import App from '../../components/App';
import ToggleableProductsContainer from '../../components/ToggleableProductsContainer';
import Products from '../../components/Products';
import Product from '../../components/Product';
import ProductData from '../../components/ProductData';
import ProductInfo from '../../components/ProductInfo';
import ProductsContainer from '../../components/ProductsContainer';

const { shallow } = require('enzyme');
const { expect } = require('code');
const lab = require('lab');

exports.lab = lab.script();
const { experiment, test } = exports.lab;

experiment('components', () => {
  experiment('App toggles components based on value of props.isResultsPage', () => {
    const query = 'test';
    const products = [{}];

    test('renders QueryForm if isResultsPage is false', () => {
      const wrapper = shallow(
        <App isResultsPage={false} query={query} products={products} />,
      );

      expect(wrapper.containsMatchingElement(<QueryForm />)).to.be.true();

      expect(
        wrapper.containsMatchingElement(
          <ToggleableProductsContainer query={query} products={products} />,
        ),
      ).to.be.false();
    });

    test('renders ToggleableProductsContainer if isResultsPage is false', () => {
      const wrapper = shallow(<App isResultsPage query="backpack" products={[{}]} />);
      expect(wrapper.containsMatchingElement(<QueryForm />)).to.be.false();
      expect(
        wrapper.containsMatchingElement(<ToggleableProductsContainer query="backpack" products={[{}]} />),
      ).to.be.true();
    });
  });

  experiment('ToggleableProductsContainer toggles components based on value of state.viewProduct', () => {
    const query = 'test';
    const products = [{}];
    const product = {};

    test('renders Product if viewProduct is true', () => {
      const wrapper = shallow(
        <ToggleableProductsContainer products={products} query={query} />,
      );

      wrapper.setState({ viewProduct: true });
      expect(wrapper.containsMatchingElement(
        <Product
          product={product}
          handleToggleProduct={wrapper.instance().handleToggleProduct}
          viewProduct={wrapper.state().viewProduct}
        />,
      )).to.be.true();

      expect(wrapper.containsMatchingElement(
        <ProductsContainer
          products={products}
          query={query}
          handleToggleProduct={wrapper.instance().handleToggleProduct}
          viewProduct={wrapper.state().viewProduct}
        />,
      )).to.be.false();
    });

    test('renders ProductsContainer if viewProduct is false', () => {
      const wrapper = shallow(
        <ToggleableProductsContainer products={products} query={query} />,
      );

      wrapper.setState({ viewProduct: false });
      expect(wrapper.containsMatchingElement(
        <Product
          product={product}
          handleToggleProduct={wrapper.instance().handleToggleProduct}
          viewProduct={wrapper.state().viewProduct}
        />,
      )).to.be.false();

      expect(wrapper.containsMatchingElement(
        <ProductsContainer
          products={products}
          query={query}
          handleToggleProduct={wrapper.instance().handleToggleProduct}
          viewProduct={wrapper.state().viewProduct}
        />,
      )).to.be.true();
    });
  });

  experiment('Products contains correct number of Product child components', () => {
    const handleToggleProduct = () => {};

    test('contains number of elements based on products prop', () => {
      const products = [{}, {}, {}];
      const wrapper = shallow(
        <Products
          viewProduct={false}
          handleToggleProduct={handleToggleProduct}
          products={products}
        />,
      );
      expect(wrapper.find(Product)).to.have.length(products.length);
    });

    test('contains no elements based on products prop', () => {
      const products = [];
      const wrapper = shallow(
        <Products
          viewProduct={false}
          handleToggleProduct={handleToggleProduct}
          products={products}
        />,
      );
      expect(wrapper.find(Product)).to.have.length(products.length);
    });
  });

  experiment('ProductsContainer heading toggles based on presence of matching products', () => {
    const handleToggleProduct = () => {};
    const query = 'test';

    test('contains "No Products Matching" if there are no matching products', () => {
      const products = [];
      const wrapper = shallow(
        <ProductsContainer
          viewProduct={false}
          handleToggleProduct={handleToggleProduct}
          query={query}
          products={products}
        />,
      );

      const h1 = wrapper.find('h1');
      expect(h1.text()).to.equal('No Products Matching "Test"');
    });

    test('contains "Products Matching "{category}"" if there are matching products', () => {
      const products = [{}];
      const wrapper = shallow(
        <ProductsContainer
          viewProduct={false}
          handleToggleProduct={handleToggleProduct}
          query={query}
          products={products}
        />,
      );

      const h1 = wrapper.find('h1');
      expect(h1.text()).to.equal('Products Matching "Test"');
    });
  });

  experiment('Product toggles based on value of viewProduct', () => {
    const product = {};
    const handleToggleProduct = () => {};

    test('renders ProductData if viewProduct is true', () => {
      const wrapper = shallow(
        <Product
          product={product}
          handleToggleProduct={handleToggleProduct}
          viewProduct
        />,
      );
      expect(
        wrapper.containsMatchingElement(<ProductData product={product} />),
      ).to.be.true();

      expect(
        wrapper.containsMatchingElement(<ProductInfo product={product} />),
      ).to.be.false();
    });

    test('renders ProductInfo if viewProduct is false', () => {
      const wrapper = shallow(
        <Product
          product={product}
          handleToggleProduct={handleToggleProduct}
          viewProduct={false}
        />,
      );
      expect(
        wrapper.containsMatchingElement(<ProductData product={{}} />),
      ).to.be.false();

      expect(
        wrapper.containsMatchingElement(<ProductInfo product={{}} />),
      ).to.be.true();
    });

    test('button text is "Show Products" if viewProduct is true', () => {
      const wrapper = shallow(<Product
        product={product}
        handleToggleProduct={handleToggleProduct}
        viewProduct
      />);

      const button = wrapper.find('button');
      expect(button.text()).to.equal('Show Products');
    });

    test('button text is "Show More" if viewProduct is false', () => {
      const wrapper = shallow(<Product
        product={product}
        handleToggleProduct={handleToggleProduct}
        viewProduct={false}
      />);

      const button = wrapper.find('button');
      expect(button.text()).to.equal('Show More');
    });
  });
});
