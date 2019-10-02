function sumAll(arr) {
  var first = arr[0];
  var second = arr[1];
  var total = 0;

  //if 0 index is > than 1 index push indexes into an array
  for (var item = second; item <= first; item++) {
    total = total + item;
  }

  //if 0 index is < than 1 index push indexes into an array
  for (var item = first; item <= second; item++) {
    total = total + item;
  }
  console.log(total);
  return total;
}

sumAll([1, 4]);
sumAll([4, 1]);
