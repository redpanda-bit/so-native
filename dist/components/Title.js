// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=65)}({12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=weex.requireModule("animation"),o=weex.config.env;o.deviceWidth,o.deviceHeight;t.default={name:"Title",props:["isWeb","isAnimationOver"],data:function(){return{}},mounted:function(){setTimeout(this.fadeInTitle,2e3)},methods:{fadeInTitle:function(){r.transition(this.$refs.titleContainer,{styles:{opacity:1,transform:"translateY(-10px)"},duration:1e3,timingFunction:"ease",needLayout:!1,delay:0})}}}},15:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"titleContainer",staticClass:["title-container"],style:{transform:e.isAnimationOver?"translateY(-10px)":"translateY(10px)"}},[n("text",{ref:"title",staticClass:["title"],class:{web:e.isWeb}},[e._v("soNative")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},65:function(e,t,n){var r,o,i=[];r=n(12);var s=n(15);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="/Users/CarlosAlmonte/Desktop/HelloWorld/src/components/Title.vue",o.render=s.render,o.staticRenderFns=s.staticRenderFns,o.style=o.style||{},i.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)}});