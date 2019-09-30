//Basic Algorithm Scripting: Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
var newArr = [];
while(arr.length){
newArr.push(arr.splice(0,size));
//console.log(arr.splice(0,size));
//console.log(newArr.push(arr.splice(0,size)))
}
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

//example I found on stackoverflow
// var a = YOUR_ARRAY;
// while(a.length) {
//     console.log(a.splice(0,10));
// }
