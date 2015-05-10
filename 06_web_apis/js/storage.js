+function(){
  'use strict';


  window.sessionStorage.setItem('testItem', true);
  window.sessionStorage.setItem('testItem2', [1, 2, 4]);
  window.sessionStorage.setItem('testItem3', JSON.stringify({ prop1: 'Jej' }));

  // console.log(JSON.parse(window.sessionStorage.getItem('testItem3')));

  function readStorageKeys() {
    for (var i = 0, len = window.sessionStorage.length; i < len; i++) {
      console.log(window.sessionStorage.key(i));
    }
  }
  readStorageKeys();

  window.sessionStorage.removeItem('testItem3');
  window.sessionStorage.clear();

  console.log(window.sessionStorage);
}();