//Basic Algorithm Scripting: Repeat a String Repeat a String
//Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if numis not a positive number.

function repeatStringNumTimes(str, num) {
  // create 
var arr = [];
  for(var i = 0; i < num;i++){
  arr.push(str);
  }
   console.log(arr.join(""));
  return arr.join(""); 
}

repeatStringNumTimes("abc", 3);
