// default
const normal = {
  initial: require('./problems/initial'),
  arrays: require('./problems/arrays')
};

// es5
const es5 = {
  initialES5: require('./es5/problems/initial'),
  arraysES5: require('./es5/problems/arrays')
};

module.exports = {
  default: normal,
  es5: es5
};
