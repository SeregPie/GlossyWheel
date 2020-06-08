!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).JustMyLuck=n()}(this,(function(){"use strict";var e=function(e){this.random=e},n={random:{configurable:!0}};function t(e){return e&&function(e){return Number.isSafeInteger(e)&&!function(e){return e<0}(e)}(e.length)}function r(e){return t(e)?e:Array.from(e)}n.random.get=function(){return Math.random},e.extend=function(e){var n=this;Object.entries(e).forEach((function(e){var t=e[0],r=e[1];n[t]=r,Object.defineProperty(n.prototype,t,{get:function(){return this.constructor[t]}})}))},Object.defineProperties(e,n),e.extend({boolean:function(){return this.random()<.5}}),e.extend({booleanWeighted:function(e){return e>0&&(!(e<1/0)||(1-this.random())*(1+e)>1)}}),e.extend({chance:function(e){return e>0&&(!(e<1)||this.random()<e)}}),e.extend({float:function(e,n,t){var r=this;if(void 0===t&&(t=!1),t){if(e===n)return e;var i,u=function(){return(i=r.float(e,n))===e};return(u()||u())&&this.boolean()&&(i=n),i}if(e<n){var a=e+(n-e)*this.random();return a<n?a:e}throw new RangeError}}),e.extend({integer:function(e,n,t){return void 0===t&&(t=!1),e=Math.ceil(e),n=Math.floor(n),t&&n++,n-e==1?e:Math.floor(this.float(e,n))}}),e.extend({single:function(e){return(e=r(e))[this.integer(0,e.length)]},value:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .value is deprecated. Use .single instead."),(e=this).single.apply(e,n)},item:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .item is deprecated. Use .single instead."),(e=this).single.apply(e,n)},index:function(e){console.warn("[JustMyLuck] DeprecationWarning: .index is deprecated and will be removed in the future.");var n=e.length,t=this.integer(0,n);return t}}),e.extend({combination:function(e,n){var t=r(e),i=t.length;if((n=Math.min(n,i))>0){if(i>1==n>1){if(n<i/2){for(var u=[],a=0;n>0&&i>0;a++,i--)this.chance(n/i)&&(u.push(t[a]),n--);return u}if(t===e&&(t=Array.from(t)),n>1)for(var o=i-n;o>0;o--,i--){var c=this.integer(0,i);t.splice(c,1)}return t}return[this.single(t)]}return[]},items:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .items is deprecated. Use .combination instead."),(e=this).combination.apply(e,n)}});var i=Array.isArray;function u(e){return i(e)?e:Array.from(e)}function a(e){var n=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e.call.apply(e,[this,n].concat(t))};return n}e.extend({singleWeighted:function(e){for(var n=r(e),t=n.length,i=[],u=[],a=[],o=0;o<t;o++){var c=n[o],f=c[0],s=c[1];s>0?s<1/0?u.push([f,s]):i.push(f):a.push(f)}if(i.length)return this.single(i);if(u.length){u.sort((function(e,n){return n[1]-e[1]}));var h=[],l=[];if(u.forEach((function(e){var n=e[0],t=e[1];h.push(n),l.push(t)})),l[0]===function(e){return e[(n=e,n.length-1)];var n}(l))return this.single(h);var d=l.reduce((function(e,n){return e+n})),p=this.float(0,d),g=l.findIndex((function(e){return(p-=e)<0}));return g<0&&(g=0),h[g]}return this.single(a)},valueWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .valueWeighted is deprecated. Use .singleWeighted instead."),(e=this).singleWeighted.apply(e,n)},itemWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemWeighted is deprecated. Use .singleWeighted instead."),(e=this).singleWeighted.apply(e,n)},indexWeighted:function(e){return console.warn("[JustMyLuck] DeprecationWarning: .indexWeighted is deprecated and will be removed in the future."),this.singleWeighted(u(e).map((function(e,n){return[n,e[1]]})))}}),e.extend({combinationWeighted:function(e,n){var t,r,i=u(e),o=i.length,c=Math.min(o,n);return c>0?this.singleWeighted((t=i,r=c,t.length<r?[]:a((function(e,n,t){if(--t<0)return[[]];var r=[];n=n.slice();for(var i=function(){var i=n.shift();e(n,t).forEach((function(e){e.unshift(i),r.push(e)}))};n.length-t;)i();return r}))(t,r)).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]}))):[]},itemsWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemsWeighted is deprecated. Use .combinationWeighted instead."),(e=this).combinationWeighted.apply(e,n)}}),e.extend({date:function(e,n,t){return new Date(this.integer(e.getTime(),n.getTime(),t))}});var o=624;function c(e){return Array.from({length:e})}Object.assign(e,{MersenneTwister:function(e){for(var n=[e],t=1;t<o;t++)n[t]=1812433253*(n[t-1]^n[t-1]>>30)+t;var r=0;return function(){if(!r)for(var e=0;e<o;e++){var t=(2147483648&n[e])+(2147483647&n[(e+1)%o]),i=t>>1;t%2&&(i^=2567483615),n[e]=n[(e+397)%o]^i}var u=n[r];return u^=u>>11,u^=u<<7&2636928640,u^=u<<15&4022730752,r=(r+1)%o,(u^=u>>18)/2147483649}}}),e.extend({multicombination:function(e,n){var t=(e=r(e)).length;if(t>0){if(t>1){for(var i=[],u=0;n>0&&t>0;)this.chance(n/(n+t-1))?(i.push(e[u]),n--):(u++,t--);return i}var a=e[0];return c(n).fill(a)}return[]}}),e.extend({multicombinationWeighted:function(e,n){var t,r,i=u(e);return this.singleWeighted((t=i,r=n,a((function(e,n,t){if(--t<0)return[[]];var r=[];n=n.slice();for(var i=function(){var i=n[0];e(n,t).forEach((function(e){e.unshift(i),r.push(e)})),n.shift()};n.length;)i();return r}))(t,r)).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]})))}}),e.extend({multipermutation:function(e,n){var t=(e=r(e)).length;if(t>0){if(t>1){for(var i=[];n>0;n--)i.push(this.single(e));return i}var u=e[0];return c(n).fill(u)}return[]},itemsRepeated:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemsRepeated is deprecated. Use .multipermutation instead."),(e=this).multipermutation.apply(e,n)},permutationRepeated:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .permutationRepeated is deprecated. Use .multipermutation instead."),(e=this).multipermutation.apply(e,n)}}),e.extend({multipermutationWeighted:function(e,n){var t,r,i=u(e);return this.singleWeighted((t=i,r=n,a((function(e,n,t){if(--t<0)return[[]];var r=[];return n.forEach((function(i){e(n,t).forEach((function(e){e.unshift(i),r.push(e)}))})),r}))(t,r)).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]})))},itemsRepeatedWeighted:function(){for(var e,n=[],t=arguments.length;t--;)n[t]=arguments[t];return console.warn("[JustMyLuck] DeprecationWarning: .itemsRepeatedWeighted is deprecated. Use .multipermutationWeighted instead."),(e=this).multipermutationWeighted.apply(e,n)}}),e.extend({permutation:function(e,n){var t=r(e),i=t.length;if((n=Math.min(n,i))>0){if(i>1==n>1){if(t===e&&(t=Array.from(t)),n>1){for(var u=[];n>0;n--,i--){var a=this.integer(0,i),o=t.splice(a,1)[0];u.push(o)}return u}return t}return[this.single(t)]}return[]}}),e.extend({permutationWeighted:function(e,n){var t,r,i=u(e),o=i.length,c=Math.min(o,n);return c>0?this.singleWeighted((t=i,r=c,t.length<r?[]:a((function(e,n,t){if(--t<0)return[[]];var r=[];return n.forEach((function(n,i,u){(u=u.slice()).splice(i,1),e(u,t).forEach((function(e){e.unshift(n),r.push(e)}))})),r}))(t,r)).map((function(e){return[e.map((function(e){return e[0]})),e.map((function(e){return e[1]})).reduce((function(e,n){return e+n}),0)]}))):[]}}),e.extend({shuffleInPlace:function(e){for(var n,t=e.length;t>1;){var r=this.integer(0,t);t--,n=[e[r],e[t]],e[t]=n[0],e[r]=n[1]}return e}}),e.extend({shuffle:function(e){return this.shuffleInPlace(Array.from(e))}});var f="abcdefghijklmnopqrstuvwxyz".toUpperCase(),s="abcdefghijklmnopqrstuvwxyz"+f,h=s+"0123456789",l=f+"0123456789";return Object.assign(e,{alphabetic:s,alphanumeric:h,lowerCasedAlphabetic:"abcdefghijklmnopqrstuvwxyz",lowerCasedAlphanumeric:"abcdefghijklmnopqrstuvwxyz0123456789",numeric:"0123456789",upperCasedAlphabetic:f,upperCasedAlphanumeric:l}),e.extend({string:function(e,n){var t=(e=r(e)).length;if(t>0){if(t>1){for(var i="";n>0;n--)i+=this.single(e);return i}return(""+e[0]).repeat(n)}return""}}),e}));
