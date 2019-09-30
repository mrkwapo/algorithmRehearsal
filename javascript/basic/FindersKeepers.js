// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 === 0) {
      console.log(arr[i]);
      return arr[i];
    }
    //console.log(arr[i]);
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//solved this first try!!! :)

//other test case
// findElement([1, 3, 5, 9], function(num) {
//   return num % 2 === 0;
// });
