/*jshint node:true, esnext:true */

'use strict';

const anyToAnyFactory = require('linear-preset-any-to-any');

module.exports = (Decimal, conversions) => {
  const anyToAny = anyToAnyFactory(Decimal);

  return new Proxy(conversions, {
    get: (target, name) => {
      return anyToAny(target, ...name.split('_'));
    }
  });
};
