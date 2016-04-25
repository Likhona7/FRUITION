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
        assert.deepEqual(result, chockers);


      })
})
