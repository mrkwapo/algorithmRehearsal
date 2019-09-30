// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ...ending.

function truncateString(str, num) {
  //handle the numbers that would be to long
  if (num >= str.length) {
    console.log(str);
    return str;
  }
  // chop off the string at the num index and add ...

  var chopped = str.slice(0, num) + '...';
  console.log(str.slice(0, num) + '...');

  return chopped;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

//other test case
// truncateString(
//   'A-tisket a-tasket A green and yellow basket',
//   'A-tisket a-tasket A green and yellow basket'.length
// );
