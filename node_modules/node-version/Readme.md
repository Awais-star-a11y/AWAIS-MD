[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![GitHub Actions][github-actions-image]][github-actions-url]
[![Codecov][codecov-image]][codecov-url]

# Node-version

A quick module that returns current node version parsed into parts.

## Installation

```shell
npm install node-version
# Or Yarn
yarn add node-version
# Or pnpm
pnpm add node-version
```

## Quick Start

```js
import currentVersion from 'node-version';

/*
console.log(currentVersion);

{
    original: 'v0.4.10', // same as process.version
    short: '0.4',
    long: '0.4.10',
    major: '0',
    minor: '4',
    build: '10'
}
*/
```

## Warning

Version 1.0.0 break 0.1.0 since its API changes.

Change

```js
var currentVersion = new (require('node-version').version)();
```

To

```js
var currentVersion = require('node-version');
```

[npm-version-image]: https://img.shields.io/npm/v/node-version.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/node-version.svg
[npm-url]: https://npmjs.org/package/node-version
[github-actions-image]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fsrod%2Fnode-minify%2Fbadge%3Fref%3Ddevelop&style=flat
[github-actions-url]: https://github.com/srod/node-minify/actions
[codecov-image]: https://codecov.io/gh/srod/node-version/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/srod/node-version
