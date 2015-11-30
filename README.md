# linear-preset-proxy-factory

[![Build Status](https://travis-ci.org/javiercejudo/linear-preset-proxy-factory.svg)](https://travis-ci.org/javiercejudo/linear-preset-proxy-factory)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-preset-proxy-factory/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-preset-proxy-factory?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-preset-proxy-factory/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-preset-proxy-factory)

Create a proxy for any to any conversions

## Install

    npm i linear-preset-proxy-factory

## Usage

```js
require('linear-preset-proxy-factory');

const Decimal = require('arbitrary-precision')(require('floating-adapter'));
const proxyFactory = require('linear-preset-proxy-factory');

const proxiedConversions = proxyFactory(Decimal, {
    a: [[0, 1], [0, 1]],
    b: [[1, 2], [3, 4]],
    c: [[0, -5], [0, 30]]
});

proxiedConversions.c_b; // => [[0, 30], [2, -3]]
```

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
