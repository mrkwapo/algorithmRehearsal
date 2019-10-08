function whatIsInAName(collection, source) {

  var srcKeys = Object.keys(source);
  console.log(srcKeys);

  // filter the collection
  return collection.filter(function (obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      //console.log(obj.hasOwnProperty(srcKeys[i]) );
      //console.log(obj[srcKeys[i]] !== source)
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

 whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
