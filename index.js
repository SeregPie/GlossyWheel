!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self).JustMyLuck=t()}(this,(function(){"use strict";var n=function(n){this.random=n},t={random:{configurable:!0}};function r(n){return n&&function(n){return Number.isSafeInteger(n)&&!function(n){return n<0}(n)}(n.length)}function e(n){return r(n)?n:Array.from(n)}function i(n){return n.reduce((function(n,t){return n+t}),0)}t.random.get=function(){return Math.random},n.extend=function(n){var t=this;Object.entries(n).forEach((function(n){var r=n[0],e=n[1];t[r]=e,Object.defineProperty(t.prototype,r,{get:function(){return this.constructor[r]}})}))},Object.defineProperties(n,t),n.extend({boolean:function(){return this.random()<.5}}),n.extend({booleanWeighted:function(n){return n>0&&(!(n<1/0)||(1-this.random())*(1+n)>1)}}),n.extend({chance:function(n){return n>0&&(!(n<1)||this.random()<n)}}),n.extend({float:function(n,t,r){var e=this;if(void 0===r&&(r=!1),r){if(n===t)return n;var i,u=function(){return(i=e.float(n,t))===n};return(u()||u())&&this.boolean()&&(i=t),i}if(n<t){var o=n+(t-n)*this.random();return o>n&&o<t?o:n}throw new RangeError}}),n.extend({integer:function(n,t,r){return void 0===r&&(r=!1),n=Math.ceil(n),t=Math.floor(t),r&&t++,t-n==1?n:Math.floor(this.float(n,t))}}),n.extend({single:function(n){return(n=e(n))[this.integer(0,n.length)]}}),n.extend({combination:function(n,t){var r=e(n),i=r.length;if(i>1&&t>1){if(t<i/2){for(var u=[],o=0;t>0&&i>0;o++,i--)this.chance(t/i)&&(u.push(r[o]),t--);return u}if(r===n&&(r=Array.from(r)),t<i)for(var f=i-t;f>0;f--,i--){var a=this.integer(0,i);r.splice(a,1)}return r}return i>0&&t>0?[this.single(r)]:[]}}),n.extend({singleWeighted:function(n){for(var t=e(n),r=[],u=[],o=[],f=0,a=t.length;f<a;f++){var c=t[f],h=c[0],s=c[1];s>0?s<1/0?u.push([h,s]):r.push(h):o.push(h)}if(r.length)return this.single(r);if(u.length){var l=[],g=[];u.sort((function(n,t){return t[1]-n[1]})).forEach((function(n){var t=n[0],r=n[1];l.push(t),g.push(r)}));var p=g[0];if(function(n){return n[(t=n,t.length-1)];var t}(g)===p)return this.single(l);var d=i(g=g.map((function(n){return n/p}))),m=this.float(0,d),v=g.findIndex((function(n){return(m-=n)<0}));return v<0&&(v=0),l[v]}return this.single(o)}});var u=Array.isArray;function o(n){return u(n)?n:Array.from(n)}function f(n){var t=function(){for(var r=[],e=arguments.length;e--;)r[e]=arguments[e];return n.call.apply(n,[this,t].concat(r))};return t}n.extend({combinationWeighted:function(n,t){var r,e,i=o(n),u=i.length,a=Math.min(u,t);return a>0?this.singleWeighted((r=i,e=a,r.length<e?[]:f((function(n,t,r){if(--r<0)return[[]];var e=[];t=t.slice();for(var i=function(){var i=t.shift();n(t,r).forEach((function(n){n.unshift(i),e.push(n)}))};t.length-r;)i();return e}))(r,e)).map((function(n){return[n.map((function(n){return n[0]})),n.map((function(n){return n[1]})).reduce((function(n,t){return n+t}),0)]}))):[]}}),n.extend({date:function(n,t,r){return new Date(this.integer(n.getTime(),t.getTime(),r))}});var a=624;function c(n){return Array.from({length:n})}Object.assign(n,{MersenneTwister:function(n){for(var t=[n],r=1;r<a;r++)t[r]=1812433253*(t[r-1]^t[r-1]>>30)+r;var e=0;return function(){if(!e)for(var n=0;n<a;n++){var r=(2147483648&t[n])+(2147483647&t[(n+1)%a]),i=r>>1;r%2&&(i^=2567483615),t[n]=t[(n+397)%a]^i}var u=t[e];return u^=u>>11,u^=u<<7&2636928640,u^=u<<15&4022730752,e=(e+1)%a,(u^=u>>18)/2147483649}}}),n.extend({multicombination:function(n,t){var r=(n=e(n)).length;if(t>0){if(r>1){for(var i=[],u=0;t>0&&r>0;)this.chance(t/(t+r-1))?(i.push(n[u]),t--):(u++,r--);return i}if(r>0){var o=n[0];return c(t).fill(o)}}return[]}}),n.extend({multicombinationWeighted:function(n,t){for(var r,u,o=e(n),a=[],c=[],h=[],s=0,l=o.length;s<l;s++){var g=o[s],p=g[0],d=g[1];d>0?d<1/0?c.push([p,d]):a.push(p):h.push(p)}return a.length?this.multicombination(a,t):c.length?this.singleWeighted((r=c,u=t,f((function(n,t,r){if(--r<0)return[[]];var e=[];t=t.slice();for(var i=function(){var i=t[0];n(t,r).forEach((function(n){n.unshift(i),e.push(n)})),t.shift()};t.length;)i();return e}))(r,u)).map((function(n){return[n.map((function(n){return n[0]})),i(n.map((function(n){return n[1]})))]}))):this.multicombination(h,t)}}),n.extend({multipermutation:function(n,t){var r=(n=e(n)).length;if(t>0){if(r>1){for(var i=[];t>0;t--)i.push(this.single(n));return i}if(r>0){var u=n[0];return c(t).fill(u)}}return[]}}),n.extend({multipermutationWeighted:function(n,t){for(var r,u,o=e(n),a=[],c=[],h=[],s=0,l=o.length;s<l;s++){var g=o[s],p=g[0],d=g[1];d>0?d<1/0?c.push([p,d]):a.push(p):h.push(p)}return a.length?this.multipermutation(a,t):c.length?this.singleWeighted((r=c,u=t,f((function(n,t,r){if(--r<0)return[[]];var e=[];return t.forEach((function(i){n(t,r).forEach((function(n){n.unshift(i),e.push(n)}))})),e}))(r,u)).map((function(n){return[n.map((function(n){return n[0]})),i(n.map((function(n){return n[1]})))]}))):this.multipermutation(h,t)}}),n.extend({permutation:function(n,t){var r=e(n),i=r.length;if(i>1&&t>1){r===n&&(r=Array.from(r));for(var u=[];t>0;t--,i--){var o=this.integer(0,i),f=r.splice(o,1)[0];u.push(f)}return u}return i>0&&t>0?[this.single(r)]:[]}}),n.extend({permutationWeighted:function(n,t){var r,e,i=o(n),u=i.length,a=Math.min(u,t);return a>0?this.singleWeighted((r=i,e=a,r.length<e?[]:f((function(n,t,r){if(--r<0)return[[]];var e=[];return t.forEach((function(t,i,u){(u=u.slice()).splice(i,1),n(u,r).forEach((function(n){n.unshift(t),e.push(n)}))})),e}))(r,e)).map((function(n){return[n.map((function(n){return n[0]})),n.map((function(n){return n[1]})).reduce((function(n,t){return n+t}),0)]}))):[]}}),n.extend({shuffleInPlace:function(n){for(var t,r=n.length;r>1;){var e=this.integer(0,r);r--,t=[n[e],n[r]],n[r]=t[0],n[e]=t[1]}return n}}),n.extend({shuffle:function(n){return this.shuffleInPlace(Array.from(n))}});var h="abcdefghijklmnopqrstuvwxyz".toUpperCase(),s="abcdefghijklmnopqrstuvwxyz"+h,l=s+"0123456789",g=h+"0123456789";return Object.assign(n,{alphabetic:s,alphanumeric:l,lowerCasedAlphabetic:"abcdefghijklmnopqrstuvwxyz",lowerCasedAlphanumeric:"abcdefghijklmnopqrstuvwxyz0123456789",numeric:"0123456789",upperCasedAlphabetic:h,upperCasedAlphanumeric:g}),n.extend({string:function(n,t){var r=(n=e(n)).length;if(t>0){if(r>1){for(var i="";t>0;t--)i+=this.single(n);return i}if(r>0)return(""+n[0]).repeat(t)}return""}}),n}));
