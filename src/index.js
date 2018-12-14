export default class {
  constructor() {
    this.__listeners__ = {};
  }
  destroy() {
    this.__listeners__ = null;
  }
  on(inName, inHandler, inContext) {
    const map = this.__listeners__;
    const listeners = (map[inName] = map[inName] || []);
    listeners.push({
      sender: this,
      handler: inHandler,
      context: inContext
    });
    return {
      destroy: function() {
        this.off(inName, inHandler, inContext);
      }
    };
  }
  off(inName, inHandler, inContext) {
    const listeners = this.__listeners__[inName];
    const _listeners = listeners.slice(0);
    if (inHandler) {
      _listeners.forEach((listener, index) => {
        if (listener.handler === inHandler && (!inContext || listener.context === inContext)) {
          listeners.splice(index, 1);
        }
      });
    } else {
      listeners.length = 0;
    }
  }
  emit(inName, inData) {
    const listeners = this.__listeners__[inName];
    if (listeners && listeners.length > 0) {
      for (let index = 0; index < listeners.length; index++) {
        const { handler, context, sender } = listeners[index];
        if (handler.call(context || sender, sender, inData) === false) {
          break;
        }
        handler.__once__ && this.off(inName, handler, context);
      }
    }
  }
  once(inName, inHandler, inContext) {
    inHandler.__once__ = true;
    return this.on(inName, inHandler, inContext);
  }
  one(inName, inHandler, inContext) {
    const map = this.__listeners__;
    if (!map[inName]) {
      return this.on(inName, inHandler, inContext);
    }
  }
}
