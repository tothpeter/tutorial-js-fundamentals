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
}();