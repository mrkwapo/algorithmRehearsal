// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//Second draft

function findLongestWordLength(str) {
  var arr = str.split(' ');
  var len = [];

  for (var i = 0; i < arr.length; i++) {
    len.push(arr[i].length);
  }
  var sort = len.sort(function(a, b) {
    return a - b;
  });
  var largest = sort.slice(-1);
  console.log(
    'The longest word in the string is ' + largest + ' letters long.'
  );
  return parseInt(largest);
}

findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology'
);
