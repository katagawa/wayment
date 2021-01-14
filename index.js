/* vim:set expandtab ff=unix fenc=utf-8 ts=2 */
/*!
 * wayment, Copyright (c) 2016-2021 <katagawa@gmail.com>
 * https://github.com/katagawa/wayment/blob/master/LICENSE
 */
/* index.js */
/* globals define, module, self */
/* jshint asi: true */

(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.Wayment = factory()
  }
}(typeof self !== 'undefined' ? self : this, function () {
  /**
   * `setTimeout` in a `Promise`
   * @class Wayment
   * @constructor
   */
  function Wayment () {
  }

  /**
   * @async
   * @param {?number} [n]
   * @returns {Promise<void>}
   */
  Wayment.wayment = function (n) {
    return new Promise(function (resolve) {
      let t

      t = setTimeout(
        function () {
          clearTimeout(t)
          t = null
          resolve()
        },
        (Number.isFinite(n) && (n >= 0))
          ? n
          : 1000
      )
    })
  }

  return Wayment
}))

/*
 * Local Variables:
 * coding: utf-8-unix
 * indent-tabs-mode: nil
 * mode: js
 * tab-width: 2
 * End:
 */
