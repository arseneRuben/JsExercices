
'use strict'

// En développement: 'test' is not defined.eslint(no-undef)
const test = 'allo'

// Lors de l'exécution: ReferenceError: test is not defined
console.log(test)
