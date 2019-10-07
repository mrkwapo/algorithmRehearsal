//Basic Algorithm Scripting: Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  //handling the case issue of each word in a string by creating an array of strings and lowercasing each character
  var lowerCaseArr = str.toLowerCase().split(" ");
  //console.log(lowerCaseArr);

  for (var i = 0; i < lowerCaseArr.length; i++) {
    //accessing the first letter of each word
    //console.log(lowerCaseArr[i][0]);
    //capitalizing the first letter of each word
    //console.log(lowerCaseArr[i][0].toUpperCase());
    //accessing the remainder of each word starting at position 1
    //console.log(lowerCaseArr[i].slice(1));
    //concatenating the remainder of each word with the capitalized first letter and storing it into each word in the array
    lowerCaseArr[i] = lowerCaseArr[i][0].toUpperCase() + lowerCaseArr[i].slice(1);

  }
  //converting the array to a string
  //console.log(lowerCaseArr.join(" "));
  return lowerCaseArr.join(" ");
}

titleCase("I'm a little tea pot");
