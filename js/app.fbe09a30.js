(function(){"use strict";var n={545:function(n,e,t){var o=t(963),r=t(252);function i(n,e,t,o,i,a){const u=(0,r.up)("Navbar"),c=(0,r.up)("router-view"),l=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{logo:i.logo_src,alt:i.app_name},null,8,["logo","alt"]),(0,r.Wm)(c),(0,r.Wm)(l)],64)}const a=n=>((0,r.dD)("data-v-57cd5482"),n=n(),(0,r.Cn)(),n),u={id:"nav"},c=["src","alt"],l={id:"menu"},f=a((()=>(0,r._)("p",null,"INÍCIO",-1))),s=(0,r.Uk)("SOBRE");function d(n,e,t,o,i,a){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(d,{to:"/",id:"logo-url"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:t.logo,alt:t.alt,id:"logo"},null,8,c)])),_:1}),(0,r._)("div",l,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[f])),_:1}),(0,r.Wm)(d,{to:"/about"},{default:(0,r.w5)((()=>[s])),_:1})])])}var p={name:"Navbar",props:{logo:String,alt:String}},v=t(744);const g=(0,v.Z)(p,[["render",d],["__scopeId","data-v-57cd5482"]]);var m=g;const b=n=>((0,r.dD)("data-v-401f4d99"),n=n(),(0,r.Cn)(),n),h={id:"footer"},_=b((()=>(0,r._)("p",null,"Vagner José © 2022",-1))),w=[_];function y(n,e,t,o,i,a){return(0,r.wg)(),(0,r.iD)("footer",h,w)}var O={name:"Footer"};const k=(0,v.Z)(O,[["render",y],["__scopeId","data-v-401f4d99"]]);var j=k,C={data(){return{logo_src:"/img/logo.png",app_name:"Lett"}},components:{Navbar:m,Footer:j}};const S=(0,v.Z)(C,[["render",i]]);var E=S,N=t(119);const T={class:"main-container"},D=(0,r._)("h1",null,"Iniciozão",-1),P=[D];function W(n,e,t,o,i,a){return(0,r.wg)(),(0,r.iD)("div",T,P)}var F={name:"HomeView",components:{}};const I=(0,v.Z)(F,[["render",W]]);var x=I;const A=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,590))}],Z=(0,N.p7)({history:(0,N.r5)(),routes:A});var L=Z;(0,o.ri)(E).use(L).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,i){if(!o){var a=1/0;for(f=0;f<n.length;f++){o=n[f][0],r=n[f][1],i=n[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(f--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[o,r,i]}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.fb1451a9.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="org-repos-challenge:";t.l=function(o,r,i,a){if(n[o])n[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==e+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+i),u.src=o),n[o]=[r];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/org-repos-challenge/"}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(e),u=new Error,c=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==n[e]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var f=c(t)}for(e&&e(o);l<a.length;l++)i=a[l],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(f)},o=self["webpackChunkorg_repos_challenge"]=self["webpackChunkorg_repos_challenge"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(545)}));o=t.O(o)})();
//# sourceMappingURL=app.fbe09a30.js.map