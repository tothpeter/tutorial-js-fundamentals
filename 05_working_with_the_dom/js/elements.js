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

  var div3 = document.getElementById('div3');
  // console.log(div3.childNodes.length);

  // for (var x = 0, len = div3.childNodes.length; x < len; x++) {
  //   if (div3.childNodes[x].nodeType === 1) {
  //     console.log('I am a ' + div3.childNodes[x].tagName);
  //   }
  // }

  // It gives back only element nodes (old ide gives back comments as well)
  // console.log(div3.children.length);

  // console.log(div3.childNodes[0].nodeName);
  // console.log(div3.firstChild.nodeName);
  // console.log(div3.children[0].nodeName);

  // console.log(div3.parentNode);

  console.log(div3.previousSibling);
  console.log(div3.nextSibling);
}();