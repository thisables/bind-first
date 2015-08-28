# bind-first [![Build Status](https://travis-ci.org/stoeffel/bind-first.svg?branch=master)](https://travis-ci.org/stoeffel/bind-first)

> convert data-first functions into `::`-functions

This is a converter function to make a data-first function working with [function-bind-operator](http://babeljs.io/blog/2015/05/14/function-bind/)


## Install

```
$ npm install --save bind-first
```


## Usage

```js
import { bindFirst } from 'bind-first';

const data = { id: 1, name: 'foo' };

const hasPropFirst = (data, prop) => !!data[prop];
const hasThisFirst = hasPropFirst::bindFirst()


assert.strictEqual(data::hasThisFirst('name'), true);
assert.strictEqual(data::hasThisFirst('nope'), false);
```

`::` huh?
----

If you’re wondering what the `::` thing means, you’d better read this excellent [overview](https://github.com/jussi-kalliokoski/trine/blob/5b735cbfb6b28ae94bac0446d9ecd5ce51fb149b/README.md#why) by [@jussi-kalliokoski](https://github.com/jussi-kalliokoski) or have a look at the [function bind syntax proposal](https://github.com/zenparsing/es-function-bind).

## Related

* [bind-last](https://github.com/stoeffel/bind-last) to convert data-last functions into `::`-functions

## License

MIT © [Stoeffel](http://stoeffel.github.io)
