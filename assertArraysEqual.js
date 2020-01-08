const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i <= firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: "${actual}" !== "${expected}"`);
  } else
    console.log(`😀 😀 😀 Assertion Passed: "${actual}" === "${expected}"`);
};

assertArraysEqual([1,2,3] , [1,2,3]);
assertArraysEqual([1,2,3] , [1,2,'3']);
assertArraysEqual([1,2,3] , [1,2,3,5]);
assertArraysEqual([1,2,3] , [1,5,3]);
assertArraysEqual([1,2,'3'] , [1,2,'3']);