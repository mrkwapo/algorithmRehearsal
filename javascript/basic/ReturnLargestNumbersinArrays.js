// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  //create an empty array for the largest numbers
  var largest = [];
  //access all the numbers
  //sort each array
  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i].sort(function(a, b) {
      return a - b;
    });
    //console.log(sorted)
    //had to turn the sliced number into an integer type
    largest.push(parseInt(sorted.slice(-1)));
  }
  console.log('The largest numbers from each array are: ' + largest);
  return largest;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);


// I solved this using math.max and the spread method. Will update on GitHub soon
