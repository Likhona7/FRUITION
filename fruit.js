exports.cheapestSeller = function(Obj1) {



  var min = Infinity;
  //minObj = {};
  var minStore = "";

  for (var shops in Obj1) {

    var fruits = Obj1[shops];
    if (fruits.oranges < min) {
      min = fruits.oranges;
      minStore = shops;


    }

  }
  console.log(minStore);
  return minStore
}
