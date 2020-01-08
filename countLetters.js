const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: "${actual}" !== "${expected}"`);
  } else
    console.log(`😀 😀 😀 Assertion Passed: "${actual}" === "${expected}"`);
};

const countLetters = function(inputSentence){
  const noSpaces = inputSentence.split(' ').join('');
//create empty object
const outputList = {};
//for each letter of the sentence
for (let letter of noSpaces){
  //if letter exists in object, find letter and add 1
  if (outputList[letter] === undefined){
    outputList[letter] = 1;
  } else {
  //else create letter in list and assign it value of 1
    outputList[letter] += 1;
  }
}
 return outputList;
//return object

}

const sentence = "lighthouse in the house";
console.log(countLetters(sentence));