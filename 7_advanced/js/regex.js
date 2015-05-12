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
  // console.log(noSpecialChar.test('a_z1-9'));


  var pattern = /^https?:/;
  // console.log(pattern.test('https://asd.asd'));

  var camelCased = 'CamelCasedString';
  // console.log(camelCased.replace(/([A-Z])/g,'_$1').toLowerCase().substr(1));

  // non capturing group: /(?:A-Z)/

  var pattern = /java(?!script)/i;
  // console.log(pattern.test('Java'));

  var lettersAndNumbers = /\d/g;
  console.log('asd67'.match(lettersAndNumbers));
}();