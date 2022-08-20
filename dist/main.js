!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VirtializeJS",[],t):"object"==typeof exports?exports.VirtializeJS=t():e.VirtializeJS=t()}(this,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>b});const r=function(){var e;return{getTimer:function(){return e},clearTimer:function(){e&&(clearTimeout(e),e=void 0)},setTimer:function(t,r){e=setTimeout(t,r)}}};function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,r,n,i,o=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(i){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this)).state=e,t.notify(t.state),t}return t=u,(r=[{key:"get",value:function(){return this.state}},{key:"update",value:function(e){this.state=e,this.notify(this.state)}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(function(){function e(){var t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=[],(t="observers")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r}var t,r;return t=e,r=[{key:"subscribe",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.observers=[].concat(o(this.observers),t)}},{key:"unsubscribe",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this.observers=this.observers.filter((function(e){return!t.includes(e.name)}))}},{key:"notify",value:function(e){this.observers.forEach((function(t){t.update(e)}))}}],r&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}());function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(){function e(t){var i=t.height,o=t.items,u=t.itemHeight,s=t.containerSelector,a=t.renderTemplate,l=t.onItemClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.itemHeight=u,this.items=o,this.height=i,this.containerSelector=s,this.renderTemplate=a,this.onItemClick=l,this.index=new d(0),this.renderSubjects=[this.index],this.onScroll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=r(),o=i.setTimer,u=i.clearTimer,s=function(t){e.apply(void 0,n(t)),u()},a=function(e){u(),o((function(){return s(e)}),t)};return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];a(t)}}(this.onScroll.bind(this),60),this.render=this.render.bind(this),this.paint=this.paint.bind(this),this.previousIndex=void 0}var t,i;return t=e,(i=[{key:"fullHeight",get:function(){return this.itemHeight*this.itemsLength}},{key:"visibleItemsLength",get:function(){return Math.round(this.height/this.itemHeight)}},{key:"itemsLength",get:function(){return this.items.length}},{key:"containerNode",get:function(){var e=this.containerSelector,t=document.querySelector(e);if(!t)throw new Error("Container with provided selector ".concat(e," is not found"));return t}},{key:"getPrevIndex",value:function(){return this.previousIndex||0}},{key:"init",value:function(){var e=this;this.renderSubjects.forEach((function(t,r){return t.subscribe({name:"render"+r,update:e.render})})),this.paint()}},{key:"paint",value:function(){this.containerNode.scrollTop=0,this.previousIndex=void 0,this.setupContainer(),this.index.update(0)}},{key:"setupContainer",value:function(){var e;null===(e=this.fullHeightWindow)||void 0===e||e.remove(),this.containerNode.style.height=this.height+"px",this.containerNode.style.overflowY="scroll",this.containerNode.style.position="relative",this.fullHeightWindow=document.createElement("div"),this.fullHeightWindow.style.height=this.fullHeight+"px",this.fullHeightWindow.style.width="100%",this.containerNode.append(this.fullHeightWindow),this.removeOnScroll(),this.containerNode.addEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){var e=this.itemHeight,t=Math.floor(this.containerNode.scrollTop/e);this.index.update(t)}},{key:"removeOnScroll",value:function(){this.containerNode.removeEventListener("scroll",this.onScroll)}},{key:"isRenderedFirstTime",value:function(){return void 0===this.previousIndex}},{key:"isItemAlreadyRendered",value:function(e){return!this.isRenderedFirstTime()&&e>=this.getPrevIndex()&&e<this.getPrevIndex()+this.visibleItemsLength}},{key:"render",value:function(){var e=this.index.get();this.unmountPreviousItems(),this.mountItems(),this.previousIndex=e}},{key:"mountItems",value:function(){for(var t=this,r=this.items,n=this.itemHeight,i=this.visibleItemsLength,o=this.fullHeightWindow,u=(this.previousIndex,this.index.get()),s=function(i){if(t.isItemAlreadyRendered(i))return"continue";var u=t.renderTemplate(r[i],i),s=e.parser.parseFromString(u,"text/html").body.firstChild;s&&(s.style.position="absolute",s.style.height=n+"px",s.style.top=Math.floor(i*n)+"px",s.setAttribute(e.KEY_NAME,String(i)),s.addEventListener("click",(function(){var e;return null===(e=t.onItemClick)||void 0===e?void 0:e.call(t,r[i])}))),null==o||o[!t.isRenderedFirstTime()&&i<t.getPrevIndex()?"prepend":"appendChild"](s)},a=u;a<i+u;a++)s(a)}},{key:"unmountPreviousItems",value:function(){var t,r=this;if(!this.isRenderedFirstTime())for(var n=this.index.get(),i=this.fullHeightWindow?function(e){if(Array.isArray(e))return y(e)}(t=this.fullHeightWindow.children)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}():[],o=this.getPrevIndex(),u=function(t){if(t<n||t>=n+r.visibleItemsLength){var o=i.find((function(r){return r.getAttribute(e.KEY_NAME)===String(t)}));null==o||o.remove()}},s=o;s<this.visibleItemsLength+o;s++)u(s)}},{key:"destroy",value:function(){this.removeOnScroll(),this.renderSubjects.forEach((function(e,t){return e.unsubscribe("render"+t)})),this.index.update(0),this.previousIndex=void 0,this.containerNode.innerHTML=""}}])&&p(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();return v(b,"KEY_NAME","virtualized-key"),v(b,"parser",new DOMParser),t})()));