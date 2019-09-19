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
  for (var j = 1; j < arrOfNumbers.length; j++) {
    if (
      arrOfNumbers[j] === 2 ||
      arrOfNumbers[j] === 3 ||
      Number.isInteger(arrOfNumbers[j] / 2) !== true
    ) {
      arrNotWholeNums.push(arrOfNumbers[j]);
    }
  }
  console.log(
    'Excluding 2 These numbers are not whole numbers after being divided by 2 : ' +
      arrNotWholeNums
  );

  //then divide each number by 3
  ///if it is divisible then it is not a prime number
  for (var k = 0; k < arrNotWholeNums.length; k++) {
    if (arrNotWholeNums[k] === 5 || arrNotWholeNums[k] % 5 != 0) {
      primeNumbers.push(arrNotWholeNums[k]);
    }
  }
  console.log(primeNumbers);

  return num;
}

sumPrimes(30);
