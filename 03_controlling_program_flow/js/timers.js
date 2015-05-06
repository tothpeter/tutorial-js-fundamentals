(function(){
  'use strict';

  function log(message) {
    console.log(message);
  }

  var timer = setTimeout(function() {
    log('Jeeej')
  }, 2000);

  clearTimeout(timer);
}());