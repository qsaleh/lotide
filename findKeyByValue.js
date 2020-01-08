const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: "${actual}" !== "${expected}"`);
  } else
    console.log(`😀 😀 😀 Assertion Passed: "${actual}" === "${expected}"`);
};

const findKeyByValue = function(objectInput, valueInput) {
  const keysArr = Object.keys(objectInput);
  const valuesArr = Object.values(objectInput);
  let output = undefined;

  for (let index = 0; index < valuesArr.length; index++) {
    if (valueInput === valuesArr[index]) {
      output = keysArr[index];
    }
  }
  return output;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);