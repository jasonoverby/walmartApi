const Lab = require('lab');
const { expect } = require('code');

const hapiServer = require('../server');

exports.lab = Lab.script();
const {
  describe,
  test,
  beforeEach,
} = exports.lab;
const numOfProductsMatchingBackpack = 3;
const numOfProducts = 17;
let server;

describe('server requests', { timeout: 15000 }, async () => {
  beforeEach(async () => {
    server = await hapiServer();
  });

  describe('inject requests with server.inject', () => {
    test('GET request to root path returns OK 200', async () => {
      const response = await server.inject('/');
      expect(response.statusCode).to.equal(200);
      expect(response.statusMessage).to.equal('OK');
    });

    test('GET request to /{category} path returns OK 200', async () => {
      const category = 'backpack';
      const response = await server.inject(`/${category}`);
      expect(response.statusCode).to.equal(200);
      expect(response.statusMessage).to.equal('OK');
    });
  });

  describe('category requests', () => {
    test('category request returns correct number of items', async () => {
      const category = 'backpack';
      const response = await server.inject(`/${category}`);
      const regex = new RegExp(/itemId/, 'g');
      const items = response.result.match(regex);
      expect(items).to.have.length(numOfProductsMatchingBackpack);
    });

    test('category request for all returns correct number of items', async () => {
      const category = 'all';
      const response = await server.inject(`/${category}`);
      const regex = new RegExp(/itemId/, 'g');
      const items = response.result.match(regex);
      expect(items).to.have.length(numOfProducts);
    });

    describe('category request for nonexistent category returns correct number of items', () => {
      const category = 'there is no way that this will match';

      test('contains no matching products', async () => {
        const response = await server.inject(`/${category}`);
        const regex = new RegExp(/itemId/, 'g');
        const items = response.result.match(regex);
        expect(items).to.not.exist();
      });

      test('contains the phrase "No Products Matching"', async () => {
        const response = await server.inject(`/${category}`);
        const phrase = response.result.match('No <!-- -->Products<!-- --> Matching');
        expect(phrase).to.exist();
      });
    });

    test('category request for empty string', () => {
      test('does not return search page if category is valid category', async () => {
        const category = 'backpack';
        const responseForCategory = await server.inject(`/${category}`);
        const responseIncludesSearchPhrase = responseForCategory.result.match('Enter your query');
        expect(responseIncludesSearchPhrase).to.not.exist();
      });

      test('returns search page if category is empty string', async () => {
        const category = '';
        const responseForCategory = await server.inject(`/${category}`);
        const responseIncludesSearchPhrase = responseForCategory.result.match('Enter your query');
        expect(responseIncludesSearchPhrase).to.exist();
      });
    });
  });
});
