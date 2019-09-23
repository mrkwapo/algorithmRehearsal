// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  //create an array of numbers up to and including given num
  var arrofNum = [];

  for (var i = 1; i <= num; i++) {
    arrofNum.push(i);
  }
  console.log(arrofNum);

  // multiply numbers in the array and add the total
  var total = 1;
  for (var j = 0; j < arrofNum.length; j++) {
    //console.log(arrofNum[j]);
    total *= arrofNum[j];
    //  console.log(total);
  }
  console.log(total);
  return total;
}

factorialize(5);
