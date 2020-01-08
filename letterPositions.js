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
const letterPositions = function(sentence){
//create empty object
const outputList = {};
//for each letter of the sentence
let index = 0;
for (let letter of sentence){
  
  if (letter !== ' ' && outputList[letter] === undefined){
    let newArr = [index];
    outputList[letter] = newArr;
  } else if (letter !== ' '){
    outputList[letter].push(index);
  }
  index++;
}
 return outputList;

}

const sentence = "lighthouse in the house";
console.log(letterPositions(sentence));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
