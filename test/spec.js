/*jshint node:true, mocha:true, esnext:true */

'use strict';

require('should');

const Decimal = require('arbitrary-precision')(require('floating-adapter'));
const proxyFactory = require('../src/');

describe('linear preset factory', () => {
  it.skip('should create linear presets', () => {
    const proxiedConversions = proxyFactory(Decimal, {
        a: [[0, 1], [0, 1]],
        b: [[1, 2], [3, 4]],
        c: [[0, -5], [0, 30]]
    });

    proxiedConversions.c_b.should.eql([[0, 30], [2, -3]]);
  });
});
