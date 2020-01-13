const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 'dog'], [1, 2, 'dog']), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), false);
  