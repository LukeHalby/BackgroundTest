var socialFloat = document.getElementById('#social-float');
var footer = document.getElementById('#footer');

function checkOffset() {
	'use strict';
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }
  
  if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10) {
    socialFloat.style.position = 'absolute';
  }
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)) {
    socialFloat.style.position = 'fixed';
  }// restore when you scroll up
  
  socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
}

document.addEventListener("scroll", function(){
	'use strict';
  checkOffset();
});