+function(){
  'use strict';

  var mainHeading = document.getElementById('mainHeading');
  var wrapper = document.getElementById('wrapper');

  // mainHeading.addEventListener('click', function() {
  //   console.log("Clicked");
  // });
  
  wrapper.addEventListener('click', function(e) {
    console.log('The ' + e.target.childNodes[0].textContent + ' was clicked.');
    e.stopPropagation();
  });

  document.addEventListener('click', function() {
    console.log('Doc clicked');
  });


  var anchor = document.createElement('a');
  anchor.textContent = 'Link';
  anchor.setAttribute('href', 'http://kalina.technology');
  document.body.appendChild(anchor);

  anchor.addEventListener('click', function(e) {
    e.preventDefault();
  });

  function mouseenterHandler() {
    console.log('enter');
  }

  mainHeading.addEventListener('mouseenter', mouseenterHandler);
  mainHeading.removeEventListener('mouseenter', mouseenterHandler);
}();