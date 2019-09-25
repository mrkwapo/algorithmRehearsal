// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith()method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  //substring method is used to extract characters from a string and has two arguements.
  //The first argument is a number that determines which index to start the extraction and the second is optional which determines where to end the extraction.
  //when you only use one argument it will use that number to extract from that index and on.

  //to obtain the index of where to start the extraction we need to know the length of the string and the target.

  //when you subtract the length of the target from the length of the string it will give you the substring we need to be tested.

  var first = str.length;
  //console.log(str.length);

  var second = target.length;
  //console.log(target.length)

  var difference = first - second;
  //console.log(first-second);

  if (str.substring(difference) === target) {
    // console.log(true)
    return true;
  }

  return false;
}

confirmEnding('Bastian', 'n');
