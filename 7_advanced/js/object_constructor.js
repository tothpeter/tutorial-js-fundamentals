+function(){
  'use strict';

  var newObj = {};
  Object.prototype.mySpecialProperty = 'special';

  // console.log(newObj);

  
  var newArray = [1,2,3];
  if (!Array.prototype.first) {
    Array.prototype.first = function() {
      return this[0];
    };
  }

  // console.log(newArray.first());

  newObj.prop1 = 'prop1';
  Object.keys(newObj).forEach(function(item) {
    // console.log(item);
  });

  Object.freeze(newObj);

  if (!Object.isFrozen(newObj)) {
    newObj.prop1 = 'asd';
  }

  var unFrozenObj = {}
  Object.keys(newObj).forEach(function(item) {
    unFrozenObj[item] = newObj[item];
  });

  // Cant delete or add new prop
  Object.seal(unFrozenObj);
  unFrozenObj.prop1 = 'whoohoo';

  if (!Object.isSealed(unFrozenObj)) {
    delete unFrozenObj.prop1;
  }

  var extensible = {};
  Object.preventExtensions(extensible);
  // console.log(Object.isExtensible(extensible));

  // Class like, constructor
  var Person = function(name) {
    this.name = name;
  }

  Person.prototype = {
    greet: function(){
      return this.name;
    }
  }

  var fred = new Person('Fred')

  var bob = Object.create(Person.prototype,{
    name: { writeable: true, value: 'Bob2' }
  });

  Object.defineProperty(bob, 'job', {
    value: 'Dev',
    writeable: true,
    configureable: true,
    enumerable: true
  });
  // console.log(bob);
  // console.log(fred);
}();