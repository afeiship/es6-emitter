const slice = Array.prototype.slice;

export default class {
  constructor() {
    this.__listeners__ = {};
  }
  on(inName, inHandler, inContext) {
    var map = this.__listeners__;
    var listeners = (map[inName] = map[inName] || []);
    listeners.push({
      owner: this,
      handler: inHandler,
      context: inContext
    });
  }
  off(inName, inHandler, inContext) {
    var listeners = this.__listeners__[inName];
    var _listeners = listeners.slice(0);
    if (inHandler) {
      _listeners.forEach((listener, index) => {
        if (
          listener.handler === inHandler &&
          (!inContext || listener.context === inContext)
        ) {
          listeners.splice(index, 1);
        }
      });
    } else {
      listeners.length = 0;
    }
  }
  emit(inName, inArgs) {
    var listeners = this.__listeners__[inName];
    if (listeners && listeners.length > 0) {
      for (let index = 0; index < listeners.length; index++) {
        const { handler, context, owner } = listeners[index];
        handler.call(context || owner, owner, inArgs);
      }
    }
  }
}
