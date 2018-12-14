"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {
  function _default() {
    _classCallCheck(this, _default);

    this.__listeners__ = {};
  }

  _createClass(_default, [{
    key: "on",
    value: function on(inName, inHandler, inContext) {
      var map = this.__listeners__;
      var listeners = map[inName] = map[inName] || [];
      listeners.push({
        owner: this,
        handler: inHandler,
        context: inContext
      });
    }
  }, {
    key: "off",
    value: function off(inName, inHandler, inContext) {
      var listeners = this.__listeners__[inName];
      var _listeners = listeners.slice(0);
      if (inHandler) {
        _listeners.forEach(function (listener, index) {
          if (listener.handler === inHandler && (!inContext || listener.context === inContext)) {
            listeners.splice(index, 1);
          }
        });
      } else {
        listeners.length = 0;
      }
    }
  }, {
    key: "emit",
    value: function emit(inName, inData) {
      var listeners = this.__listeners__[inName];
      if (listeners && listeners.length > 0) {
        for (var index = 0; index < listeners.length; index++) {
          var _listeners$index = listeners[index],
              handler = _listeners$index.handler,
              context = _listeners$index.context,
              owner = _listeners$index.owner;

          if (handler.call(context || owner, owner, inData) === false) {
            break;
          }
        }
      }
    }
  }]);

  return _default;
}();

exports.default = _default;