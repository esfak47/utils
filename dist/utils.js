/*
 * Utils
 * (c) 2016 Tony Wang
 * Version '1.0.0'
 * @preserve
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.s = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Utils
 * (c) 2016 Tony Wang
 * Version '1.0.0'
 * @preserve
 */

(function () {

  var root = this;

  /**
   * Naked function reference for surrogate-prototype-swapping.
   Create a safe reference to the Utils object for use below.
   * @param obj
   * @returns {u}
   */

  var _ = function (obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  _.__ver__ = '1.0.0';
  _.toNumber = require('./src/string/toNumber');

  if (typeof window === 'undefined') {
    root.u = _;
  } else {
    module.exports = _;
  }
})();

},{"./src/string/toNumber":2}],2:[function(require,module,exports){
module.exports = function toNumber(num, precision) {
  if (num == null) return 0;
  var factor = Math.pow(10, isFinite(precision) ? precision : 0);
  return Math.round(num * factor) / factor;
};

},{}]},{},[1])(1)
});