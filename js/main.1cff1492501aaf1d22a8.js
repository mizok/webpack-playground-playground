!function(){var n,e={163:function(){},142:function(){},299:function(){window.onload=function(){var n,e;n=document.querySelector(".playground__toggler#playground-toggler"),e=document.querySelector(".playground#playground"),n.addEventListener("click",(function(){n.classList.toggle("is-active"),e.classList.toggle("playground--active")})),function(){var n=document.querySelectorAll(".menu#menu .menu__link"),e=document.querySelector("iframe#playground-content");n.forEach((function(n){n.addEventListener("click",(function(){var t=n.getAttribute("data-route");e.setAttribute("src","examples/"+t+".html")}))}))}(),function(){var n=document.querySelector(".menu#menu"),e=document.querySelectorAll(".menu#menu .menu__inner"),t=function(e){var t=e,r=t.scrollTop;r>0?n.classList.add("menu--top-shaded"):n.classList.remove("menu--top-shaded"),t.scrollHeight-t.getBoundingClientRect().height-r>0?n.classList.add("menu--bot-shaded"):n.classList.remove("menu--bot-shaded")};e.forEach((function(n){t(n),n.addEventListener("scroll",(function(n){t(n.currentTarget)})),window.addEventListener("resize",(function(e){t(n)}))}))}()}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.m=e,n=[],r.O=function(e,t,o,u){if(!t){var i=1/0;for(l=0;l<n.length;l++){t=n[l][0],o=n[l][1],u=n[l][2];for(var c=!0,a=0;a<t.length;a++)(!1&u||i>=u)&&Object.keys(r.O).every((function(n){return r.O[n](t[a])}))?t.splice(a--,1):(c=!1,u<i&&(i=u));c&&(n.splice(l--,1),e=o())}return e}u=u||0;for(var l=n.length;l>0&&n[l-1][2]>u;l--)n[l]=n[l-1];n[l]=[t,o,u]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={179:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,u,i=t[0],c=t[1],a=t[2],l=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var s=a(r);for(e&&e(t);l<i.length;l++)u=i[l],r.o(n,u)&&n[u]&&n[u][0](),n[i[l]]=0;return r.O(s)},t=self.webpackChunkwebpack_playground_template=self.webpackChunkwebpack_playground_template||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),r.O(void 0,[736],(function(){return r(310)})),r.O(void 0,[736],(function(){return r(299)})),r.O(void 0,[736],(function(){return r(142)}));var o=r.O(void 0,[736],(function(){return r(163)}));o=r.O(o)}();