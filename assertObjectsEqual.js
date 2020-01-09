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

const eqObjects = function(object1, object2) {
  
  let tfvalue = undefined;              // t/f value to be returned
  const keys1 = Object.keys(object1);   // keys of object1
  const keys2 = Object.keys(object2);   // keys of object2

  if (keys1.length !== keys2.length) {
    return tfvalue = false;             //if length of keys1 !== length of keys2, return false
  }

  for (let key of keys1) {               //start loop1 -- cycles through all keys in key1

    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {  //if values are arrays, execute code 
      if (!eqArrays(object1[key], object2[key])) {                      //in this statement
        tfvalue = false;
        return tfvalue;
      } else tfvalue = true;
    } else if (object1[key] === object2[key]) {
      tfvalue = true;                   //if value in object1 === value object1, tfvalue = true
    } else {
      tfvalue = false;                    //if value in object1 !== value in object2, tfvalue= false, endloop
      return tfvalue;
    }
    
  } //end loop1 - loop continues until it is verified that all values are true
  return tfvalue;
};

const assertObjectsEqual = function(actualObj, expectedObj){
  const inspect = require('util').inspect;
  if (!eqObjects(actualObj, expectedObj)) {
    console.log(`☠️ ☠️ ☠️ Assertion Failed: "${inspect(actualObj)}" !== "${inspect(expectedObj)}"`);
  } else
    console.log(`😀 😀 😀 Assertion Passed: "${inspect(actualObj)}" === "${inspect(expectedObj)}"`);  
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual( cd, dc );