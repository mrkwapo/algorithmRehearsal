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
  //if you return args[0] now it looks like: [ 7, <2 empty items>, 7, <2 empty items> ]
  //Boolean returns

  //so we filter Boolean to return the array with the elements that met the condition
  console.log(args[0].filter(Boolean));
  return args[0].filter(Boolean);
  //console.log(restOfArgs);
}

destroyer([7, 2, 3, 7, 2, 3], 2, 3);
