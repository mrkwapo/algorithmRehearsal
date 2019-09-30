//Basic Algorithm Scripting: Mutations
//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".

//Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
//convert all letters in both word to lowercase
var first = arr[0].toLowerCase();
var second = arr[1].toLowerCase()
//access each letter in second word and compare search for it in the first word 

for(var i = 0; i < second.length; i++){
  //validate that each letter in second word is in the first word
  if(first.includes(second[i])!==true){
    console.log(first.includes(second[i]));
    return false;
  }

}
console.log(first.includes(second[i])===true);
  return true;
}

//mutation(["hello", "Hello"]);
//mutation(["Mary", "Army"])
mutation(["hello", "neo"])
