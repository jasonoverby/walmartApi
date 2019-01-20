const hapiServer = require('../server');
const Lab = require('lab');
const { expect } = require('code');

// Test files must require the lab module, and export a test script
const lab = (exports.lab = Lab.script());

// shortcuts to functions from lab
const experiment = lab.experiment;
const test = lab.test;
const it = lab.it;

experiment('inject requests with server.inject,', async () => {
  it('stuf', async () => {
    const server = await hapiServer();

    // wait for the response and the request to finish
    const response = await server.inject('/');
    expect(response.statusCode).to.equal(200);
  });
});
