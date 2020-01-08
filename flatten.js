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

const flatten = function(arrayToFlatten){
  let outputArray = [];
  let outputString = arrayToFlatten.toString();
  outputArray = outputString.split(', ');
    for ( let i of outputArray){
      outputArray[i] = Number(outputArray[i]);
    }
    console.log(Array.isArray(outputArray));
  return outputArray;

}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);