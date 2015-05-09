+function(){
  'use strict';

  var testString = 'test string sa la la';

  // String
  // console.log(testString.split(' '));
  // console.log(testString.indexOf('t', 1));
  // console.log(testString.lastIndexOf('t'));

  // console.log(testString.substr(0, 4));
  // console.log(testString.substr(-2));
  // console.log(testString.slice(0, 4));
  // console.log('    a '.trim());

  // Arrays

  var testArray = [ 'first', '2nd' ];

  testArray.push('3rd');
  testArray.unshift('very first');
  testArray.pop(); // last
  testArray.shift(); // 0.

  testArray.splice(0, 2, 'b', 'a');

  testArray.sort();
  // console.log(testArray);

  var testArray2 = [ 10000, 10, 30];
  testArray2.sort(function(a, b) {
    if (a < b) {
    } else if(a === b) {
      return 0;
    } else {
      return 1;
    }
  });

  // console.log(testArray2);

  // exists?
  
  // console.log(testArray2.indexOf(10));

  var testArrayCopy = testArray2;
  testArrayCopy = [10];

  // console.log(testArray2);
  
  testArray.forEach(function(value, index, array_itself) {
    // console.log(index + ". " + value);
  });

  // testArray.push(3);

  var everyElement = testArray.every(function(value) {
    return typeof value === 'string';
  });

  // console.log(everyElement);

  // testArray.push(3);

  var anyElement = testArray.some(function(value) {
    return typeof value === 'number';
  });

  // console.log(anyElement);

  // testArray.push(3);
  var filteredArray = testArray.filter(function(value) {
    return typeof value === 'number';
  });

  // console.log(filteredArray);
  
  // testArray.push(3);
  var mapArray = testArray.map(function(value) {
    return value + " --";
  });

  // console.log(mapArray);

  console.log([1,2,3].reduce(function(total, current_value, index, array_itself) {
    return total += current_value;
  },0));














}();