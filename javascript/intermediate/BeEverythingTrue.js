// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate prewill be an object property and you need to return trueif its value is truthy. Otherwise, return false.

// In JavaScript, truthyvalues are values that translate to truewhen evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or []notation.

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  console.log(counter == collection.length);
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' }
  ],
  'sex'
);
