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

  if (typeof exports !== 'undefined' && !exports.nodeType) {
    if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports.u = _;
  } else {
    root.u = _;
  }

  _.__ver__ = '1.0.0';
  _.ToNumber = require('./src/string/toNumber');

}).call(this);
