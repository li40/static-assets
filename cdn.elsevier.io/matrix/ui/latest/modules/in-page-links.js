!function(){"use strict";var e,t=function(){var e,t=document.querySelector("header"),n=document.querySelector("nav.in-page-nav"),o=t?t.offsetHeight:0,a=n?n.offsetHeight+16:0;return o+(e=window.navigator.userAgent,/MSIE|Trident/.test(e)?0:a)};e=function(){var e=Array.from(document.querySelectorAll('a[href*="#"]:not([href="#"]):not([role="tab"]):not([data-no-animate])'));if(e.length&&e.forEach((function(e){if("".concat(location.host).concat(location.pathname)==="".concat(e.host).concat(e.pathname)){var n=document.querySelector(e.hash)||document.querySelector('[name="'.concat(e.hash.replace("#",""),'"]'));n&&e.addEventListener("click",(function(e){e.preventDefault();var o="top"===n.id?0:n.getBoundingClientRect().top+(window.pageYOffset-t());window.scroll(0,o),n.setAttribute("tabindex",0),n.addEventListener("focus",(function(){n.style.outline="none"})),n.focus()}))}})),window.location.hash){var n=document.querySelector(window.location.hash);n&&window.addEventListener("load",(function(){var e=n.getBoundingClientRect().top+(window.pageYOffset-t());window.scroll(0,e)}))}},["interactive","complete"].includes(document.readyState)?e():document.addEventListener("DOMContentLoaded",(function(){e()}))}();