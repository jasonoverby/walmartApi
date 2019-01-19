const {
  getProducts,
  getIds,
  getProductData,
  getProductsFromCache,
  getMatchingProducts,
} = require('../lib/getMatchingProducts');

const numOfProducts = 17;
const numOfProductsMatchingBackpack = 3;

describe('ids', () => {
  test('getIds returns ids', async () => {
    const ids = await getIds();
    expect(ids).toHaveLength(numOfProducts);
  });
});

describe('products', () => {
  test('getProducts returns products', async () => {
    const products = await getProducts();
    expect(products).toHaveLength(numOfProducts);
  });

  test('getProductData returns product', async () => {
    const ids = await getIds();
    const id = ids[0];
    const product = await getProductData(id);
    expect(product).toHaveProperty('data');
  });
});

describe('products that match category', () => {
  test('getMatchingProducts returns correct num of products that match "backpack"', async () => {
    const category = 'backpack';
    const matchingProducts = await getMatchingProducts(category);
    expect(matchingProducts).toHaveLength(numOfProductsMatchingBackpack);
  });

  test('getMatchingProducts returns all products when "all" is the category', async () => {
    const category = 'all';
    const matchingProducts = await getMatchingProducts(category);
    expect(matchingProducts).toHaveLength(numOfProducts);
  });
});

describe('cached products', () => {
  test('products.json file contains products', async () => {
    const products = await getProductsFromCache();
    expect(products).toHaveLength(numOfProducts);
  });
});
