//trying a different solution

function diffArray(arr1, arr2) {
  var newArr = [];
  var diff = Math.abs(arr1.length - arr2.length);
  console.log(diff);

  // Same, same; but different.
// if(arr1.length <= arr2.length){
for(var item =0; item < (arr2.length+diff); item++){
  console.log(arr2.length+diff);
  if(!arr1.includes(arr2[item])&&!arr2.includes(arr1[item])){
    //console.log(arr2[item]);
    newArr.push(arr1[item]);
    newArr.push(arr2[item]);
   
  }
}
console.log(newArr);
  return newArr;
}


diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
