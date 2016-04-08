# multibyte-substr [![Build Status](https://travis-ci.org/akameco/multibyte-substr.svg?branch=master)](https://travis-ci.org/akameco/multibyte-substr)

> multibyte substr


## Install

```
$ npm install --save multibyte-substr
```


## Usage

```js
const multibyteSubstr = require('multibyte-substr');

multibyteSubstr('牛丼', 1 ,2);
//=> '丼'

multibyteSubstr('牛丼', 0 , 4);
//=> '牛丼'
```


## API

### multibyteSubstr(input, [start, len])

#### input

Type: `string`

#### start

Type: `number`

##### len

Type: `number`


## License

MIT © [akameco](http://akameco.github.io)
