var shoppingBasket = require('./shopping_basket.js');
var products = require('./products');
var assert = require('assert');


// We need to find the price of a shopping basket. A shopping basket can have multiple items.

describe('shopping basket', function(){
  it('should have 0 items', function(){
    assert.equal(0, shoppingBasket.items.length);
  })
  it('should add items', function(){
    shoppingBasket.setItems(products);
    assert.equal(4, shoppingBasket.items.length);
  })
  it('find the price of a shopping basket.  It can have multiple items', function(){
    assert.equal(4.00, shoppingBasket.total)
  });
})
// Discounts:

// 10% discount for all shopping baskets over £20

// Certain items are buy one get on free, this should be considered.

// If the customer has a valid discount card then they get and additional 5% off.

// Test drive your objects. Commit after every passing test.