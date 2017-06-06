'use strict';

module.exports = [{
  name: 'Create Array',
  time: 10,
  prompt: 'Create and return an array that contains \'apple\' and \'banana\'',
  given: "const fruits = [];\rreturn fruits;\n",
  answer: "const fruits = ['apple', 'banana'];\n" / "return fruits;",
  tests: [{
    name: 'Correct output',
    test: "assert.deepEqual(output, ['apple', 'banana']) === undefined;"
  }, {
    name: 'Returns an Array',
    test: "assert.isArray(output) === undefined;"
  }, {
    name: 'Array has 2 items',
    test: "assert.lengthOf(output, 2) === undefined;"
  }]
}];