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
    //  console.log(min);
    console.log(minStore);
    return minStore
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
exports.AppleSellers1 = function(obj) {

  var record = "";
  var apple1Descending = [];
  var applesShop = {};
  for (var shops in obj) {
    if (obj[shops].hasOwnProperty("apples")) {
      applesShop[shops] = obj[shops].apples;

    }

  }

  for (var apple1 in applesShop) {
    apple1Descending.push([apple1, applesShop[apple1]]);
    apple1Descending.sort(function(d, c) {

      return d[1] - c[1];
    });
  }
  console.log(apple1Descending);
  return apple1Descending;

}

/////////////////////////////////////////////////////////////////////////////////////
exports.AppleSellers2 = function(obj) {

  var record = "";
  var apple1Descending = [];
  var applesShop = {};
  for (var shops in obj) {
    if (obj[shops].hasOwnProperty("apples")) {
      applesShop[shops] = obj[shops].apples;

    }

  }

  for (var apple1 in applesShop) {
    apple1Descending.push([apple1, applesShop[apple1]]);
    apple1Descending.sort(function(a, b) {

      return b[1] - a[1];
    });
  }
  console.log(apple1Descending);
  return apple1Descending;

}


exports.cheapFruit = function(obj) {

  var min = Infinity;
  //minObj = {};
  var minfruit = "";

  for (var shops in obj) {
    for (var shop1 in obj[shops]) {
      //shop1 is the fruits all of dem.
      var shopsValue = obj[shops];
      //shopsValue is the fruit & its values.
      var fruit = shopsValue[shop1];
        //fruit is only the value of fruits.
      if (fruit <= min) {
        min = fruit;
        minfruit = shop1;
      }
    }
  }
  console.log(shop1);
  return shop1

}

exports.cheapStore = function(obj) {

var min = Infinity;
var minfruit = "";

for (var shops in obj) {
  for (var shop2 in obj[shops]) {

    var shopsValue = obj[shops];
var fruit = shopsValue[shop2];
if(fruit <= min) {
  min = fruit;
  minfruit = shops;
}


  }
}
console.log(minfruit);
return minfruit;
}








// var fruit = obj[shops];
// var apples = fruit.apples;
// if (shops === apples) {
//   apples = shops;
//   minStore = shops
// }console.log(shops,apples);


// exports.avoObj = function(avoArr) {
//   var avoDealArr = [];
//   avoArr.forEach(function(arr) {
//     var rows = arr.split(" ");
//     dealObj = {
//       price: rows[1],
//       quantity: rows[0]
//     }



// /  console.log(shops)
// }

// console.log(record);
