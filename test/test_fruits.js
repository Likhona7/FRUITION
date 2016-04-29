var fruit = require("../fruit");
var assert = require("assert");




  var retailStores = {
"woolingsworth": {
          "apples": 4,
          "bananas": 3,
          "oranges": 12
        },

"chockers": {
          "bananas": 2,
          "apples": 5,
          "oranges": 4
        },

"pickle pay": {
          "bananas": 4,
          "oranges": 7
        },

"shopwrong": {
          "apples": 2,
          "bananas": 3
        },

"kwakspar": {
          "oranges": 9,
          "apples": 4
        }
      }

describe('test for bestDeal Fruition function', function() {

      it('should give a seller with cheapest orange', function() {

        var result = fruit.cheapestSeller(retailStores);
        assert.equal(result, 'chockers');


      })
      it("should return the prices and sellers of apples, order ascending by price", function(){
var applePrices1 =[["shopwrong",2],["woolingsworth",4],["kwakspar",4],["chockers",5]];
var result = fruit.AppleSellers1(retailStores);
assert.deepEqual(result, applePrices1)
      })




    it("should return the prices and sellers of apples, order decending by price", function(){
var applePrices2 =[["chockers",5],["woolingsworth",4],["kwakspar",4],["shopwrong",2]];

var result = fruit.AppleSellers2(retailStores);
assert.deepEqual(result, applePrices2);
    })

    it("should return the cheapest fruit", function(){
var result = fruit.cheapFruit(retailStores);
assert.deepEqual(result, "apples");
    })

    it("should return the seller of the fruit with the lowest price", function(){
var result = fruit.cheapStore(retailStores);
assert.deepEqual(result, "shopwrong");
    })

    it("should return all the shops that sell oranges.", function(){
var OrangeSeller2 = ["woolingsworth","chockers","pickle pay","kwakspar"];

var result = fruit.orangeSeller1(retailStores);
assert.deepEqual(result, OrangeSeller2);

    })
})
