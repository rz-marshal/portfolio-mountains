!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}({0:function(e,t,n){"use strict";var o=document.querySelector(".hamburger-menu"),r=document.querySelector(".fullscreenmenu"),c=document.querySelector(".fullscreenmenu__btn"),l=document.querySelectorAll(".fullscreenmenu__link");o.addEventListener("click",function(){r.style.display="flex",document.body.classList.add("blocked-scroll")}),c.addEventListener("click",function(){r.style.display="none",document.body.classList.remove("blocked-scroll")}),l.forEach(function(e){e.addEventListener("click",function(){r.style.display="none",document.body.classList.remove("blocked-scroll")})})},2:function(e,t,n){"use strict";var o,r=(o=document.querySelector(".header__background"),{move:function(e,t,n){var o=t/-n+"%";e.style.top=o},init:function(e){this.move(o,e,45)}});window.onscroll=function(){var e=window.pageYOffset;r.init(e)}},20:function(e,t,n){"use strict";n(0),n(2),n(21)},21:function(e,t,n){"use strict";for(var o=document.querySelectorAll(".blog-menu__item"),r=document.querySelectorAll(".blog-menu__btn"),c=document.querySelectorAll(".article"),l=0;l<r.length;l++){r[l].onclick=function(){for(var e=this.dataset.id,t=this.parentNode,n=0;n<o.length;n++){o[n].classList.remove("blog-menu__item--active")}t.classList.add("blog-menu__item--active");for(var r=0;r<c.length;r++){var l=c[r];l.dataset.id===e&&window.scrollTo({top:l.offsetTop,behavior:"smooth"})}}}}});