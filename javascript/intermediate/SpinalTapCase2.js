
//Intermediate Algorithm Scripting: Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // the variable regex uses the global search method to locate white spaces and underscores
var regex = /\s+|_+/g;

// Replace low-upper case to low-space-uppercase
//([a-z]) tells global search to look for loweracse letters next to ([A-Z]) which are uppercase letters.
// the $1 and $2 are place holders within quotation marks which represent ([a-z]) which is group 1 and $2 represents ([A-Z]) which is group 2. 
//the $1 and $2 delibrately have a space between them which designates we want a space between them.
str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

 // Now that all test cases have a space between them we are now using the replace method to replace spaces and underscores with -
console.log(str.replace(regex, '-').toLowerCase());
  return str.replace(regex, '-').toLowerCase();
}

spinalCase("thisIsSpinalTap")
//spinalCase('This Is Spinal Tap');
//spinalCase("The_Andy_Griffith_Show")
