//Basic Algorithm Scripting: Where do I Belong
//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).

//Likewise, getIndexToIns([20,3,5], 19)should return 2because once the array has been sorted it will look like [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1).

function getIndexToIns(arr, num) {
var array = []

array.push( num);
console.log("This is the array with just num: "+ array);
console.log("This is the data type: "+typeof array);

for(var i = 0; i < arr.length; i++){
  console.log("This is the " + i + "th index in the arr array: "+ arr[i]);
  array.push(arr[i]);
 
}

console.log("This is the unsorted array with all the numbers: "+ array);
array.sort(function(a, b){return a - b})
console.log("This is the sorted array with all the numbers: "+ array);

//console.log(array.sort());
console.log("This is the index of num after the array has been sorted: "+ array.indexOf(num));
  return array.indexOf(num); 
}

//getIndexToIns([40, 60], 50);
getIndexToIns([2, 5, 10], 15);
