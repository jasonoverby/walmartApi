const Lab = require('lab');
const { expect } = require('code');

const hapiServer = require('../server');

exports.lab = Lab.script();
const { describe, test, beforeEach } = exports.lab;
const numOfProductsMatchingBackpack = 3;
const numOfProducts = 17;
let server;

describe('server requests', { timeout: 15000 }, async () => {
  beforeEach(async () => {
    server = await hapiServer();
  });

  describe('inject requests with server.inject', async () => {
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

  describe('category requests', async () => {
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

    test('category request for nonexistent category returns correct number of items', async () => {
      const category = 'there is no way that this will match';
      const response = await server.inject(`/${category}`);
      const regex = new RegExp(/itemId/, 'g');
      const items = response.result.match(regex);
      expect(items).to.not.exist();
    });
    //
    // empty str
  });

  // describe search
});
