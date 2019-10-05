//Intermediate Algorithm Scripting: Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

//Note
//You have to use the argumentsobject.

function destroyer(arr) {
  // Remove all the values
  //console.log(arr[0]);
  //console.log(arr[1]);
  //console.log(arr[2]);
  
var arr1=[];

  for(var i = 0; i < arr[0]; i++){
    arr1.push(arr.slice(i));

  }
console.log("This is the value of arr[0]: "+arr1);
console.log("This is the value of arr[1]: "+arr[1]);
console.log("This is the value of arr[2]: "+arr[2]);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//not done
