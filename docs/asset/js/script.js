window.onload=function(){const e=document.getElementById("js-loading");e.classList.add("is-loaded"),document.getElementById("js-fv").classList.add("is-show")},function(){const e=document.getElementById("js-header");let n=0,t,i=!1;window.addEventListener("scroll",function(){t=window.scrollY,i||(window.requestAnimationFrame(function(){t,60<t&&(t>n?e.classList.add("is-headIn"):e.classList.remove("is-headIn"),n=t),i=!1}),i=!0)})}();const toggle=document.getElementsByClassName("js-navToggle")[0],navLink=document.querySelectorAll(".l-header__navLists li a,.l-header__navCta");for(let e=0;e<navLink.length;e++)navLink[e].onclick=function(){toggle.checked=!1};const swiper=new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function showElementAnimation(){const n=document.getElementsByClassName("js-fadeIn");if(n){var t=768<window.innerHeight?200:40,i=window.pageYOffset,o=window.innerHeight;for(let e=0;e<n.length;e++){var s=i+n[e].getBoundingClientRect().top;s<i+o-t?n[e].classList.add("is-show"):i+o<s&&n[e].classList.remove("is-show")}}}showElementAnimation(),window.addEventListener("scroll",showElementAnimation);