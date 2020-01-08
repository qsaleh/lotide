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
const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    middleArray[0] = array[middleIndex];
  } else if (array.length % 2 === 0) {
    middleArray[0] = array[middleIndex - 1];
    middleArray[1] = array[middleIndex];
  }
  return middleArray;
};

assertArraysEqual(middle([1]) , []);
assertArraysEqual(middle([1, 2]) , []);
assertArraysEqual(middle([1, 2, 3]) , [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]);
assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]);
