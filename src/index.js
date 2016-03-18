/*jshint node:true, esnext:true */

'use strict';

const anyToAnyFactory = require('linear-preset-any-to-any');

module.exports = (Decimal, conversions, sep = '_') => {
  const anyToAny = anyToAnyFactory(Decimal);
  const get = (target, name) => anyToAny(target, ...name.split(sep));

  return new Proxy(conversions, { get });
};
