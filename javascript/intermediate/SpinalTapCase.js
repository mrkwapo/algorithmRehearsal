//Intermediate Algorithm Scripting: Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var lower = str.toLowerCase();

  var arr = lower.split(" ");
  //console.log(arr)
  var newArr = [];


  for (var i = 0; i < str.length; i++) {

    //console.log(lowercased)
    //console.log("-")
    newArr.push(arr[i])
  }

  console.log(newArr.filter(Boolean).join("-"))
  return newArr.filter(Boolean).join("-");
}

spinalCase('This Is Spinal Tap'); 
//this test case passes and shows: "this-is-spinal-tap"
spinalCase("Teletubbies say Eh-oh");
//this test case passes and shows: "teletubbies-say-eh-oh"

