import React from 'react';
import QueryForm from '../../components/QueryForm';

const { shallow } = require('enzyme');
const { expect } = require('code');
const lab = require('lab');

exports.lab = lab.script();
const { describe, test } = exports.lab;

describe('components', () => {
  describe('QueryForm', () => {
    test('contains element with id "category"', () => {
      expect(shallow(<QueryForm />).find('#category')).to.have.length(1);
    });
  });
});
