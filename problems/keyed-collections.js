"use strict";

module.exports = [

// Map()
// .size()
// {
//   name: 'Create Map',
//   time: 10,
//   prompt: `Map isn't like array. It uses 'size' instead of 'length'. Return the length of the 'players' Map.`,
//   given: `const players = new Map();
//           players.set('Steve',{});
//           players.set('Geoff',{});
//           return players`,
//   answer: `const players = new Map();
//           players.set('Steve',{});
//           players.set('Geoff',{});
//           return players.size`,
//   tests: [{
//     name: 'Correct output',
//     test: 'assert.equal(output, 2, "Not the expected value") === undefined;'
//   }, {
//     name: 'Returns a number',
//     test: 'assert.isNumber(output, "Should return a type number") === undefined;'
//   }]
// },
// // .clear()
// {
//   name: 'Empty the Map',
//   time: 10,
//   prompt: `Empty the 'players' Map using '.clear()'`,
//   given: `const players = new Map();
//           players.set('Steve', true);
//           players.set('Geoff', true);

//           return players;`,
//   answer: `const players = new Map();
//            players.set('Steve', true);
//            players.set('Geoff', true);
//            players.clear();
//            return players;`,
//   tests: [{
//     name: 'Returns a Map',
//     test: 'assert.equal(output instanceof Map, true, "Should return a type Map") === undefined;'
//   }, {
//     name: 'Map is empty',
//     test: 'assert.equal(output.size, 0, "Map should be empty") === undefined;'
//   }]
// },
{
  name: 'Map.delete()',
  time: 10,
  prompt: `Remove 'Steve' from 'players' using '.delete()'`,
  given: `const players = new Map();
          players.set('Steve', 'foo');
          players.set('Geoff', 'foo'});

          return players;`,
  answer: `const players = new Map();
           players.set('Steve', 'foo');
           players.set('Geoff', 'foo');
           players.delete('Steve');
           return players;`,
  tests: [{
    name: 'Returns a Map',
    test: 'assert.equal(output instanceof Map, true, "Should return a type Map") === undefined;'
  }, {
    name: 'Map has one player',
    test: 'assert.equal(output.size, 1, "Map.size should be 1") === undefined;'
  }, {
    name: 'Map has player Geoff',
    test: `assert.equal(output.has('Geoff'), true, "Map should still have Geoff") === undefined;`
  }]
}
// .delete()
// .entries()
// .forEach()
// .get()
// .has()
// .keys()
// .set()
// .values()
// iterating with for..of
// convert keys to array?


// WeakMap()


// Set()
// .length // 0
// .size()
// .add()
// .clear()
// .delete()
// .entries()
// .forEach()
// .has()
// .keys()
// .values()
// store a de-duped list of names using Set
// transform an array into a set
// superset
// union
// intersection
// difference

// WeakSet()

];
