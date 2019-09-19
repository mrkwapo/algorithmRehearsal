// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

//////////////////////////////////////////////////////////////
/////////PROBLEM///////////////
//////////////////////////////////////////////////////////////
// function factorialize(num) {
//   //find a way to iterate up to the number that is being factorialized
//   //
//   return num;
// }

// factorialize(5);
//////////////////////////////////////////////////////////////
/////////SOLUTION///////////////
//////////////////////////////////////////////////////////////
// To prove whether a number is a prime number, first try dividing it by 2, and see if you get a whole number. If you do, it can't be a prime number. If you don't get a whole number, next try dividing it by prime numbers: 3, 5, 7, 11 (9 is divisible by 3) and so on, always dividing by a prime number.
//My suedo code:

// divide each number by 2

//use .isInteger() to check if you get a whole number

//if you get a whole number it is not a prime number so get rid of it

//then divide each number by 3

///if it is divisible then it is not a prime number

function sumPrimes(num) {
  //put each number below num in an array
  var arrOfNumbers = [];
  var arrNotWholeNums = [];
  var primeNumbers = [];
  for (var i = 1; i <= num; i++) {
    arrOfNumbers.push(i);
  }
  console.log(
    'This is the each number including and below num (which is now 10): ' +
      arrOfNumbers
  );

  // divide each number by 2
  //use .isInteger() to check if you get a whole number
  //if you get a whole number it is not a prime number so get rid of it
  for (var j = 0; j < arrOfNumbers.length; j++) {
    if (Number.isInteger(arrOfNumbers[j] / 2) !== true) {
      arrNotWholeNums.push(arrOfNumbers[j]);
    }
  }
  console.log(
    'Each number when divided by 2 is not a whole number : ' + arrNotWholeNums
  );

  //then divide each number by 3
  ///if it is divisible then it is not a prime number
  for (var k = 0; k < arrNotWholeNums.length; k++) {
    if (arrNotWholeNums[k] % 3 != 0) {
      primeNumbers.push(arrNotWholeNums[k]);
    }
  }
  console.log(primeNumbers);

  return num;
}

sumPrimes(30);
