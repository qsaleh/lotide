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

module.exports = middle;