+function(){
  'use strict';
// http://localhost:3000/people
  var xhr = new XMLHttpRequest();
  // xhr.onload = function() {
  //   console.log(JSON.parse(xhr.responseText));
  // }

  // Old
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(JSON.parse(xhr.responseText));
    }
  };

  // To send cookies
  xhr.withCredentials = true;

  // console.log(xhr);

  xhr.open('GET', 'http://localhost:3000/people');
  xhr.send();
}();