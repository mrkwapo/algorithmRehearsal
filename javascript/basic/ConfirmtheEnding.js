// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith()method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  var str1 = [];
  for (var i = 0; i < str.length; i++) {
    str1.push(str[i]);
    var lastLetter = str1.slice(-1);
    if (lastLetter === target) {
      return true;
    }
  }
  console.log(lastLetter);

  return false;
}

confirmEnding('Bastian', 'n');
