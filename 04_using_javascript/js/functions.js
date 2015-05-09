+function(){
  'use strict';

  var testFunction = function testFunction(arg1, arg2) {
    return arg1 + arg2;
  }

  // console.log(testFunction.length);

  var person = {
    name: 'Toma', 
    job: 'Dev'
  };

  function introduce(inductee) {
    console.log('Hey ' + inductee + '! My name is ' + this.name);
  }

  // introduce.call(person, 'Bob');


  function chat(respondent, subject) {
    console.log('So ' + respondent + ', what about the ' + subject + " huh? " + this.job);
  }

  function engage(mode, object, args) {
    mode.apply(object, args);
  }

  // engage(introduce, person, ['Fred']);
  // engage(chat, person, ['Al', 'new IDE']);

  function addToCart(price, fee) {
    if (!this.total) {
      this.total = 0;
    }

    this.total += price += fee || 0;
    return this.name + '\'s cart total is $' + this.total;
  }

  var tomasCart = addToCart.bind(person, 1);
  // console.log(tomasCart(50));
  // console.log(tomasCart(10));

  var bob = {
    name: 'Bob', 
  };

  var bobsCart = addToCart.bind(bob, 5);
  // console.log(bobsCart(50));
  // console.log(bobsCart(10));
}();