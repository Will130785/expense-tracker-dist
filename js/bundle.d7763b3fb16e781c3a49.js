!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t,n){"use strict";var r=n(1),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(20),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(5)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(19))},function(e,t,n){"use strict";var r=n(0),o=n(21),i=n(2),a=n(23),s=n(26),c=n(27),u=n(6);e.exports=function(e){return new Promise((function(t,l){var d=e.data,m=e.headers;r.isFormData(d)&&delete m["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",g=e.auth.password||"";m.Authorization="Basic "+btoa(f+":"+g)}var h=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(h,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n(28),x=(e.withCredentials||c(h))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;x&&(m[e.xsrfHeaderName]=x)}if("setRequestHeader"in p&&r.forEach(m,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete m[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===d&&(d=null),p.send(d)}))}},function(e,t,n){"use strict";var r=n(22);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){e.exports=n(14)},function(e,t,n){var r=n(11),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(m)):a.push({identifier:l,updater:h(m,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,g=0;function h(e,t){var n,r,o;if(t.singleton){var i=g++;n=f||(f=u(t)),r=m.bind(null,n,i,!1),o=m.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){(t=n(13)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);"]),t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}html{font-size:62.5%}@media only screen and (max-width: 900px){html{font-size:55%}}@media only screen and (max-width: 500px){html{font-size:45%}}body{display:grid;grid-template-rows:repeat(12, 1fr);grid-template-columns:repeat(12, 1fr)}.expense-container{grid-column:4 / 10;grid-row:2 / 12;display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(12, min-content);grid-row-gap:2rem}@media only screen and (max-width: 900px){.expense-container{grid-column:2 / 12}}@media only screen and (max-width: 500px){.expense-container{grid-column:1 / -1;padding:1rem}}body{font-family:'Roboto Condensed', sans-serif}.application-heading__title{font-weight:400}.header-section{font-size:1.6rem;text-align:center}.income__heading{font-size:1.6rem;font-weight:400}.income__item{font-size:1.4rem}.expense__heading{font-size:1.6rem;font-weight:400}.expense__item{font-size:1.4rem}.income-total{font-size:1.4rem}.expense-total{font-size:1.4rem}.new-transaction__heading{font-size:1.6rem;font-weight:400}.set-budget__heading{font-size:1.4rem;font-weight:400}.expense{grid-row:3 / 4;grid-column:7 / -1;text-align:center}@media only screen and (max-width: 500px){.expense{grid-row:5 / 6;grid-column:1 / -1}}.expense__heading{margin-bottom:2rem}.expense__items{display:grid;grid-template-columns:repeat(12, 1fr)}.expense__item{text-align:left;grid-column:1 / -1;box-shadow:0 0.1rem 0.1rem rgba(0,0,0,0.5);display:grid;grid-template-columns:2rem repeat(11, 1fr);grid-template-rows:3rem;align-items:center;transition:all .2s}.expense__item--pos{display:flex;justify-content:center;align-items:center;background-color:red;grid-column:1 / 2;height:100%;color:white;font-size:2rem}.expense__item--name{display:inline-block;grid-column:3 / 9}.expense__item--cur{display:inline-block;grid-column:9 / 10}.expense__item--am{display:inline-block;grid-column:10 / 11}.expense__item--del{display:inline-block;grid-column:12 / 13;color:gold;font-size:2rem;cursor:pointer}.expense__item:hover{margin:0 0 0 1.5rem;transform:scale(1.1);z-index:10}.header-section{grid-row:1 / 2;grid-column:1 / -1;display:grid;grid-template-columns:repeat(12, 1fr);background-color:#f5f3f3}.header-section__cur{grid-column:1 / 5;box-shadow:0 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.5);padding:1rem}.header-section__budg{grid-column:5 / 9;padding:1rem;box-shadow:0 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.5)}.header-section__stat{grid-column:9 / -1;padding:1rem;box-shadow:0 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.5)}.application-heading{grid-row:1 / 2;grid-column:1 / -1;display:flex;align-items:center;justify-content:center}.income{grid-row:3 / 4;grid-column:1 / 7;text-align:center}@media only screen and (max-width: 500px){.income{grid-column:1 / -1}}.income__heading{margin-bottom:2rem}.income__items{display:grid;grid-template-columns:repeat(12, 1fr)}.income__item{text-align:left;grid-column:1 / -1;box-shadow:0 0.1rem 0.1rem rgba(0,0,0,0.5);display:grid;grid-template-columns:2rem repeat(11, 1fr);grid-template-rows:3rem;align-items:center;transition:all .2s}.income__item--pos{display:flex;justify-content:center;align-items:center;background-color:green;grid-column:1 / 2;height:100%;color:white;font-size:2rem}.income__item--name{display:inline-block;grid-column:3 / 9}.income__item--cur{display:inline-block;grid-column:9 / 10}.income__item--am{display:inline-block;grid-column:10 / 11}.income__item--del{display:inline-block;grid-column:12 / 13;color:gold;font-size:2rem;cursor:pointer}.income__item:hover{margin:0 1.5rem 0 0;transform:scale(1.1);z-index:15}.exchange{grid-row:9 / 10;grid-column:1 / -1;display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(6, min-content)}.exchange__heading{text-align:center;font-weight:400;font-size:1.6rem;grid-column:1 / -1;grid-row:1 / 2}.exchange__item{grid-column:1 / -1;display:flex;align-items:center}.exchange__item--flag{display:inline-block;margin:1rem 2rem}.exchange__item--flag-pic{width:3rem;height:3rem}.exchange__item--rate{display:inline-block;margin:1rem 2rem;font-size:1.4rem}.new-transaction{grid-row:7 / 8;grid-column:1 / -1}.new-transaction__heading{text-align:center}.new-transaction__form{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(7, min-content);font-size:1.4rem}.new-transaction__form--namelab{grid-column:1 / -1;grid-row:1 / 2;margin-bottom:1rem}.new-transaction__form--namein{grid-column:1 / -1;grid-row:2 / 3;width:100%;padding:1rem;margin-bottom:3rem}.new-transaction__form--amlab{grid-column:1 / -1;grid-row:3 / 4;width:100%;margin-bottom:1rem}.new-transaction__form--amin{grid-column:1 / -1;grid-row:4 / 5;width:100%;padding:1rem;margin-bottom:3rem}.new-transaction__form--typelab{grid-column:1 / -1;grid-row:5 / 6;width:100%;margin-bottom:1rem}.new-transaction__form--typein{grid-column:1 / -1;grid-row:6 / 7;width:100%;padding:1rem;border:1px solid black;margin-bottom:3rem}.new-transaction__form--btn{grid-column:1 / -1;grid-row:7 / 8;width:100%;padding:1rem;background-color:#7bc405;color:white;font-size:1.4rem;border:none;border-radius:1rem;cursor:pointer;transition:all 1s}.new-transaction__form--btn:hover{background-color:#619c01}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=n(0),o=n(1),i=n(15),a=n(7);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(4));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(8),c.CancelToken=n(29),c.isCancel=n(3),c.all=function(e){return Promise.all(e)},c.spread=n(30),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(16),a=n(17),s=n(7);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(3),a=n(4);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function m(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(m);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(24),o=n(25);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(8);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);n(10);var r=n(9),o=n.n(r);class i{constructor(){}async getResults(){try{let e=await o()("https://data.fixer.io/api/latest?access_key=0a6cb4691c30900d4ac6a4701a28503d");console.log(e),this.res=e}catch(e){console.log(e)}}}const a={balanceDisplay:document.querySelector("#curr-display"),budgetDisplay:document.querySelector("#budget-display"),statusDisplay:document.querySelector("#status-display"),incomeContainer:document.querySelector(".income__items"),expenseContainer:document.querySelector(".expense__items"),transName:document.querySelector("#transaction"),transAmount:document.querySelector("#transaction-amount"),transType:document.querySelector("#type"),transBtn:document.querySelector("#submit"),overallContainer:document.querySelector(".expense-container"),ukpDisplay:document.querySelector("#ukp"),eurDisplay:document.querySelector("#eur"),usdDisplay:document.querySelector("#usd"),candDisplay:document.querySelector("#cand"),tbhtDisplay:document.querySelector("#tbht")},s={currentBalance:0,totalIncome:0,totalExpense:0},c={},u={},l=(e,t,n)=>{let r;return"income"===e?(r='\n    <div class="income__item">\n        <span class="income__item--pos">+</span><span class="income__item--name">'.concat(t,'</span><span class="income__item--cur">£</span><span class="income__item--am">').concat(n.toFixed(2),'</span><span class="income__item--del">X</span>\n    </div> \n    '),a.incomeContainer.insertAdjacentHTML("beforeend",r)):(r='\n    <div class="expense__item">\n        <span class="expense__item--pos">-</span><span class="expense__item--name">'.concat(t,'</span><span class="expense__item--cur">£</span><span class="expense__item--am">').concat(n.toFixed(2),'</span><span class="expense__item--del">X</span>\n    </div> \n    '),a.expenseContainer.insertAdjacentHTML("beforeend",r)),r},d=()=>{a.balanceDisplay.textContent="£".concat(s.currentBalance.toFixed(2)),a.budgetDisplay.textContent="£".concat(s.totalIncome.toFixed(2)),a.statusDisplay.textContent="£".concat(s.totalExpense.toFixed(2)),s.currentBalance<0?a.balanceDisplay.style.color="red":s.currentBalance>0?a.balanceDisplay.style.color="green":a.balanceDisplay.style.color="black",s.totalIncome<0?a.budgetDisplay.style.color="red":s.totalIncome>0?a.budgetDisplay.style.color="green":a.budgetDisplay.style.color="black",s.totalExpense<0?a.statusDisplay.style.color="green":s.totalExpense>0?a.statusDisplay.style.color="red":a.statusDisplay.style.color="black"},m=e=>{let t;t=e,localStorage.setItem("totals",JSON.stringify(t))};(async()=>{let e=new i;var t;await e.getResults(),t=e.res,a.ukpDisplay.textContent=t.data.rates.GBP,a.eurDisplay.textContent=t.data.rates.EUR,a.usdDisplay.textContent=t.data.rates.USD,a.candDisplay.textContent=t.data.rates.CAD,a.tbhtDisplay.textContent=t.data.rates.THB})(),document.addEventListener("DOMContentLoaded",()=>{(()=>{let e,t,n;e=null===localStorage.getItem("incomeItems")?[]:JSON.parse(localStorage.getItem("incomeItems")),e.forEach(e=>{l(e.transactionType,e.transactionName,e.transactionAmount)}),t=null===localStorage.getItem("expenseItems")?[]:JSON.parse(localStorage.getItem("expenseItems")),t.forEach(e=>{l(e.transactionType,e.transactionName,e.transactionAmount)}),n=JSON.parse(localStorage.getItem("totals")),a.balanceDisplay.textContent=n.currBalance,a.budgetDisplay.textContent=n.totIncome,a.statusDisplay.textContent=n.totExpense,s.currentBalance=n.currBalance,s.totalIncome=n.totIncome,s.totalExpense=n.totExpense})(),d()}),a.transBtn.addEventListener("click",e=>{var t,n;e.preventDefault(),c.transactionName=a.transName.value,c.transactionAmount=Number(a.transAmount.value),c.transactionType=a.transType.value,l(c.transactionType,c.transactionName,c.transactionAmount),t=c.transactionType,n=c.transactionAmount,"income"===t?(s.totalIncome+=Number(n),s.currentBalance+=Number(n)):(s.totalExpense+=Number(n),s.currentBalance-=Number(n)),u.currBalance=s.currentBalance,u.totIncome=s.totalIncome,u.totExpense=s.totalExpense,(e=>{let t,n;"income"===e.transactionType?(t=null===localStorage.getItem("incomeItems")?[]:JSON.parse(localStorage.getItem("incomeItems")),t.push(e),localStorage.setItem("incomeItems",JSON.stringify(t))):(n=null===localStorage.getItem("expenseItems")?[]:JSON.parse(localStorage.getItem("expenseItems")),n.push(e),localStorage.setItem("expenseItems",JSON.stringify(n)))})(c),m(u),d(),a.transName.value="",a.transAmount.value="",a.transType.value=""}),a.overallContainer.addEventListener("click",e=>{(e=>{(e.target.classList.contains("income__item--del")||e.target.classList.contains("expense__item--del"))&&e.target.parentElement.remove()})(e),((e,t)=>{let n,r;e.target.classList.contains("income__item--del")?(n=null===localStorage.getItem("incomeItems")?[]:JSON.parse(localStorage.getItem("incomeItems")),n.forEach((e,r)=>{e.transactionName===t&&(n.splice(r,1),localStorage.setItem("incomeItems",JSON.stringify(n)))})):e.target.classList.contains("expense__item--del")&&(r=null===localStorage.getItem("expenseItems")?[]:JSON.parse(localStorage.getItem("expenseItems")),r.forEach((e,n)=>{e.transactionName===t&&(r.splice(n,1),localStorage.setItem("expenseItems",JSON.stringify(r)))}))})(e,e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent);let t=Number(e.target.previousElementSibling.textContent);e.target.classList.contains("income__item--del")?(s.currentBalance-=t,s.totalIncome-=t):e.target.classList.contains("expense__item--del")&&(s.currentBalance+=t,s.totalExpense-=t),u.currBalance=s.currentBalance,u.totIncome=s.totalIncome,u.totExpense=s.totalExpense,m(u),d()})}]);