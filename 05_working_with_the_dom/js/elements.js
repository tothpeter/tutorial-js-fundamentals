+function(){
  'use strict';

  // console.log(document.getElementById('mainHeading'));
  // console.log(document.getElementsByClassName('class1'));
  // console.log(document.getElementsByTagName('div'));
  // console.log(document.getElementsByName('div'));

  var header = document.getElementById('mainHeading');
  var divs = document.getElementsByTagName('div');
  var div = document.getElementsByTagName('div')[0];

  // console.log(header.id);


  // console.log(header);
  // header.id = "newID";
  // console.log(header);

  // console.log(div.className);
  // div.className = "total new class names"

  div.classList.add('new-class');
  div.classList.remove('new-class');
  // console.log(div.classList);
  // console.log(div.classList.contains('new-class'));

  // console.log(div.tagName);
  // console.log(div.nodeName);
  // Elemenet node type = 1
  // console.log(div.nodeType);
  // Text node type = 3
  // console.log(header.childNodes[0].nodeType);
  

  mainHeading.innerHTML = '<span>' + mainHeading.innerHTML +'</span>';
  mainHeading.outerHTML = '<div>' + mainHeading.outerHTML +'</div>';

  divs[2].textContent = "<span>aAAA</span>";

  mainHeading.setAttribute('contenteditable', true);
  // console.log(mainHeading.hasAttribute('contenteditable'));
  mainHeading.removeAttribute('contenteditable');
  
}();