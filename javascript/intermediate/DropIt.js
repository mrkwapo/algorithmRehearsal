// Intermediate Algorithm Scripting: Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function funcreturns truewhen the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arrshould be returned as an empty array.

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  console.log(arr);
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
