+function(){
  'use strict';

  function mixin() {

    var newPrototype = {},
        args = Array.prototype.slice.call(arguments),
        baseObject = args[0],
        prototypes = args.slice(1);

    prototypes.forEach(function(item) {
      for(var prop in item) {
        if (item.hasOwnProperty(prop)) {
          newPrototype[prop] = item[prop];
        }
      }
    });

    baseObject.prototype = newPrototype;
    // baseObject.prototype.constructor = baseObject;
  }

  function Shape2d() {}
  Shape2d.prototype.getArea = function() {
    return this.sides[0] * this.sides[1];
  }

  function Position() {}
  Position.prototype.getCoords = function() {
    return this.coords.join(', ');
  }

  function Rectangle(width, height, top, left) {
    this.sides = [width, height, width, height];
    this.coords = [top, left];
  }

  mixin(Rectangle, Shape2d.prototype, Position.prototype);

  var myRect = new Rectangle(5, 6, 100, 200);

  console.log(myRect);
  console.log(myRect.getArea());
  console.log(myRect.getCoords());
}();