# composing
composing of functions

```js
const composing = require('composing')

const composed = composing((r) => r * 2, (r) => r * 3)

assert(composed(4)===24)

// Example
composing(JSON.parse, JSON.stringify)({})
composing(JSON.stringify, JSON.parse)('{}')

```

## composing(f[,otherFunctions]) -> Function
