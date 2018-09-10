# Composition
Composition of functions

```js
const composition = require('composition')

const composed = composition((r) => r * 2, (r) => r * 3)

assert(composed(4)===24)

// Example
composition(JSON.parse, JSON.stringify)

```

## Ccomposition(f[,otherFunctions]) -> Function
