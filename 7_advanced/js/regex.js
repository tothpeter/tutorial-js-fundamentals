+function(){
  'use strict';

  var pattern = /@/;
  // console.log(pattern.test('ad@sd.a'));

  var letters = /^[a-zA-Z]+$/;
  // console.log(letters.test('R2-D2'));

  var pattern = /^\d{3}-\d{6}-\d{3}$/;
  // console.log(pattern.test('111-111111-111'));

  // Alphanum
  var noSpecialChar = /^\w*$/;
  console.log(noSpecialChar.test('a_z1-9'));

}();