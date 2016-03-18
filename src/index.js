/*jshint node:true, esnext:true */

'use strict';

const anyToAnyFactory = require('linear-preset-any-to-any');

module.exports = (Decimal, conversions) => {
  const anyToAny = anyToAnyFactory(Decimal);
  const get = (target, name) => anyToAny(target, ...name.split('_'));

  return new Proxy(conversions, { get });
};
