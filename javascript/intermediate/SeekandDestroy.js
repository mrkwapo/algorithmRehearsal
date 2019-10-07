function destroyer() {
  //storing the value of the first argument in a variable called args
  var args = Array.prototype.slice.call(arguments, 0, 1);
  //storing the value of the rest of the arguements in a variable called restOfArgs
  var restOfArgs = Array.prototype.slice.call(arguments, 1);

  //accessing all the elements in args[0]
  for (var i = 0; i < args[0].length; i++) {
    //console.log(restOfArgs[i]);
    //accessing all the elements in restOfArgs
    for (var j = 0; j < restOfArgs.length; j++) {
      //comparing elements in the array called args[0] to the rest of the arguments. if founf then delete from args[0]
      if (args[0][i] === restOfArgs[j]) {
        delete args[0][i];
      }
    }
  }
  //console.log(args[0]);
  //When we return args[0] now it will return [ 7, <2 empty items>, 7, <2 empty items> ] or [7,,7,,]
  //To get rid of the empty spaces we need to filter out the empty strings using Boolean
  console.log(args[0].filter(Boolean));
  return args[0].filter(Boolean);
  //console.log(restOfArgs);
}

destroyer([7, 2, 3, 7, 2, 3], 2, 3);
