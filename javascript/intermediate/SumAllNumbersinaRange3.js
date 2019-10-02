function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var smaller = arr[0];
  var larger = arr[1];
  var total = 0;

  for (var item = smaller; item <= larger; item++) {
    total = total + item;
  }
  return total;
}
//sumAll([1, 4]);
sumAll([4, 1]);
