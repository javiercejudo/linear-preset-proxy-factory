/*jshint node:true, esnext:true */

'use strict';

module.exports = (Decimal, conversions) => {
  const anyToAny = require('linear-preset-any-to-any')(Decimal);

  return new Proxy(conversions, {
    get: (target, name) => {
      return anyToAny(target, ...name.split('_'));
    }
  });
};
