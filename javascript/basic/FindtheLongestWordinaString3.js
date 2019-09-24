// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//most succinct version

function findLongestWordLength(str) {
  var arr = str.split(' ');
  var len = [];
  for (var i = 0; i < arr.length; i++) {
    len.push(arr[i].length);
    len.sort(function(a, b) {
      return a - b;
    });
  }
  console.log(
    'The largest word in the string is ' +
      parseInt(len.slice(-1)) +
      ' letters long.'
  );
  return parseInt(len.slice(-1));
}
findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology'
);
