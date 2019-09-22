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
