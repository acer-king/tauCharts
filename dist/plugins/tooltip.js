/*!
 * /*
 * taucharts@2.7.4 (2019-07-17)
 * Copyright 2019 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("taucharts"),require("d3-selection"));else if("function"==typeof define&&define.amd)define(["taucharts","d3-selection"],e);else{var i="object"==typeof exports?e(require("taucharts"),require("d3-selection")):e(t.Taucharts,t.d3);for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(window,function(t,e){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=33)}({0:function(e,i){e.exports=t},1:function(t,i){t.exports=e},2:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o});var n="tau-chart__tooltip";function o(t,e){return{render:function(t){return this.args=t,t=Object.assign({},t,{fields:this.filterFields(t.fields)}),this.rootTemplate(t)},rootTemplate:function(t){return['<div class="'+n+"__buttons "+n+'__clickable">',this.buttonsTemplate(),"</div>",'<div class="i-role-content '+n+'__content">',this.contentTemplate(t),"</div>"].join("\n")},contentTemplate:function(t){return this.fieldsTemplate(t)},filterFields:function(t){return t},getLabel:function(e){return t.getFieldLabel(e)},getFormatter:function(e){return t.getFieldFormat(e)},fieldsTemplate:function(t){var e=this,i=t.data;return t.fields.map(function(t){return e.itemTemplate({data:i,field:t})}).join("\n")},itemTemplate:function(t){var e=t.data,i=t.field,o=this.getLabel(i),r=this.getFormatter(i)(e[i]);return['<div class="'+n+'__list__item">','  <div class="'+n+'__list__elem">'+o+"</div>",'  <div class="'+n+'__list__elem">'+r+"</div>","</div>"].join("\n")},buttonsTemplate:function(){return[this.buttonTemplate({cls:"i-role-exclude",text:"Exclude",icon:function(){return'<span class="tau-icon-close-gray"></span>'}})].join("\n")},buttonTemplate:function(t){var e=t.icon,i=t.text,o=t.cls;return['<div class="'+n+"__button "+o+'">','  <div class="'+n+'__button__wrap">',"    "+(e?e()+" ":"")+i,"  </div>","</div>"].join("\n")},didMount:function(){var e=t.getDomNode().querySelector(".i-role-exclude");e&&e.addEventListener("click",function(){t.excludeHighlightedElement(),t.setState({highlight:null,isStuck:!1})})}}}},3:function(t,e,i){"use strict";var n=i(0),o=i.n(n),r=i(1),s=i(2),l=o.a.api.utils,a=o.a.api.domUtils,c=o.a.api.pluginsSDK,u="tau-chart__tooltip",h=function(){function t(t){this.settings=l.defaults(t||{},{align:"bottom-right",clickable:!0,clsClickable:u+"__clickable",clsStuck:"stuck",clsTarget:u+"-target",escapeHtml:!0,fields:null,formatters:{},getTemplate:null,spacing:24,winBound:12,onExclude:function(){}}),this.onRender=this._getRenderHandler()}return t.prototype.init=function(t){this._chart=t,this._tooltip=this._chart.addBalloon({spacing:this.settings.spacing,winBound:this.settings.winBound,auto:!0,effectClass:"fade"}),this._initDomEvents(),this.state={highlight:null,isStuck:!1},this.setState(this.state),this._template=this._getTemplate()},t.prototype._getTemplate=function(){var t=Object(s.b)(this,this.settings);return"function"==typeof this.settings.getTemplate?this.settings.getTemplate(t,this,this.settings):t},t.prototype._renderTemplate=function(t,e){return this._template.render({data:t,fields:e})},t.prototype._initDomEvents=function(){var t=this;this._scrollHandler=function(){t.setState({highlight:null,isStuck:!1})},window.addEventListener("scroll",this._scrollHandler,!0),this.settings.clickable&&(this._outerClickHandler=function(e){var i=Array.from(document.querySelectorAll("."+t.settings.clsClickable)).concat(t.getDomNode()).map(function(t){return t.getBoundingClientRect()}),n=Math.min.apply(Math,i.map(function(t){return t.top})),o=Math.min.apply(Math,i.map(function(t){return t.left})),r=Math.max.apply(Math,i.map(function(t){return t.right})),s=Math.max.apply(Math,i.map(function(t){return t.bottom}));(e.clientX<o||e.clientX>r||e.clientY<n||e.clientY>s)&&t.setState({highlight:null,isStuck:!1})})},t.prototype.getDomNode=function(){return this._tooltip.getElement()},t.prototype.setState=function(t){var e=this,i=this.settings,n=this.state,o=this.state=Object.assign({},n,t);n.highlight=n.highlight||{data:null,cursor:null,unit:null},o.highlight=o.highlight||{data:null,cursor:null,unit:null},o.isStuck&&n.highlight.data&&(o.highlight=n.highlight),o.highlight.data!==n.highlight.data&&(o.highlight.data?(this._hideTooltip(),this._showTooltip(o.highlight.data,o.highlight.cursor),this._setTargetSvgClass(!0),requestAnimationFrame(function(){e._setTargetSvgClass(!0)})):o.isStuck||!n.highlight.data||o.highlight.data||(this._removeFocus(),this._hideTooltip(),this._setTargetSvgClass(!1))),!o.highlight.data||n.highlight.cursor&&o.highlight.cursor.x===n.highlight.cursor.x&&o.highlight.cursor.y===n.highlight.cursor.y||(this._tooltip.position(o.highlight.cursor.x,o.highlight.cursor.y),this._tooltip.updateSize());var r=this.getDomNode();this.settings.clickable&&o.isStuck!==n.isStuck&&(o.isStuck?(window.addEventListener("click",this._outerClickHandler,!0),r.classList.add(i.clsStuck),this._setTargetEventsEnabled(!1),this._accentFocus(o.highlight.data),this._tooltip.updateSize()):(window.removeEventListener("click",this._outerClickHandler,!0),r.classList.remove(i.clsStuck),requestAnimationFrame(function(){e._setTargetEventsEnabled(!0);var t=e._chart.getSVG();t&&a.dispatchMouseEvent(t,"mouseleave")})))},t.prototype._showTooltip=function(t,e){var i=this.settings,n=i.fields||"function"==typeof i.getFields&&i.getFields(this._chart)||Object.keys(t),o=this._renderTemplate(t,n);this._tooltip.content(o).position(e.x,e.y).place(i.align).show().updateSize(),this._template.didMount&&this._template.didMount()},t.prototype._hideTooltip=function(){window.removeEventListener("click",this._outerClickHandler,!0),this._template.willUnmount&&this._template.willUnmount(),this._tooltip.hide()},t.prototype.destroy=function(){window.removeEventListener("scroll",this._scrollHandler,!0),this._setTargetSvgClass(!1),this.setState({highlight:null,isStuck:!1}),this._tooltip.destroy()},t.prototype._subscribeToHover=function(){var t=this,e=["ELEMENT.LINE","ELEMENT.AREA","ELEMENT.PATH","ELEMENT.INTERVAL","ELEMENT.INTERVAL.STACKED","ELEMENT.POINT"];this._chart.select(function(t){return e.indexOf(t.config.type)>=0}).forEach(function(e){e.on("data-hover",function(e,i){var n=document.body.getBoundingClientRect();t.setState({highlight:i.data?{data:i.data,cursor:{x:i.event.clientX-n.left,y:i.event.clientY-n.top},unit:i.unit}:null})}),t.settings.clickable&&e.on("data-click",function(e,i){var n=document.body.getBoundingClientRect();t.setState(i.data?{highlight:{data:i.data,cursor:{x:i.event.clientX-n.left,y:i.event.clientY-n.top},unit:i.unit},isStuck:!0}:{highlight:null,isStuck:null})})})},t.prototype.getFieldFormat=function(t){var e=this._formatters[t]?this._formatters[t].format:function(t){return String(t)};return this.settings.escapeHtml?function(t){return l.escapeHtml(e(t))}:e},t.prototype.getFieldLabel=function(t){var e=this._formatters[t]?this._formatters[t].label:t;return this.settings.escapeHtml?l.escapeHtml(e):e},t.prototype._accentFocus=function(t){var e=function(e){return e===t};this._chart.select(function(){return!0}).forEach(function(t){t.fire("highlight",e)})},t.prototype._removeFocus=function(){var t=function(){return null};this._chart.select(function(){return!0}).forEach(function(e){e.fire("highlight",t),e.fire("highlight-data-points",t)})},t.prototype.excludeHighlightedElement=function(){var t=this.state.highlight.data;this._chart.addFilter({tag:"exclude",predicate:function(e){return e!==t}}),this.settings.onExclude(t),this._chart.refresh()},t.prototype._getRenderHandler=function(){return function(){this._formatters=c.getFieldFormatters(this._chart.getSpec(),this.settings.formatters),this._subscribeToHover(),this.setState({highlight:null,isStuck:!1})}},t.prototype._setTargetSvgClass=function(t){r.select(this._chart.getSVG()).classed(this.settings.clsTarget,t)},t.prototype._setTargetEventsEnabled=function(t){t?this._chart.enablePointerEvents():this._chart.disablePointerEvents()},t}();e.a=h},33:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),r=i(3);function s(t){return new r.a(t)}o.a.api.plugins.add("tooltip",s),e.default=s}})});