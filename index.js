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
