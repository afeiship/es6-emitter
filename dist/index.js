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
    key: "destroy",
    value: function destroy() {
      this.__listeners__ = null;
    }
  }, {
    key: "on",
    value: function on(inName, inHandler, inContext) {
      var _this = this;

      var map = this.__listeners__;
      var listeners = map[inName] = map[inName] || [];
      listeners.push({
        sender: this,
        handler: inHandler,
        context: inContext
      });
      return {
        destroy: function destroy() {
          _this.off(inName, inHandler, inContext);
        }
      };
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
              sender = _listeners$index.sender;

          if (handler.call(context || sender, sender, inData) === false) {
            break;
          }
          handler.__once__ && this.off(inName, handler, context);
        }
      }
    }
  }, {
    key: "once",
    value: function once(inName, inHandler, inContext) {
      inHandler.__once__ = true;
      return this.on(inName, inHandler, inContext);
    }
  }, {
    key: "one",
    value: function one(inName, inHandler, inContext) {
      var map = this.__listeners__;
      if (!map[inName]) {
        return this.on(inName, inHandler, inContext);
      }
    }
  }]);

  return _default;
}();

exports.default = _default;