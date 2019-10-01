//Intermediate Algorithm Scripting: Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
if(arr1.length <= arr2.length){
for(var item =0; item < arr2.length; item++){
  //console.log(arr2[item]);
  if(!arr1.includes(arr2[item])){
    //console.log(arr2[item]);
    newArr.push(arr2[item]);
  }
}
}

if(arr1.length >= arr2.length){
for(var item =0; item < arr1.length; item++){
  //console.log(arr2[item]);
  if(!arr2.includes(arr1[item])){
    //console.log(arr2[item]);
    newArr.push(arr1[item]);
  }
}
}
console.log(newArr);
  return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
