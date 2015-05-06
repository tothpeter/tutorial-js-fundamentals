(function(){
  'use strict';

  var ar = ['item1'];

  if (ar.length) {
    // console.log("Cool");
  }

  // (true) ? console.log(1) : console.log(2);

  var Things = ['item1', 'item2', 'item3'];

  for (var i = 0, len = Things.length; i < len; i++) {
    // console.log(Things[i]);
  }

  var object = {
    p1: 'property1',
    p2: 'property2'
  }

  for(var prop in object) {
    if (object.hasOwnProperty(prop)) {
      // console.log(object[prop]);
    }
  }

  Array.prototype.each = function (callback) {
    for (var i = 0; i < this.length; i++)
    callback(this[i]);
  }
  var people = ["Bonnie", "Isaac", "Bridget", "Ted", "Jamey"];
  for (var person in people) {
    // console.log("Hello, " + people[person]);
  }
}());