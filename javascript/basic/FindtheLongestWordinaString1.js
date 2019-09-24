// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//First Draft Below

function findLongestWordLength(str) {
  //convert the string into an array
  var arr = str.split(' ');
  // console.log("this is the value of arr: "+ arr);
  //creating an array of the length of each element in arr and soring it into len
  var len = [];
  for (var i = 0; i < arr.length; i++) {
    len.push(arr[i].length);
  }
  console.log('this is the value of len: ' + len);

  //sorting the len in order from smallest to largest number
  var sort = len.sort(function(a, b) {
    return a - b;
  });
  console.log('Here is the value of sort: ' + sort);

  //var largest = [];
  //largest.push(sort.slice(-1));
  var largest = sort.slice(-1);
  // console.log(typeof parseInt(largest));
  console.log(
    'The longest word in the string has ' + largest + ' letters in it.'
  );
  return parseInt(largest);
}

findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology'
);
