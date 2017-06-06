# PJS-Problems
Coding problem data for PracticeJavaScript.com

## To add to your project
```bash
npm i --save pjs-problems
```

## With ES6 template strings
```js
require('pjs-problems');
```

## To dev on it locally
```bash
git clone https://github.com/PracticeJavaScript/pjs-problems.git
cd pjs-problems && npm i
```

## Note
It reformats es6 template literals to normal nasty string concat on `git push` or `gulp es5`, for compatibility reasons. Test your problems using npm link, and the reformatting shouldn't harm the functionality, it'll just make it look super-ugg.

We'll get some test framework in there soon to allow testing the
problems outside of the client app

## Example
```js
{
  name: 'Create Array',
  time: 10,
  prompt: 'Create and return an array that contains \'apple\' and \'banana\'',
  given: `const fruits = [];\rreturn fruits;`,
  answer: `const fruits = ['apple', 'banana'];
            return fruits;`,
  tests: [
    {
      name: 'Correct output',
      test: `assert.deepEqual(output, ['apple', 'banana']) === undefined;`
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
}
```
