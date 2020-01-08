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
const without = function(source, itemsToRemove) {
  let outArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (outArray[i] === itemsToRemove[j]) {
        outArray.splice(i,1);
      }
    }
  }
  return outArray;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]) , ["hello", "world"]);
assertArraysEqual(without([1, 2, 5, 7], [2, 5]) , [1, 7]);
assertArraysEqual(without([1, 2, 5, 7], ["2", 5]) , [1, 2, 7]);