
function sumPrimes(num) {
  //put each number below num in an array
  var arrOfNumbers = [];
  var arrNotWholeNums = [];
  var primeNumbers = [];
  for (var i = 1; i <= num; i++) {
    arrOfNumbers.push(i);
  }
  // console.log(
  //   'This is the each number including and below num (which is now 10): ' +
  //     arrOfNumbers
  // );

  // divide each number by 2
  //use .isInteger() to check if you get a whole number
  //if you get a whole number it is not a prime number so get rid of it
  for (var j = 1; j < arrOfNumbers.length; j++) {
    
    if (arrOfNumbers[j] ===2 ||arrOfNumbers[j] ===3 ||arrOfNumbers[j] ===5 || Number.isInteger(arrOfNumbers[j] / 2) !== true ) {
      arrNotWholeNums.push(arrOfNumbers[j]);
    }
  }
   console.log(
     'Excluding 2 These numbers are not whole numbers after being divided by 2 : ' + arrNotWholeNums
   );

  //then divide each number by 3
  ///if it is divisible then it is not a prime number
  for (var k = 0; k < arrNotWholeNums.length; k++) {
    
          if (  arrNotWholeNums[k]%3 !=0 || arrNotWholeNums[k]%5 != 0 && arrNotWholeNums[k]%9 != 0  ) {
      primeNumbers.push(arrNotWholeNums[k]);
    }
  }
  console.log("These appear to be prime numbers: " + primeNumbers);
  

var total= 0;

for(var l = 0; l < primeNumbers.length; l++){
  total+= primeNumbers[l];
} 
console.log("This is the sum of all prime numbers: " + total);
  return total;
}

sumPrimes(10);
