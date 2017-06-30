'use strict';

module.exports = [{
  name: 'Access Array by index (first)',
  time: 10,
  label: 'es5',
  prompt: 'Return the first value of the Array',
  given: 'const fruits = [\'apple\', \'banana\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\'];\n             return fruits[0];',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'apple\') === undefined'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined'
  }]
}, {
  name: 'Access Array by index (first)',
  time: 10,
  label: 'es5',
  prompt: 'Return the first value of the Array',
  given: 'const animals = [\'chipmunk\', \'chimpanzee\'];\n           ',
  answer: 'const animals = [\'chipmunk\', \'chimpanzee\'];\n             return animals[0];',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'chipmunk\') === undefined'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined'
  }]
}, {
  name: 'Access Array by index (last)',
  time: 10,
  label: 'es5',
  prompt: 'Return the last value of the Array',
  given: 'const fruits = [\'apple\', \'banana\', \'orange\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\', \'orange\'];\n             return fruits[fruits.length - 1];',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'orange\') === undefined;'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined;'
  }]
}, {
  name: 'Access Array by index (last)',
  time: 10,
  label: 'es5',
  prompt: 'Return the last value of the Array',
  given: 'const animals = [\'dog\', \'hamster\', \'lion\'];\n           ',
  answer: 'const animals = [\'dog\', \'hamster\', \'lion\'];\n             return animals[animals.length - 1];',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'lion\') === undefined;'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined;'
  }]
}, {
  name: 'Access Array by index (second)',
  time: 10,
  label: 'es5',
  prompt: 'Return the second value of the Array',
  given: 'const fruits = [\'apple\', \'banana\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\'];\n             return fruits[1];',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'banana\') === undefined;'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined;'
  }]
}, {
  name: 'Access Array by index (second)',
  time: 10,
  label: 'es5',
  prompt: 'Return the second value of the Array',
  given: 'const animals = [\'kitten\', \'monkey\'];\n           ',
  answer: 'const animals = [\'kitten\', \'monkey\'];\n             return animals[1];',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'monkey\') === undefined;'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined;'
  }]
}, {
  name: 'Array.forEach()',
  time: 20,
  label: 'es5',
  prompt: 'Iterate through the array, add an \'x\' to the end of each fruit, return the array.',
  given: 'const fruits = [\'apple\', \'banana\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\'];\n             const newFruits = [];\n             fruits.forEach(function(item) {\n               newFruits.push(item+\'x\');\n             });\n             return newFruits;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'applex\', \'bananax\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }]
}, {
  name: 'Array.forEach()',
  time: 20,
  label: 'es5',
  prompt: 'Iterate through the array, add a \'ty\' to the end of each animal, return the array.',
  given: 'const animals = [\'parrot\', \'bat\'];\n           ',
  answer: 'const animals = [\'parrot\', \'bat\'];\n             const newAnimals = [];\n             animals.forEach(function(item) {\n               newAnimals.push(item+\'ty\');\n             });\n             return newAnimals;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'parrotty\', \'batty\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }]
}, {
  name: 'Array.push()',
  time: 10,
  label: 'es5',
  prompt: 'Add \'orange\' to the end of the \'fruits\' array and return \'fruits\'.',
  given: 'const fruits = [\'apple\', \'banana\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\'];\n             fruits.push(\'orange\');\n             return fruits;',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\'apple\', \'banana\', \'orange\']) === undefined);'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 3 items',
    test: 'assert.lengthOf(output, 3) === undefined;'
  }]
}, {
  name: 'Array.push()',
  time: 10,
  label: 'es5',
  prompt: 'Add \'sloth\' to the end of the \'animals\' array and return \'animals\'.',
  given: 'const animals = [\'crow\', \'ox\'];\r',
  answer: 'const animals = [\'crow\', \'ox\'];\n             animals.push(\'sloth\');\n             return animals;',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\'crow\', \'ox\', \'sloth\']) === undefined);'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 3 items',
    test: 'assert.lengthOf(output, 3) === undefined;'
  }]
}, {
  name: 'Array.shift()',
  time: 10,
  label: 'es5',
  prompt: 'Remove \'apple\' from the front of the \'fruits\' array and return \'fruits\'.',
  given: 'const fruits = [\'apple\', \'banana\', \'orange\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\', \'orange\'];\n             fruits.shift();\n             return fruits;',
  tests: [{
    name: 'Output must be correct',
    test: 'assert.deepEqual(output, [\'banana\', \'orange\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }]
}, {
  name: 'Array.shift()',
  time: 10,
  label: 'es5',
  prompt: 'Remove \'lemur\' from the front of the \'animals\' array and return \'animals\'.',
  given: 'const animals = [\'lemur\', \'crocodile\', \'cat\'];\r',
  answer: 'const animals = [\'lemur\', \'crocodile\', \'cat\'];\n             animals.shift();\n             return animals;',
  tests: [{
    name: 'Output must be correct',
    test: 'assert.deepEqual(output, [\'crocodile\', \'cat\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }]
}, {
  name: 'Array.unshift()',
  time: 10,
  label: 'es5',
  prompt: 'Add \'strawberry\' to the front of the \'fruits\' array and return \'fruits\'.',
  given: 'const fruits = [\'apple\', \'banana\', \'orange\'];\r',
  answer: 'const fruits = [\'apple\', \'banana\', \'orange\'];\n             fruits.unshift(\'strawberry\');\n             return fruits;',
  tests: [{
    name: 'Output must be correct',
    test: '(assert.deepEqual(output, [\n                  \'strawberry\',\n                  \'apple\',\n                  \'banana\',\n                  \'orange\'\n                ]) === undefined)'
  }, {
    name: 'Must return an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }]
}, {
  name: 'Array.unshift()',
  time: 10,
  label: 'es5',
  prompt: 'Add \'octopus\' to the front of the \'animals\' array and return \'animals\'.',
  given: 'const animals = [\'pig\', \'colt\', \'antelope\'];\r',
  answer: 'const animals = [\'pig\', \'colt\', \'antelope\'];\n             animals.unshift(\'octopus\');\n             return animals;',
  tests: [{
    name: 'Output must be correct',
    test: '(assert.deepEqual(output, [\n                  \'octopus\',\n                  \'pig\',\n                  \'colt\',\n                  \'antelope\'\n                ]) === undefined)'
  }, {
    name: 'Must return an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }]
}, {
  name: 'Array.indexOf()',
  time: 10,
  label: 'es5',
  prompt: 'Return the index of \'banana\' in the Array.',
  given: 'const fruits = [\'strawberry\', \'banana\', \'mango\'];\r',
  answer: 'const fruits = [\'strawberry\', \'banana\', \'mango\'];\n             const ind = fruits.indexOf(\'banana\');\n             return ind;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, 1) === undefined;'
  }, {
    name: 'Returns a Number',
    test: 'assert.isNumber(output) === undefined;'
  }]
}, {
  name: 'Array.indexOf()',
  time: 10,
  label: 'es5',
  prompt: 'Return the index of \'fox\' in the Array.',
  given: 'const animals = [\'kangaroo\', \'fox\', \'bison\'];\r',
  answer: 'const animals = [\'kangaroo\', \'fox\', \'bison\'];\n             const ind = animals.indexOf(\'fox\');\n             return ind;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, 1) === undefined;'
  }, {
    name: 'Returns a Number',
    test: 'assert.isNumber(output) === undefined;'
  }]
}, {
  name: 'Array.concat()',
  time: 10,
  label: 'es5',
  prompt: 'Merge the two arrays using Array\'s \'concat()\' method. Return the resulting array.',
  given: 'const fruits = [\'strawberry\', \'banana\'];\rconst otherFruits = [\'pear\',\'peach\'];\r',
  answer: 'const fruits = [\'strawberry\', \'banana\'];\n            const otherFruits = [\'pear\',\'peach\'];\n            const allTheFruits = fruits.concat(otherFruits);\n            return allTheFruits;\r',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\n                  \'strawberry\',\n                  \'banana\',\n                  \'pear\',\n                  \'peach\'\n                ]) === undefined\n              );'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }]
}, {
  name: 'Array.concat()',
  time: 10,
  label: 'es6',
  prompt: 'Merge the two arrays using Array\'s \'concat()\' method. Return the resulting array.',
  given: 'const adjectives = [\'giant\', \'chunky\'];\n            const verbs = [\'turn\',\'whisper\'];\n            ',
  answer: 'const adjectives = [\'giant\', \'chunky\'];\n             const verbs = [\'turn\',\'whisper\'];\n             const words = adjectives.concat(verbs);\n             return words;',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\n                  \'giant\',\n                  \'chunky\',\n                  \'turn\',\n                  \'whisper\'\n                ]) === undefined\n              );'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }]
}, {
  name: 'Array.join()',
  time: 10,
  label: 'es5',
  prompt: 'Mix the two flavors with a \'-\' using Array\'s \'join\' method. Return the resulting hybrid flavor.',
  given: 'const fruits = [\'strawberry\', \'banana\'];\r',
  answer: 'const fruits = [\'strawberry\', \'banana\'];\n             const hybrid = fruits.join(\'-\');\n             return hybrid;\r',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'strawberry-banana\') === undefined;'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined;'
  }]
}, {
  name: 'Array.join()',
  time: 10,
  label: 'es5',
  prompt: 'Mix the two animals with a \'-\' using Array\'s \'join\' method. Return the resulting hybrid animal.',
  given: 'const animals = [\'alligator\', \'deer\'];\r',
  answer: 'const animals = [\'alligator\', \'deer\'];\n             const hybrid = animals.join(\'-\');\n             return hybrid;\r',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, \'alligator-deer\') === undefined;'
  }, {
    name: 'Returns a String',
    test: 'assert.isString(output) === undefined;'
  }]
}, {
  name: 'Array.slice()',
  time: 20,
  label: 'es5',
  prompt: 'Return just the citrus fruits from the \'fruits\' array using \'Array.slice()\'',
  given: 'const fruits = [\'strawberry\', \'orange\', \'lemon\', \'banana\'];\r',
  answer: 'const fruits = [\'strawberry\', \'orange\', \'lemon\', \'banana\'];\n             const citrus = fruits.slice(1, 3);\n             return citrus;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'orange\', \'lemon\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }]
}, {
  name: 'Array.slice()',
  time: 20,
  label: 'es5',
  prompt: 'Return just the birds from the \'animals\' array using \'Array.slice()\'',
  given: 'const animals = [\'hyena\', \'koala\', \'parrot\', \'canary\'];\n           ',
  answer: 'const animals = [\'hyena\', \'koala\', \'parrot\', \'canary\'];\n             const birds = animals.slice(2, 4);\n             return birds;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'parrot\', \'canary\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }]
}, {
  name: 'Array.reverse()',
  time: 10,
  label: 'es5',
  prompt: 'Reverse the order of the \'fruit\' array using \'Array.reverse()\'',
  given: 'const fruits = [\'strawberry\', \'orange\', \'lemon\', \'banana\'];\r',
  answer: 'const fruits = [\'strawberry\', \'orange\', \'lemon\', \'banana\'];\n             const stiurf = fruits.reverse();\n             return stiurf;',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\n                  \'banana\',\n                  \'lemon\',\n                  \'orange\',\n                  \'strawberry\'\n                ]) === undefined);'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'banana\'',
    test: 'assert.deepEqual(output[0], \'banana\') === undefined;'
  }]
}, {
  name: 'Array.reverse()',
  time: 10,
  label: 'es5',
  prompt: 'Reverse the order of the \'animals\' array using \'Array.reverse()\'',
  given: 'const animals = [\'mongoose\', \'warthog\', \'elk\', \'baboon\'];\r',
  answer: 'const animals = [\'mongoose\', \'warthog\', \'elk\', \'baboon\'];\n             return animals.reverse();',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\n                  \'baboon\',\n                  \'elk\',\n                  \'warthog\',\n                  \'mongoose\'\n                ]) === undefined);'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'baboon\'',
    test: 'assert.deepEqual(output[0], \'baboon\') === undefined;'
  }]
}, {
  name: 'Array.sort()',
  time: 10,
  label: 'es5',
  prompt: 'Return the \'fruits\' Array after sorting them using \'Array.sort()\'.',
  given: 'const fruits = [\'strawberry\', \'orange\', \'lemon\', \'banana\'];\r',
  answer: 'const fruits = [\'strawberry\', \'orange\', \'lemon\', \'banana\'];\n             const orderlyFruit = fruits.sort();\n             return orderlyFruit;',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\n                  \'banana\',\n                  \'lemon\',\n                  \'orange\',\n                  \'strawberry\'\n                ]) === undefined);'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'banana\'',
    test: 'assert.deepEqual(output[0], \'banana\') === undefined;'
  }]
}, {
  name: 'Array.sort()',
  time: 10,
  label: 'es5',
  prompt: 'Return the \'animals\' Array after sorting them using \'Array.sort()\'.',
  given: 'const animals = [\'pig\', \'duck\', \'sheep\', \'cow\'];\r',
  answer: 'const animals = [\'pig\', \'duck\', \'sheep\', \'cow\'];\n             return animals.sort();',
  tests: [{
    name: 'Correct output',
    test: '(assert.deepEqual(output, [\n                  \'cow\',\n                  \'duck\',\n                  \'pig\',\n                  \'sheep\'\n                ]) === undefined);'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'cow\'',
    test: 'assert.deepEqual(output[0], \'cow\') === undefined;'
  }]
}, {
  name: 'Array.lastIndexOf()',
  time: 10,
  label: 'es5',
  prompt: 'Return the index of the last \'peach\' instance in the \'fruit\' array using \'Array.lastIndexOf()\'',
  given: 'const fruits = [\'peach\', \'orange\', \'lemon\', \'peach\'];\r',
  answer: 'const fruits = [\'peach\', \'orange\', \'lemon\', \'peach\'];\n             const wheresTheLastPeach = fruits.lastIndexOf(\'peach\');\n             return wheresTheLastPeach;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, 3) === undefined;'
  }, {
    name: 'Returns a Number',
    test: 'assert.isNumber(output) === undefined;'
  }]
}, {
  name: 'Array.lastIndexOf()',
  time: 10,
  label: 'es5',
  prompt: 'Return the index of the last \'lynx\' instance in the \'animals\' array using \'Array.lastIndexOf()\'',
  given: 'const animals = [\'lynx\', \'rabbit\', \'lynx\', \'wombat\'];\r',
  answer: 'const animals = [\'lynx\', \'rabbit\', \'lynx\', \'wombat\'];\n             return animals.lastIndexOf(\'lynx\');',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, 2) === undefined;'
  }, {
    name: 'Returns a Number',
    test: 'assert.isNumber(output) === undefined;'
  }]
}, {
  name: 'Array.filter()',
  time: 10,
  label: 'es5',
  prompt: 'Return an array of the numbers greater than 5 in \'numbers\' using \'Array.filter()\'',
  given: 'const numbers = [1, 1, 2, 3, 5, 8, 13, 21];\r',
  answer: 'const numbers = [1, 1, 2, 3, 5, 8, 13, 21];\n             const overFive = numbers.filter(num => num > 5);\n             return overFive;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [8, 13, 21]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 3 items',
    test: 'assert.lengthOf(output, 3) === undefined;'
  }, {
    name: 'First item is 8',
    test: 'assert.deepEqual(output[0], 8) === undefined;'
  }]
}, {
  name: 'Array.filter()',
  time: 10,
  label: 'es5',
  prompt: 'Return an array of the numbers less than 12 or greater than 20 in \'numbers\' using \'Array.filter()\'',
  given: 'const numbers = [12, 10, 20, 3, 15, 8, 130, 25];\n           ',
  answer: 'const numbers = [12, 10, 20, 3, 15, 8, 130, 25];\n             return numbers.filter(num => (num < 12 || num > 20));',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [ 10, 3, 8, 130, 25 ]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 3 items',
    test: 'assert.lengthOf(output, 5) === undefined;'
  }, {
    name: 'First item is 8',
    test: 'assert.deepEqual(output[0], 10) === undefined;'
  }]
}, {
  name: 'Array.map()',
  time: 10,
  label: 'es5',
  prompt: 'Return an array of \'numbers\' array\'s square roots, using \'Array.map()\' and \'Math.sqrt()\'',
  given: 'const numbers = [25, 121, 169];\r',
  answer: 'const numbers = [25, 121, 169];\n             const roots = numbers.map(num => Math.sqrt(num));\n             return roots;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [5, 11, 13]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 3 items',
    test: 'assert.lengthOf(output, 3) === undefined;'
  }, {
    name: 'First item is 5',
    test: 'assert.deepEqual(output[0], 5) === undefined;'
  }, {
    name: 'Last item is 13',
    test: 'assert.deepEqual(output[output.length - 1], 13) === undefined;'
  }]
}, {
  name: 'Array.map()',
  time: 10,
  label: 'es5',
  prompt: 'Return an array of \'numbers\' array\'s numbers squared using \'Array.map()\'',
  given: 'const numbers = [8, 21, 32, 11];\n           ',
  answer: 'const numbers = [8, 21, 32, 11];\n             return numbers.map(num => num * num));',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [64, 441, 1024, 121]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is 64',
    test: 'assert.deepEqual(output[0], 64) === undefined;'
  }, {
    name: 'Last item is 121',
    test: 'assert.deepEqual(output[output.length - 1], 121) === undefined;'
  }]
}, {
  name: 'Array.every()',
  time: 10,
  label: 'es6',
  prompt: 'Return object that returns whether each array contains all even numbers using Array.every().',
  given: 'const evenNumbers = [2, 4, 6, 8];\n            const someOddNumbers = [2, 5, 6, 8];\n            function isEven(num) {\n\n            }\n            return {\n              evenNumbers: evenNumbers.,\n              someOddNumbers: someOddNumbers.\n            };',
  answer: 'const evenNumbers = [2, 4, 6, 8];\n             const someOddNumbers = [2, 5, 6, 8];\n             function isEven(num) {\n               return num % 2 === 0\n             }\n             return {\n               evenNumbers: evenNumbers.every(isEven),\n               someOddNumbers: someOddNumbers.every(isEven)\n             };',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, {\n            evenNumbers: true,\n            someOddNumbers: false\n          }) === undefined;'
  }, {
    name: 'Returns an Object',
    test: 'assert.isObject(output) === undefined;'
  }, {
    name: 'Object has 2 items',
    test: 'assert.lengthOf(Object.keys(output), 2) === undefined;'
  }, {
    name: 'First value is true',
    test: 'assert.isTrue(output.evenNumbers) === undefined;'
  }, {
    name: 'Second value is false',
    test: 'assert.isFalse(output.someOddNumbers) === undefined;'
  }]
}, {
  name: 'Array.some()',
  time: 10,
  label: 'es6',
  prompt: 'Return \'Object\' that returns whether each array contains some odd numbers using \'Array.some()\'.',
  given: 'const evenNumbers = [2, 4, 6, 8];\n            const someOddNumbers = [2, 4, 7, 8];\n            function isOdd(num) {\n\n            }\n            return {\n              evenNumbers: evenNumbers.,\n              someOddNumbers: someOddNumbers.\n            };',
  answer: 'const evenNumbers = [1, 3, 5, 7];\n             const someOddNumbers = [1, 3, 6, 7];\n             function isOdd(num) {\n               return num % 2 !== 0;\n             }\n             return {\n               evenNumbers: evenNumbers.some(isOdd),\n               someOddNumbers: someOddNumbers.some(isOdd)\n             };',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, {\n            evenNumbers: false,\n            someOddNumbers: true\n          }) === undefined;'
  }, {
    name: 'Returns an Object',
    test: 'assert.isObject(output) === undefined;'
  }, {
    name: 'Object has 2 items',
    test: 'assert.lengthOf(Object.keys(output), 2) === undefined;'
  }, {
    name: 'First value is false',
    test: 'assert.isFalse(output.evenNumbers) === undefined;'
  }, {
    name: 'Second value is true',
    test: 'assert.isTrue(output.someOddNumbers) === undefined;'
  }]
}, {
  name: 'Array.reduce()',
  time: 10,
  label: 'es6',
  prompt: 'Return the sum of the values in the \'numbers\' array using \'Array.reduce()\'',
  given: 'const numbers = [34, 12, 47, 112];\n           ',
  answer: 'const numbers = [34, 12, 47, 112];\n             return numbers.reduce((accumulator, currentValue) => {\n               return accumulator + currentValue;\n             } 0);',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, 205) === undefined;'
  }, {
    name: 'Returns a Number',
    test: 'assert.isNumber(output) === undefined;'
  }]
}, {
  name: 'Array.reduce() and Array.concat()',
  time: 40,
  label: 'es6',
  prompt: 'Return a flattened array using \'Array.reduce() and Array.concat()\'',
  given: 'const numbers = [[51, 2], [23, 5, 6], 78];\n           ',
  answer: 'const numbers = [[51, 2], [23, 5, 6], 78];\n             const flatten = arr => arr.reduce(\n               (acc, val) => acc.concat(\n                 Array.isArray(val) ? flatten(val) : val\n               ),\n               []\n             );\n             return flatten(numbers)',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [ 51, 2, 23, 5, 6, 78 ]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 6 items',
    test: 'assert.lengthOf(output, 6) === undefined;'
  }, {
    name: 'First item is 51',
    test: 'assert.deepEqual(output[0], 51) === undefined;'
  }, {
    name: 'Last item is 78',
    test: 'assert.deepEqual(output[output.length - 1], 78) === undefined;'
  }]
}, {
  name: 'Array.reduce() and Math.max()',
  time: 40,
  label: 'es6',
  prompt: 'Return the highest number in the array using Array.reduce() and Math.max()',
  given: 'const numbers = [4, 12, 3, 15, 7];',
  answer: 'const numbers = [4, 12, 3, 15, 7];\n           return numbers.reduce((max, current) => Math.max( max, current ));',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, 15) === undefined;'
  }, {
    name: 'Returns a Number',
    test: 'assert.isNumber(output) === undefined;'
  }]
}, {
  name: 'Array.reduceRight()',
  time: 30,
  label: 'es6',
  prompt: 'Flatten an array of arrays from right to left, using Array.reduceRight()',
  given: 'const numbers = [[0, 1], [2, 3], [4, 5]];\n          ',
  answer: 'const numbers = [[0, 1], [2, 3], [4, 5]];\n           return numbers.reduceRight((prev, curr) => prev.concat(curr));',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [4, 5, 2, 3, 0, 1]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 6 items',
    test: 'assert.lengthOf(output, 6) === undefined;'
  }, {
    name: 'First item is 4',
    test: 'assert.deepEqual(output[0], 4) === undefined;'
  }, {
    name: 'Last item is 1',
    test: 'assert.deepEqual(output[output.length - 1], 1) === undefined;'
  }]
}, {
  name: 'Array.splice() remove 0, insert 1',
  time: 30,
  label: 'es5',
  prompt: 'Splice \'bunny\' between his new friends \'dingo\' and \'panther\' using Array.splice(), then return \'animals\'',
  given: 'const animals = [\'eagle\', \'dingo\', \'panther\', \'lion\'];\n          ',
  answer: 'const animals = [\'eagle\', \'dingo\', \'panther\', \'lion\'];\n           animals.splice(2, 0, \'bunny\');\n           return animals;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'eagle\', \'dingo\', \'bunny\', \'panther\', \'lion\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 5 items',
    test: 'assert.lengthOf(output, 5) === undefined;'
  }, {
    name: 'First item is \'eagle\'',
    test: 'assert.deepEqual(output[0], \'eagle\') === undefined;'
  }, {
    name: 'Third item is \'bunny\'',
    test: 'assert.deepEqual(output[2], \'bunny\') === undefined;'
  }, {
    name: 'Last item is \'lion\'',
    test: 'assert.deepEqual(output[output.length - 1], \'lion\') === undefined;'
  }]
}, {
  name: 'Array.splice() remove 1, insert 0',
  time: 30,
  label: 'es5',
  prompt: 'Rescue \'bunny\' away from his new friends \'dingo\' and \'panther\' using Array.splice(), then return \'animals\'',
  given: 'const animals = [\'eagle\', \'dingo\', \'bunny\', \'panther\', \'lion\'];\n\n          return animals',
  answer: 'const animals = [\'eagle\', \'dingo\', \'bunny\', \'panther\', \'lion\'];\n           animals.splice(2, 1);\n           return animals;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'eagle\', \'dingo\', \'panther\', \'lion\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'eagle\'',
    test: 'assert.deepEqual(output[0], \'eagle\') === undefined;'
  }, {
    name: 'Third item is \'panther\'',
    test: 'assert.deepEqual(output[2], \'panther\') === undefined;'
  }, {
    name: 'Last item is \'lion\'',
    test: 'assert.equal(output[output.length-1], "lion") === undefined;'
  }, {
    name: 'Bunny isn\'t in array',
    test: 'assert.notInclude(output, "bunny") === undefined;'
  }]
}, {
  name: 'Array.splice() remove 2',
  time: 30,
  label: 'es5',
  prompt: 'Rescue \'gerbil\' and \'bunny\' from \'animals\' using Array.splice(), then return \'animals\'',
  given: 'const animals = ["eagle", "dingo", "bunny", "gerbil", "panther", "lion"];\n\n          return animals;',
  answer: 'const animals = ["eagle", "dingo", "bunny", "gerbil", "panther", "lion"];\n           animals.splice(2,2);\n           return animals;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'eagle\', \'dingo\', \'panther\', \'lion\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'eagle\'',
    test: 'assert.deepEqual(output[0], \'eagle\') === undefined;'
  }, {
    name: 'Third item is \'panther\'',
    test: 'assert.deepEqual(output[2], \'panther\') === undefined;'
  }, {
    name: 'Last item is \'lion\'',
    test: 'assert.deepEqual(output[output.length - 1], \'lion\') === undefined;'
  }, {
    name: '\'bunny\' isn\'t in array',
    test: 'assert.notInclude(output, "bunny") === undefined;'
  }, {
    name: '\'gerbil\' isn\'t in array',
    test: 'assert.notInclude(output, "gerbil") === undefined;'
  }]
}, {
  name: 'Array.splice() remove 2, add 2',
  time: 30,
  label: 'es5',
  prompt: 'Remove the boring \'alpaca\' and \'bunny\' from \'carnivores\' and add \'t-rex\' and \'velociraptor\' the the beginning of the array using one Array.splice(), then return \'carnivores\' so they can have an awesome carnivore-party',
  given: 'const carnivores = [ \'alpaca\', \'bunny\', \'alligator\', \'wolverine\'];\n          const dinos = [\'t-rex\', \'velociraptor\'];\n\n          return carnivores;',
  answer: 'const carnivores = [ \'alpaca\', \'bunny\', \'alligator\', \'wolverine\'];\n           const dinos = [\'t-rex\', \'velociraptor\'];\n           carnivores.splice(0, 2, ...dinos);\n           return carnivores;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, ["t-rex", "velociraptor", "alligator", "wolverine"]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'t-rex\'',
    test: 'assert.deepEqual(output[0], \'t-rex\') === undefined;'
  }, {
    name: 'Third item is \'alligator\'',
    test: 'assert.deepEqual(output[2], \'alligator\') === undefined;'
  }, {
    name: 'Last item is \'wolverine\'',
    test: 'assert.deepEqual(output[output.length - 1], \'wolverine\') === undefined;'
  }, {
    name: '\'bunny\' isn\'t in array',
    test: 'assert.notInclude(output, "bunny") === undefined;'
  }, {
    name: '\'alpaca\' isn\'t in array',
    test: 'assert.notInclude(output, "alpaca") === undefined;'
  }]
}, {
  name: 'Array.splice() remove last 2',
  time: 30,
  label: 'es5',
  prompt: 'Remove the last two items from \'countries\' using \'Array.splice()\', then return \'countries\'',
  given: 'const countries = [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\'];\n\n          return countries;',
  answer: 'const countries = [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\'];\n           countries.splice(-2);\n           return countries;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, ["Maldives", "New Zealand"]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }, {
    name: 'First item is \'Maldives\'',
    test: 'assert.deepEqual(output[0], \'Maldives\') === undefined;'
  }, {
    name: 'Last item is \'New Zealand\'',
    test: 'assert.deepEqual(output[output.length - 1], \'New Zealand\') === undefined;'
  }, {
    name: '\'Austria\' isn\'t in array',
    test: 'assert.notInclude(output, "Austria") === undefined;'
  }, {
    name: '\'Palau\' isn\'t in array',
    test: 'assert.notInclude(output, "Palau") === undefined;'
  }]
}, {
  name: 'Array.splice() remove all after index',
  time: 30,
  label: 'es5',
  prompt: 'Remove all items after index \'2\' from \'countries\' using \'Array.splice()\', then return \'countries\'',
  given: 'const countries = [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\',\'Netherlands\',\'Sweden\'];\n\n          return countries;',
  answer: 'const countries = [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\',\'Netherlands\',\'Sweden\'];\n           countries.splice(2);\n           return countries;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, ["Maldives", "New Zealand"]) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 2 items',
    test: 'assert.lengthOf(output, 2) === undefined;'
  }, {
    name: 'First item is \'Maldives\'',
    test: 'assert.deepEqual(output[0], \'Maldives\') === undefined;'
  }, {
    name: 'Last item is \'New Zealand\'',
    test: 'assert.deepEqual(output[output.length - 1], \'New Zealand\') === undefined;'
  }, {
    name: '\'Austria\' isn\'t in array',
    test: 'assert.notInclude(output, "Austria") === undefined;'
  }, {
    name: '\'Palau\' isn\'t in array',
    test: 'assert.notInclude(output, "Palau") === undefined;'
  }, {
    name: '\'Netherlands\' isn\'t in array',
    test: 'assert.notInclude(output, "Netherlands") === undefined;'
  }, {
    name: '\'Sweden\' isn\'t in array',
    test: 'assert.notInclude(output, "Sweden") === undefined;'
  }]
}, {
  name: 'Array.splice() shallow copy array',
  time: 30,
  label: 'es5',
  prompt: 'Shallow copy the \'countries\' array using \'Array.splice()\', then return the new copy',
  given: 'const countries = [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\'];\n          const clone =\n          return clone',
  answer: 'const countries = [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\'];\n           const clone = countries.splice(0);\n           return clone;',
  tests: [{
    name: 'Correct output',
    test: 'assert.deepEqual(output, [\'Maldives\',\'New Zealand\',\'Austria\',\'Palau\']) === undefined;'
  }, {
    name: 'Returns an Array',
    test: 'assert.isArray(output) === undefined;'
  }, {
    name: 'Array has 4 items',
    test: 'assert.lengthOf(output, 4) === undefined;'
  }, {
    name: 'First item is \'Maldives\'',
    test: 'assert.deepEqual(output[0], \'Maldives\') === undefined;'
  }, {
    name: 'Last item is \'Palau\'',
    test: 'assert.deepEqual(output[output.length - 1], \'Palau\') === undefined;'
  }]
}];

// Next problems to create:
// get array's length
// push several items
// decrease length to truncate array, deleting elements
// .from()
// .isArray()
// .of()
// .copyWithin()
// .fill()
// .sort() with a compare function
// .inlcludes()
// .toString()
// .entries()
// more .filter() problems
// .find()
// .findIndex()
// .keys()
// .values()
// .map and template literals to return fullnames from first, last fields in object array
// .sort() by a sub-field of objects in array, like birth years
// .reduce() to know total dollar amount of week's spending
// .sort() employees by how long they've been with the company
// .reduce() sum the number of instances of each item in a repetitive array of words