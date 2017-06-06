module.exports = [
  {
    name: 'Access Array by index (first)',
    time: 10,
    prompt: 'Return the first value of the Array',
    given: `const fruits = ['apple', 'banana'];\r`,
    answer: `const fruits = ['apple', 'banana'];
             return fruits[0];`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'apple') === undefined`
      },
      {
        name: 'Returns a String',
        test: 'assert.isString(output) === undefined'
      }
    ]
  },
  {
    name: 'Access Array by index (first)',
    time: 10,
    prompt: 'Return the first value of the Array',
    given: `const animals = ['chipmunk', 'chimpanzee'];
           `,
    answer: `const animals = ['chipmunk', 'chimpanzee'];
             return animals[0];`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'chipmunk') === undefined`
      },
      {
        name: 'Returns a String',
        test: 'assert.isString(output) === undefined'
      }
    ]
  },
  {
    name: 'Access Array by index (last)',
    time: 10,
    prompt: 'Return the last value of the Array',
    given: `const fruits = ['apple', 'banana', 'orange'];\r`,
    answer: `const fruits = ['apple', 'banana', 'orange'];
             return fruits[fruits.length - 1];`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'orange') === undefined;`
      },
      {
        name: 'Returns a String',
        test: `assert.isString(output) === undefined;`
      }
    ]
  },
  {
    name: 'Access Array by index (last)',
    time: 10,
    prompt: 'Return the last value of the Array',
    given: `const animals = ['dog', 'hamster', 'lion'];
           `,
    answer: `const animals = ['dog', 'hamster', 'lion'];
             return animals[animals.length - 1];`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'lion') === undefined;`
      },
      {
        name: 'Returns a String',
        test: `assert.isString(output) === undefined;`
      }
    ]
  },
  {
    name: 'Access Array by index (second)',
    time: 10,
    prompt: 'Return the second value of the Array',
    given: `const fruits = ['apple', 'banana'];\r`,
    answer: `const fruits = ['apple', 'banana'];
             return fruits[1];`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'banana') === undefined;`
      },
      {
        name: 'Returns a String',
        test: `assert.isString(output) === undefined;`
      }
    ]
  },
  {
    name: 'Access Array by index (second)',
    time: 10,
    prompt: 'Return the second value of the Array',
    given: `const animals = ['kitten', 'monkey'];
           `,
    answer: `const animals = ['kitten', 'monkey'];
             return animals[1];`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'monkey') === undefined;`
      },
      {
        name: 'Returns a String',
        test: `assert.isString(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.forEach()',
    time: 20,
    prompt: 'Iterate through the array, add an \'x\' to the end of each fruit, return the array.',
    given: `const fruits = ['apple', 'banana'];\r`,
    answer: `const fruits = ['apple', 'banana'];
             const newFruits = [];
             fruits.forEach(function(item) {
               newFruits.push(item+'x');
             });
             return newFruits;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, ['applex', 'bananax']) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 2 items',
        test: `assert.lengthOf(output, 2) === undefined;`
      }
    ]
  },
  {
    name: 'Array.forEach()',
    time: 20,
    prompt: `Iterate through the array, add a 'ty' to the end of each animal, return the array.`,
    given: `const animals = ['parrot', 'bat'];
           `,
    answer: `const animals = ['parrot', 'bat'];
             const newAnimals = [];
             animals.forEach(function(item) {
               newAnimals.push(item+'ty');
             });
             return newAnimals;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, ['parrotty', 'batty']) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 2 items',
        test: `assert.lengthOf(output, 2) === undefined;`
      }
    ]
  },
  {
    name: 'Array.push()',
    time: 10,
    prompt: `Add 'orange' to the end of the 'fruits' array and return 'fruits'.`,
    given: `const fruits = ['apple', 'banana'];\r`,
    answer: `const fruits = ['apple', 'banana'];
             fruits.push('orange');
             return fruits;`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, ['apple', 'banana', 'orange']) === undefined);`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 3 items',
        test: `assert.lengthOf(output, 3) === undefined;`
      }
    ]
  },
  {
    name: 'Array.push()',
    time: 10,
    prompt: `Add 'sloth' to the end of the 'animals' array and return 'animals'.`,
    given: `const animals = ['crow', 'ox'];\r`,
    answer: `const animals = ['crow', 'ox'];
             animals.push('sloth');
             return animals;`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, ['crow', 'ox', 'sloth']) === undefined);`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 3 items',
        test: `assert.lengthOf(output, 3) === undefined;`
      }
    ]
  },
  {
    name: 'Array.shift()',
    time: 10,
    prompt: `Remove 'apple' from the front of the 'fruits' array and return 'fruits'.`,
    given: `const fruits = ['apple', 'banana', 'orange'];\r`,
    answer: `const fruits = ['apple', 'banana', 'orange'];
             fruits.shift();
             return fruits;`,
    tests: [
      {
        name: 'Output must be correct',
        test: `assert.deepEqual(output, ['banana', 'orange']) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 2 items',
        test: `assert.lengthOf(output, 2) === undefined;`
      }
    ]
  },
  {
    name: 'Array.shift()',
    time: 10,
    prompt: `Remove 'lemur' from the front of the 'animals' array and return 'animals'.`,
    given: `const animals = ['lemur', 'crocodile', 'cat'];\r`,
    answer: `const animals = ['lemur', 'crocodile', 'cat'];
             animals.shift();
             return animals;`,
    tests: [
      {
        name: 'Output must be correct',
        test: `assert.deepEqual(output, ['crocodile', 'cat']) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 2 items',
        test: `assert.lengthOf(output, 2) === undefined;`
      }
    ]
  },
  {
    name: 'Array.unshift()',
    time: 10,
    prompt: `Add 'strawberry' to the front of the 'fruits' array and return 'fruits'.`,
    given: `const fruits = ['apple', 'banana', 'orange'];\r`,
    answer: `const fruits = ['apple', 'banana', 'orange'];
             fruits.unshift('strawberry');
             return fruits;`,
    tests: [
      {
        name: 'Output must be correct',
        test: `(assert.deepEqual(output, [
                  'strawberry',
                  'apple',
                  'banana',
                  'orange'
                ]) === undefined)`
      },
      {
        name: 'Must return an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      }
    ]
  },
  {
    name: 'Array.unshift()',
    time: 10,
    prompt: `Add 'octopus' to the front of the 'animals' array and return 'animals'.`,
    given: `const animals = ['pig', 'colt', 'antelope'];\r`,
    answer: `const animals = ['pig', 'colt', 'antelope'];
             animals.unshift('octopus');
             return animals;`,
    tests: [
      {
        name: 'Output must be correct',
        test: `(assert.deepEqual(output, [
                  'octopus',
                  'pig',
                  'colt',
                  'antelope'
                ]) === undefined)`
      },
      {
        name: 'Must return an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      }
    ]
  },
  {
    name: 'Array.indexOf()',
    time: 10,
    prompt: `Return the index of 'banana' in the Array.`,
    given: `const fruits = ['strawberry', 'banana', 'mango'];\r`,
    answer: `const fruits = ['strawberry', 'banana', 'mango'];
             const ind = fruits.indexOf('banana');
             return ind;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 1) === undefined;`
      },
      {
        name: 'Returns a Number',
        test: `assert.isNumber(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.indexOf()',
    time: 10,
    prompt: `Return the index of 'fox' in the Array.`,
    given: `const animals = ['kangaroo', 'fox', 'bison'];\r`,
    answer: `const animals = ['kangaroo', 'fox', 'bison'];
             const ind = animals.indexOf('fox');
             return ind;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 1) === undefined;`
      },
      {
        name: 'Returns a Number',
        test: `assert.isNumber(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.concat()',
    time: 10,
    prompt: `Merge the two arrays using Array's 'concat()' method. Return the resulting array.`,
    given: `const fruits = ['strawberry', 'banana'];\rconst otherFruits = ['pear','peach'];\r`,
    answer: `const fruits = ['strawberry', 'banana'];
            const otherFruits = ['pear','peach'];
            const allTheFruits = fruits.concat(otherFruits);
            return allTheFruits;\r`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, [
                  'strawberry',
                  'banana',
                  'pear',
                  'peach'
                ]) === undefined
              );`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      }
    ]
  },
  {
    name: 'Array.concat()',
    time: 10,
    prompt: `Merge the two arrays using Array's 'concat()' method. Return the resulting array.`,
    given: `const adjectives = ['giant', 'chunky'];
            const verbs = ['turn','whisper'];
            `,
    answer: `const adjectives = ['giant', 'chunky'];
             const verbs = ['turn','whisper'];
             const words = adjectives.concat(verbs);
             return words;`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, [
                  'giant',
                  'chunky',
                  'turn',
                  'whisper'
                ]) === undefined
              );`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      }
    ]
  },
  {
    name: 'Array.join()',
    time: 10,
    prompt: `Mix the two flavors with a '-' using Array's 'join' method. Return the resulting hybrid flavor.`,
    given: `const fruits = ['strawberry', 'banana'];\r`,
    answer: `const fruits = ['strawberry', 'banana'];
             const hybrid = fruits.join('-');
             return hybrid;\r`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'strawberry-banana') === undefined;`
      },
      {
        name: 'Returns a String',
        test: `assert.isString(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.join()',
    time: 10,
    prompt: `Mix the two animals with a '-' using Array's 'join' method. Return the resulting hybrid animal.`,
    given: `const animals = ['alligator', 'deer'];\r`,
    answer: `const animals = ['alligator', 'deer'];
             const hybrid = animals.join('-');
             return hybrid;\r`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 'alligator-deer') === undefined;`
      },
      {
        name: 'Returns a String',
        test: `assert.isString(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.slice()',
    time: 20,
    prompt: `Return just the citrus fruits from the 'fruits' array using 'Array.slice()'`,
    given: `const fruits = ['strawberry', 'orange', 'lemon', 'banana'];\r`,
    answer: `const fruits = ['strawberry', 'orange', 'lemon', 'banana'];
             const citrus = fruits.slice(1, 3);
             return citrus;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, ['orange', 'lemon']) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 2 items',
        test: `assert.lengthOf(output, 2) === undefined;`
      }
    ]
  },
  {
    name: 'Array.slice()',
    time: 20,
    prompt: `Return just the birds from the 'animals' array using 'Array.slice()'`,
    given: `const animals = ['hyena', 'koala', 'parrot', 'canary'];
           `,
    answer: `const animals = ['hyena', 'koala', 'parrot', 'canary'];
             const birds = animals.slice(2, 4);
             return birds;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, ['parrot', 'canary']) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 2 items',
        test: `assert.lengthOf(output, 2) === undefined;`
      }
    ]
  },
  {
    name: 'Array.reverse()',
    time: 10,
    prompt: `Reverse the order of the 'fruit' array using 'Array.reverse()'`,
    given: `const fruits = ['strawberry', 'orange', 'lemon', 'banana'];\r`,
    answer: `const fruits = ['strawberry', 'orange', 'lemon', 'banana'];
             const stiurf = fruits.reverse();
             return stiurf;`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, [
                  'banana',
                  'lemon',
                  'orange',
                  'strawberry'
                ]) === undefined);`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      },
      {
        name: `First item is 'banana'`,
        test: `assert.deepEqual(output[0], 'banana') === undefined;`
      }
    ]
  },
  {
    name: 'Array.reverse()',
    time: 10,
    prompt: `Reverse the order of the 'animals' array using 'Array.reverse()'`,
    given: `const animals = ['mongoose', 'warthog', 'elk', 'baboon'];\r`,
    answer: `const animals = ['mongoose', 'warthog', 'elk', 'baboon'];
             return animals.reverse();`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, [
                  'baboon',
                  'elk',
                  'warthog',
                  'mongoose'
                ]) === undefined);`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      },
      {
        name: `First item is 'baboon'`,
        test: `assert.deepEqual(output[0], 'baboon') === undefined;`
      }
    ]
  },
  {
    name: 'Array.sort()',
    time: 10,
    prompt: `Return the 'fruits' Array after sorting them using 'Array.sort()'.`,
    given: `const fruits = ['strawberry', 'orange', 'lemon', 'banana'];\r`,
    answer: `const fruits = ['strawberry', 'orange', 'lemon', 'banana'];
             const orderlyFruit = fruits.sort();
             return orderlyFruit;`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, [
                  'banana',
                  'lemon',
                  'orange',
                  'strawberry'
                ]) === undefined);`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      },
      {
        name: `First item is 'banana'`,
        test: `assert.deepEqual(output[0], 'banana') === undefined;`
      }
    ]
  },
  {
    name: 'Array.sort()',
    time: 10,
    prompt: `Return the 'animals' Array after sorting them using 'Array.sort()'.`,
    given: `const animals = ['pig', 'duck', 'sheep', 'cow'];\r`,
    answer: `const animals = ['pig', 'duck', 'sheep', 'cow'];
             return animals.sort();`,
    tests: [
      {
        name: 'Correct output',
        test: `(assert.deepEqual(output, [
                  'cow',
                  'duck',
                  'pig',
                  'sheep'
                ]) === undefined);`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      },
      {
        name: `First item is 'cow'`,
        test: `assert.deepEqual(output[0], 'cow') === undefined;`
      }
    ]
  },
  {
    name: 'Array.lastIndexOf()',
    time: 10,
    prompt: `Return the index of the last 'peach' instance in the 'fruit' array using 'Array.lastIndexOf()'`,
    given: `const fruits = ['peach', 'orange', 'lemon', 'peach'];\r`,
    answer: `const fruits = ['peach', 'orange', 'lemon', 'peach'];
             const wheresTheLastPeach = fruits.lastIndexOf('peach');
             return wheresTheLastPeach;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 3) === undefined;`
      },
      {
        name: 'Returns a Number',
        test: `assert.isNumber(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.lastIndexOf()',
    time: 10,
    prompt: `Return the index of the last 'lynx' instance in the 'animals' array using 'Array.lastIndexOf()'`,
    given: `const animals = ['lynx', 'rabbit', 'lynx', 'wombat'];\r`,
    answer: `const animals = ['lynx', 'rabbit', 'lynx', 'wombat'];
             return animals.lastIndexOf('lynx');`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 2) === undefined;`
      },
      {
        name: 'Returns a Number',
        test: `assert.isNumber(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.filter()',
    time: 10,
    prompt: `Return an array of the numbers greater than 5 in 'numbers' using 'Array.filter()'`,
    given: `const numbers = [1, 1, 2, 3, 5, 8, 13, 21];\r`,
    answer: `const numbers = [1, 1, 2, 3, 5, 8, 13, 21];
             const overFive = numbers.filter(num => num > 5);
             return overFive;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, [8, 13, 21]) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 3 items',
        test: `assert.lengthOf(output, 3) === undefined;`
      },
      {
        name: `First item is 8`,
        test: `assert.deepEqual(output[0], 8) === undefined;`
      }
    ]
  },
  {
    name: 'Array.filter()',
    time: 10,
    prompt: `Return an array of the numbers less than 12 or greater than 20 in 'numbers' using 'Array.filter()'`,
    given: `const numbers = [12, 10, 20, 3, 15, 8, 130, 25];
           `,
    answer: `const numbers = [12, 10, 20, 3, 15, 8, 130, 25];
             return numbers.filter(num => (num < 12 || num > 20));`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, [ 10, 3, 8, 130, 25 ]) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 3 items',
        test: `assert.lengthOf(output, 5) === undefined;`
      },
      {
        name: `First item is 8`,
        test: `assert.deepEqual(output[0], 10) === undefined;`
      }
    ]
  },
  {
    name: 'Array.map()',
    time: 10,
    prompt: `Return an array of 'numbers' array's square roots, using 'Array.map()' and 'Math.sqrt()'`,
    given: `const numbers = [25, 121, 169];\r`,
    answer: `const numbers = [25, 121, 169];
             const roots = numbers.map(num => Math.sqrt(num));
             return roots;`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, [5, 11, 13]) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 3 items',
        test: `assert.lengthOf(output, 3) === undefined;`
      },
      {
        name: `First item is 5`,
        test: `assert.deepEqual(output[0], 5) === undefined;`
      },
      {
        name: `Last item is 13`,
        test: `assert.deepEqual(output[output.length - 1], 13) === undefined;`
      }
    ]
  },
  {
    name: 'Array.map()',
    time: 10,
    prompt: `Return an array of 'numbers' array's numbers squared using 'Array.map()'`,
    given: `const numbers = [8, 21, 32, 11];
           `,
    answer: `const numbers = [8, 21, 32, 11];
             return numbers.map(num => num * num));`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, [64, 441, 1024, 121]) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },
      {
        name: 'Array has 4 items',
        test: `assert.lengthOf(output, 4) === undefined;`
      },
      {
        name: `First item is 64`,
        test: `assert.deepEqual(output[0], 64) === undefined;`
      },
      {
        name: `Last item is 121`,
        test: `assert.deepEqual(output[output.length - 1], 121) === undefined;`
      }
    ]
  },
  {
    name: 'Array.every()',
    time: 10,
    prompt: `Return object that returns whether each array contains all even numbers using Array.every().`,
    given: `const evenNumbers = [2, 4, 6, 8];
            const someOddNumbers = [2, 5, 6, 8];
            function isEven(num) {

            }
            return {
              evenNumbers: evenNumbers.,
              someOddNumbers: someOddNumbers.
            };`,
    answer: `const evenNumbers = [2, 4, 6, 8];
             const someOddNumbers = [2, 5, 6, 8];
             function isEven(num) {
               return num % 2 === 0
             }
             return {
               evenNumbers: evenNumbers.every(isEven),
               someOddNumbers: someOddNumbers.every(isEven)
             };`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, {
            evenNumbers: true,
            someOddNumbers: false
          }) === undefined;`
      },
      {
        name: 'Returns an Object',
        test: `assert.isObject(output) === undefined;`
      },
      {
        name: 'Object has 2 items',
        test: `assert.lengthOf(Object.keys(output), 2) === undefined;`
      },
      {
        name: `First value is true`,
        test: `assert.isTrue(output.evenNumbers) === undefined;`
      },
      {
        name: `Second value is false`,
        test: `assert.isFalse(output.someOddNumbers) === undefined;`
      }
    ]
  },
  {
    name: 'Array.some()',
    time: 10,
    prompt: `Return 'Object' that returns whether each array contains some odd numbers using 'Array.some()'.`,
    given: `const evenNumbers = [2, 4, 6, 8];
            const someOddNumbers = [2, 4, 7, 8];
            function isOdd(num) {

            }
            return {
              evenNumbers: evenNumbers.,
              someOddNumbers: someOddNumbers.
            };`,
    answer: `const evenNumbers = [1, 3, 5, 7];
             const someOddNumbers = [1, 3, 6, 7];
             function isOdd(num) {
               return num % 2 !== 0;
             }
             return {
               evenNumbers: evenNumbers.some(isOdd),
               someOddNumbers: someOddNumbers.some(isOdd)
             };`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, {
            evenNumbers: false,
            someOddNumbers: true
          }) === undefined;`
      },
      {
        name: 'Returns an Object',
        test: `assert.isObject(output) === undefined;`
      },
      {
        name: 'Object has 2 items',
        test: `assert.lengthOf(Object.keys(output), 2) === undefined;`
      },
      {
        name: `First value is false`,
        test: `assert.isFalse(output.evenNumbers) === undefined;`
      },
      {
        name: `Second value is true`,
        test: `assert.isTrue(output.someOddNumbers) === undefined;`
      }
    ]
  },
  {
    name: 'Array.reduce()',
    time: 10,
    prompt: `Return the sum of the values in the 'numbers' array using 'Array.reduce()'`,
    given: `const numbers = [34, 12, 47, 112];
           `,
    answer: `const numbers = [34, 12, 47, 112];
             return numbers.reduce((accumulator, currentValue) => {
               return accumulator + currentValue;
             } 0);`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 205) === undefined;`
      },
      {
        name: 'Returns a Number',
        test: `assert.isNumber(output) === undefined;`
      }
    ]
  },
  {
    name: 'Array.reduce() and Array.concat()',
    time: 40,
    prompt: `Return a flattened array using 'Array.reduce() and Array.concat()'`,
    given: `const numbers = [[51, 2], [23, 5, 6], 78];
           `,
    answer: `const numbers = [[51, 2], [23, 5, 6], 78];
             const flatten = arr => arr.reduce(
               (acc, val) => acc.concat(
                 Array.isArray(val) ? flatten(val) : val
               ),
               []
             );
             return flatten(numbers)`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, [ 51, 2, 23, 5, 6, 78 ]) === undefined;`
      },
      {
        name: 'Returns an Array',
        test: `assert.isArray(output) === undefined;`
      },{
        name: 'Array has 6 items',
        test: `assert.lengthOf(output, 6) === undefined;`
      },
      {
        name: `First item is 51`,
        test: `assert.deepEqual(output[0], 51) === undefined;`
      },
      {
        name: `Last item is 78`,
        test: `assert.deepEqual(output[output.length - 1], 78) === undefined;`
      }
    ]
  },
  {
    name: 'Array.reduce() and Math.max()',
    time: 40,
    prompt: `Return the highest number in the array using Array.reduce() and Math.max()'`,
    given: `const numbers = [4, 12, 3, 15, 7];
           `,
    answer: `const numbers = [4, 12, 3, 15, 7];
             return numbers.reduce((max, current) => Math.max( max, current ));`,
    tests: [
      {
        name: 'Correct output',
        test: `assert.deepEqual(output, 15) === undefined;`
      },
      {
        name: 'Returns a Number',
        test: `assert.isNumber(output) === undefined;`
      }
    ]
  },
  // Next problems to create:
  // reduceRight
  // splice 1, 2 items, shallow copy array
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
  // 
];
