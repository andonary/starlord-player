(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{12:function(t,e,n){function r(){var t=n(40),e=n(42),r=n(44),i=n(45),o=[];i.forEach((function(t){return o.push(new r(t.youtubeUrl,t.title,t.author))}));var c=new e;c.faceA=o;var u=new t(c.faceA);Object.defineProperty(this,"walkman",{get:function(){return u}}),Object.defineProperty(this,"isPlaying",{get:function(){return this.walkman.isPlaying},set:function(t){t?this.walkman.play():this.walkman.pause()}}),Object.defineProperty(this,"currentSongIndex",{get:function(){return this.walkman.currentSongIndex}}),Object.defineProperty(this,"url",{get:function(){return this.isPlaying?this.walkman.play().path:this.walkman.pause().path}}),Object.defineProperty(this,"name",{get:function(){return this.isPlaying?this.walkman.play().name:this.walkman.pause().name}}),Object.defineProperty(this,"author",{get:function(){return this.isPlaying?this.walkman.play().author:this.walkman.pause().author}})}r.prototype.next=function(){this.walkman.next()},r.prototype.previous=function(){this.walkman.previous()},t.exports=r},17:function(t,e,n){},40:function(t,e,n){var r=n(41);function i(t){r.call(this,t)}n(9)(i,r),t.exports=i},41:function(t,e){function n(t){this.playlist=t,this.currentSongIndex=0,this.isPlaying=!1}n.prototype.play=function(){return this.isPlaying=!0,this.playlist[this.currentSongIndex]},n.prototype.pause=function(){return this.isPlaying=!1,this.playlist[this.currentSongIndex]},n.prototype.next=function(){return this.playlist.length>this.currentSongIndex+1?this.currentSongIndex++:this.currentSongIndex=0,this.currentSongIndex},n.prototype.previous=function(){return this.currentSongIndex-1>-1?this.currentSongIndex--:this.currentSongIndex=this.playlist.length-1,this.currentSongIndex},t.exports=n},42:function(t,e,n){var r=n(43);function i(){r.call(this)}n(9)(i,r),t.exports=i},43:function(t,e){t.exports=function(){var t=[];Object.defineProperty(this,"faceA",{get:function(){var e=t.map((function(t){return Object.freeze(t)}));return Object.freeze(e)},set:function(e){t=e.map((function(t){return Object.freeze(t)}))}})}},44:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sans titre",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"n/a",r=t,i=e,o=n;return Object.defineProperty(this,"path",{get:function(){return r},set:function(t){r=t}}),Object.defineProperty(this,"name",{get:function(){return i},set:function(t){i=t}}),Object.defineProperty(this,"author",{get:function(){return o},set:function(t){o=t}}),Object.seal({path:r,name:i,author:o})}},45:function(t,e,n){t.exports=n(46)},46:function(t){t.exports=JSON.parse('[{"title":"Come and get your love","author":"Redbone","youtubeUrl":"https://www.youtube.com/watch?v=BA4rSO-h9Io"},{"title":"Spirit in the sky","author":"Norman Greebaum","youtubeUrl":"https://www.youtube.com/watch?v=-cXrEPNvRO8"},{"title":"Cherry Bomb","author":"The runaways","youtubeUrl":"https://www.youtube.com/watch?v=_EBvXpjudf8"}]')},48:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(10),c=n.n(o),u=(n(17),n.p+"static/media/wallpaper.d9d60acc.jpg"),a=n(4),s=n(11),h=n.n(s),l=n(12),p=n.n(l),f=n(1),d=new p.a;var b=function(){var t=Object(r.useState)(d.url),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(r.useState)(d.currentSongIndex),c=Object(a.a)(o,2),u=c[0],s=c[1],l=Object(r.useState)(d.name),p=Object(a.a)(l,2),b=p[0],g=p[1],j=Object(r.useState)(d.author),y=Object(a.a)(j,2),x=y[0],m=y[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"text-center flex justify-center",children:[Object(f.jsx)("button",{onClick:function(){return d.previous(),i(d.url),s(d.currentSongIndex),g(d.name),void m(d.author)},children:"Previous"}),Object(f.jsx)(h.a,{url:n}),Object(f.jsx)("button",{onClick:function(){return d.next(),i(d.url),s(d.currentSongIndex),g(d.name),void m(d.author)},children:"Next"})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["Song N\xb0",u+1]}),Object(f.jsxs)("p",{children:["Title: ",b]}),Object(f.jsxs)("p",{children:["Author: ",x]})]})]})};var g=function(){return Object(f.jsx)("div",{className:"App bg-no-repeat bg-auto bg-top md:bg-right-top font-sans font-base font-normal text-red-100 w-screen",style:{backgroundImage:"url(".concat(u,")"),height:"100vh",backgroundColor:"#040404"},children:Object(f.jsx)("div",{className:"container mx-auto",children:Object(f.jsx)(b,{})})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),i(t),o(t),c(t)}))};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),j()},9:function(t,e){t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t}}},[[48,1,2]]]);
//# sourceMappingURL=main.4732539a.chunk.js.map