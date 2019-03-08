/*!
 * /*
 * taucharts@2.7.0 (2019-03-08)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"));else if("function"==typeof define&&define.amd)define(["taucharts"],e);else{var i="object"==typeof exports?e(require("taucharts")):e(t.Taucharts);for(var o in i)("object"==typeof exports?exports:t)[o]=i[o]}}(window,function(t){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=26)}({0:function(e,i){e.exports=t},26:function(t,e,i){"use strict";i.r(e);var o=i(0),n=i.n(o),r=n.a.api.utils;function a(t){r.defaults(t||{},{});var e=function(){return!1};return{init:function(t){this._currNode=null,this._currData=null,this._chart=t,this._tooltip=t.addBalloon({spacing:3,auto:!0,effectClass:"fade"}),this._tooltip.content(this.template),this._tooltip.getElement().addEventListener("click",function(t){for(var e=t.target;e!==t.currentTarget&&null!==e;)e.classList.contains("i-role-exclude")&&(i._exclude(),i._tooltip.hide(),i._blurSelection()),e=e.parentNode},!1);var e,i=this;this._showTooltip=function(t){clearTimeout(e),i._currData=t.data;var o="No data";null!==t.data&&(o=Object.keys(t.data).map(function(e){return i.itemTemplate({label:e,value:t.data[e]})}).join(""));var n=i._tooltip.getElement().querySelectorAll(".i-role-content");n[0]&&(n[0].innerHTML=o);var r=i._tooltip.getElement().querySelectorAll(".i-role-exclude");if(r[0]){var a=t.data&&i._chart.getChartModelData().length>1;r[0].style.visibility=a?"visible":"hidden"}i._tooltip.show(t.event.pageX,t.event.pageY).updateSize()},this._hideTooltip=function(t){e=setTimeout(function(){i._tooltip.hide()},t?0:1e3)},this._tooltip.getElement().addEventListener("mouseover",function(t){clearTimeout(e)},!1),this._tooltip.getElement().addEventListener("mouseleave",function(t){i._hideTooltip(!0),i._blurSelection()},!1)},onRender:function(){var t=this;this._chart.select(function(t){return"COORDS.MAP"===t.config.type}).forEach(function(e){t._subscribeToPoints(e),t._subscribeToArea(e)})},template:['<div class="tau-chart__tooltip__buttons tau-chart__tooltip__clickable">','<div class="tau-chart__tooltip__button i-role-exclude">','<div class="tau-chart__tooltip__button__wrap">','<span class="tau-icon-close-gray"></span>',"Exclude","</div>","</div>","</div>",'<div class="i-role-content tau-chart__tooltip__content"></div>'].join(""),itemTemplate:r.template(['<div class="tau-chart__tooltip__list__item">','<div class="tau-chart__tooltip__list__elem"><%=label%></div>','<div class="tau-chart__tooltip__list__elem"><%=value%></div>',"</div>"].join("")),_exclude:function(){var t;this._chart.addFilter({tag:"exclude",predicate:(t=this._currData,function(e){return JSON.stringify(e)!==JSON.stringify(t)})}),this._chart.refresh()},_blurSelection:function(){this._chart.select(function(t){return"COORDS.MAP"===t.config.type}).forEach(function(t){t.fire("highlight-area",e)}),this._currNode=null,this._currData=null},_subscribeToPoints:function(t){var e=this;t.on("point-mouseover",function(t,i){e._showTooltip(i)}),t.on("point-mouseout",function(t,i){e._hideTooltip()})},_subscribeToArea:function(t){var e=this;!t.getScale("code").dim||t.on("area-click",function(i,o){var n,r;e._currNode=i,o.data?e._currData===o.data?(e._hideTooltip(!0),e._blurSelection()):(t.fire("highlight-area",(n=o.data,r=JSON.stringify(n),function(t){return JSON.stringify(t)===r})),e._showTooltip(o)):(e._showTooltip(o),e._hideTooltip(!1),e._blurSelection())})}}}n.a.api.plugins.add("geomap-tooltip",a),e.default=a}})});