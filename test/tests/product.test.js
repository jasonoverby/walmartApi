const lab = require('lab');
const { expect } = require('code');

const {
  getProducts,
  getIds,
  getProductData,
  getProductsFromCache,
  getMatchingProducts,
} = require('../../lib/getMatchingProducts');

exports.lab = lab.script();
const { experiment, test } = exports.lab;
const numOfProductsMatchingBackpack = 3;
const numOfProducts = 17;

experiment('ids', { timeout: 15000 }, () => {
  test('getIds returns ids', async () => {
    const ids = await getIds();
    expect(ids).to.have.length(numOfProducts);
  });
});

experiment('products', { timeout: 15000 }, () => {
  test('getProducts returns products', async () => {
    const products = await getProducts();
    expect(products).to.have.length(numOfProducts);
  });

  test('getProductData returns product', { timeout: 15000 }, async () => {
    const ids = await getIds();
    const id = ids[0];
    const product = await getProductData(id);
    expect(product).to.shallow.include('data');
  });
});

experiment('products that match category', { timeout: 15000 }, () => {
  test('getMatchingProducts returns correct num of products that match "backpack"', async () => {
    const category = 'backpack';
    const matchingProducts = await getMatchingProducts(category);
    expect(matchingProducts).to.have.length(numOfProductsMatchingBackpack);
  });

  test('getMatchingProducts returns all products when "all" is the category', async () => {
    const category = 'all';
    const matchingProducts = await getMatchingProducts(category);
    expect(matchingProducts).to.have.length(numOfProducts);
  });
});

experiment('cached products', { timeout: 15000 }, () => {
  test('products.json file contains products', async () => {
    const products = await getProductsFromCache();
    expect(products).to.have.length(numOfProducts);
  });
});
