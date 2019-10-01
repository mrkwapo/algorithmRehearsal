//Intermediate Algorithm Scripting: Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

//The lowest number will not always come first.


function sumAll(arr) {
  var numbersToAdd =[];
var first = arr[0];
var second = arr[1];

//if 0 index is > than 1 index push indexes into an array 
if(first > second){
 // console.log("test");
  for(var item = second; item <= first; item++){
  numbersToAdd.push(item);
  console.log(item)
}
}
//if 0 index is < than 1 index push indexes into an array 
for(var item = first; item <= second; item++){
  numbersToAdd.push(item);
  //console.log(item)
}
console.log(numbersToAdd)
console.log(numbersToAdd.reduce(myFunc))
//add all numbers in the array
  function myFunc(total, num) {
  return total + num;

}
return numbersToAdd.reduce(myFunc)
}

//sumAll([1, 4]);
sumAll([4, 1])
