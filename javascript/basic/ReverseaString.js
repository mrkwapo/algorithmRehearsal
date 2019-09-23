// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
  //convert string into an array
  var arr = str.split('');
  console.log(arr);
  //reverse array
  var reverseArr = arr.reverse();
  console.log(reverseArr);

  // convert array to back to string to get reversed string
  var reversedStr = reverseArr.join('');
  console.log(reversedStr);

  return reversedStr;
}

reverseString('hello');
