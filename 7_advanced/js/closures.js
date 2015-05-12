+function(){
  'use strict';

  function Order() {
    var total = 0;

    return function addProduct(price) {
      total += price * 0.17 + price * 0.05 + price;
      return total;
    };
  }

  var myOrder = new Order();

  console.log(myOrder(100));
  console.log(myOrder(150));

  // The closure is an inner function remembers all of the variables in scope when/where the function was defined
}();