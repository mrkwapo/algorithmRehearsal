function diffArray(arr1, arr2) {
  var newArr = [];
  newArr.push(arr1.length);
  newArr.push(arr2.length);
   
  newArr.sort(function (a, b) { return a - b })
  console.log(newArr);
  var smaller = newArr[0];
  //console.log(smaller);
  var larger = newArr[1];
  //console.log(larger);


  //   // Same, same; but different.
  // if(arr1.length <= arr2.length){
  // for(var item =0; item < arr2.length; item++){
  //   //console.log(arr2[item]);
  //   if(!arr1.includes(arr2[item])){
  //     //console.log(arr2[item]);
  //     newArr.push(arr2[item]);
  //   }
  // }
  // }

  // if(arr1.length >= arr2.length){
  // for(var item =0; item < arr1.length; item++){
  //   //console.log(arr2[item]);
  //   if(!arr2.includes(arr1[item])){
  //     //console.log(arr2[item]);
  //     newArr.push(arr1[item]);
  //   }
  // }
  // }
  // console.log(newArr);
  //   return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
//diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
//diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); //just need to solve this test case
