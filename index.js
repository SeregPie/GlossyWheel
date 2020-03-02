!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).JustMyLuck=n()}(this,(function(){"use strict";var e=function(e){this.random=e},n={random:{configurable:!0}};n.random.get=function(){return Math.random},e.extend=function(e){var n=this;Object.entries(e).forEach((function(e){var t=e[0],r=e[1];n[t]=r,Object.defineProperty(n.prototype,t,{get:function(){return this.constructor[t]}})}))},Object.defineProperties(e,n),e.extend({boolean:function(){return this.random()<.5}}),e.extend({booleanWeighted:function(e){return(1-this.random())*(1+e)>1}}),e.extend({float:function(e,n,t){var r,i=this;if(void 0===t&&(t=!1),t)return e===n?e:([0,0].some((function(){return(r=i.float(e,n))===e}))&&this.boolean()&&(r=n),r);if(e<n){var u=e+(n-e)*this.random();return u<n?u:e}throw new RangeError}}),e.extend({integer:function(e,n,t){return void 0===t&&(t=!1),e=Math.ceil(e),n=Math.floor(n),t&&n++,n-e==1?e:Math.floor(this.float(e,n))}});var t=Array.from,r=Number.isSafeInteger;function i(e){return e&&function(e){return r(e)&&!function(e){return e<0}(e)}(e.length)}function u(e){return i(e)?e:t(e)}e.extend({single:function(e){var n=u(e),t=n.length;return n[this.integer(0,t)]},value:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .value is deprecated. Use .single instead."),(e=this).single.apply(e,n)},item:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .item is deprecated. Use .single instead."),(e=this).single.apply(e,n)},index:function(e){console.warn("[JustMyLuck] DeprecationWarning: .index is deprecated and will be removed in the future.");var n=e.length,t=this.integer(0,n);return t}});var o=Array.isArray;function a(e){return o(e)?e:t(e)}function c(e){var n=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e.call.apply(e,[this,n].concat(t))};return n}function s(e,n){return e.length<n?[]:c((function(e,n,t){if(--t<0)return[[]];var r=[];n=n.slice();for(var i=function(){var i=n.shift();e(n,t).forEach((function(e){e.unshift(i),r.push(e)}))};n.length-t;)i();return r}))(e,n)}e.extend({combination:function(e,n){var t=a(e),r=t.length,i=Math.min(r,n);return i>0?this.single(s(t,i)):[]},items:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .items is deprecated. Use .combination instead."),(e=this).combination.apply(e,n)}}),e.extend({singleWeighted:function(e){for(var n=u(e),t=n.length,r=[],i=[],o=[],a=0;a<t;a++){var c=n[a],s=c[0],f=c[1];f>0?f<1/0?i.push([s,f]):r.push(s):o.push(s)}if(r.length)return this.single(r);if(i.length){i.sort((function(e,n){return n[1]-e[1]}));var h=[],d=[];if(i.forEach((function(e){var n=e[0],t=e[1];h.push(n),d.push(t)})),d[0]===function(e){return e[(n=e,n.length-1)];var n}(d))return this.single(h);var l=d.reduce((function(e,n){return e+n})),p=this.float(0,l),g=d.findIndex((function(e){return(p-=e)<0}));return g<0&&(g=0),h[g]}return this.single(o)},valueWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .valueWeighted is deprecated. Use .singleWeighted instead."),(e=this).singleWeighted.apply(e,n)},itemWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemWeighted is deprecated. Use .singleWeighted instead."),(e=this).singleWeighted.apply(e,n)},indexWeighted:function(e){return console.warn("[JustMyLuck] DeprecationWarning: .indexWeighted is deprecated and will be removed in the future."),this.singleWeighted(a(e).map((function(e,n){return[n,e[1]]})))}}),e.extend({combinationWeighted:function(e,n){var t=a(e),r=t.length,i=Math.min(r,n);return i>0?this.singleWeighted(s(t,i).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]}))):[]},itemsWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemsWeighted is deprecated. Use .combinationWeighted instead."),(e=this).combinationWeighted.apply(e,n)}}),e.extend({date:function(e,n,t){return new Date(this.integer(e.getTime(),n.getTime(),t))}});var f=624;function h(e,n){return c((function(e,n,t){if(--t<0)return[[]];var r=[];n=n.slice();for(var i=function(){var i=n[0];e(n,t).forEach((function(e){e.unshift(i),r.push(e)})),n.shift()};n.length;)i();return r}))(e,n)}function d(e,n){return e.length<n?[]:c((function(e,n,t){if(--t<0)return[[]];var r=[];return n.forEach((function(n,i,u){(u=u.slice()).splice(i,1),e(u,t).forEach((function(e){e.unshift(n),r.push(e)}))})),r}))(e,n)}Object.assign(e,{MersenneTwister:function(e){for(var n=[e],t=1;t<f;t++)n[t]=1812433253*(n[t-1]^n[t-1]>>30)+t;var r=0;return function(){if(!r)for(var e=0;e<f;e++){var t=(2147483648&n[e])+(2147483647&n[(e+1)%f]),i=t>>1;t%2&&(i^=2567483615),n[e]=n[(e+397)%f]^i}var u=n[r];return u^=u>>11,u^=u<<7&2636928640,u^=u<<15&4022730752,r=(r+1)%f,(u^=u>>18)/2147483649}}}),e.extend({multicombination:function(e,n){var t=a(e);return this.single(h(t,n))}}),e.extend({multicombinationWeighted:function(e,n){var t=a(e);return this.singleWeighted(h(t,n).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]})))}}),e.extend({multipermutation:function(e,n){for(var t=u(e),r=[];n>0;)r.push(this.single(t)),n--;return r},itemsRepeated:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemsRepeated is deprecated. Use .multipermutation instead."),(e=this).multipermutation.apply(e,n)},permutationRepeated:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .permutationRepeated is deprecated. Use .multipermutation instead."),(e=this).multipermutation.apply(e,n)}}),e.extend({multipermutationWeighted:function(e,n){var t,r,i=a(e);return this.singleWeighted((t=i,r=n,c((function(e,n,t){if(--t<0)return[[]];var r=[];return n.forEach((function(i){e(n,t).forEach((function(e){e.unshift(i),r.push(e)}))})),r}))(t,r)).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]})))},itemsRepeatedWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemsRepeatedWeighted is deprecated. Use .multipermutationWeighted instead."),(e=this).multipermutationWeighted.apply(e,n)}}),e.extend({permutation:function(e,n){var t=a(e),r=t.length,i=Math.min(r,n);return i>0?this.single(d(t,i)):[]}}),e.extend({permutationWeighted:function(e,n){var t=a(e),r=t.length,i=Math.min(r,n);return i>0?this.singleWeighted(d(t,i).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]}))):[]}}),e.extend({shuffleInPlace:function(e){for(var n,t=e.length;t>1;){var r=this.integer(0,t);t--,n=[e[r],e[t]],e[t]=n[0],e[r]=n[1]}return e}}),e.extend({shuffle:function(e){var n=t(e);return this.shuffleInPlace(n)}});var l="abcdefghijklmnopqrstuvwxyz".toUpperCase(),p="abcdefghijklmnopqrstuvwxyz"+l,g=p+"0123456789",m=l+"0123456789";return Object.assign(e,{alphabetic:p,alphanumeric:g,lowerCasedAlphabetic:"abcdefghijklmnopqrstuvwxyz",lowerCasedAlphanumeric:"abcdefghijklmnopqrstuvwxyz0123456789",numeric:"0123456789",upperCasedAlphabetic:l,upperCasedAlphanumeric:m}),e.extend({string:function(e,n){e=u(e);for(var t="";n>0;)t+=this.single(e),n--;return t}}),e}));
