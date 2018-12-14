import EventEmitter from 'event-emitter';

class Es6Emitter {
  constructor() {
    this.__listeners__ = {};
  }
  destroy() {
    this.__listeners__ = null;
  }
}

export default EventEmitter.mixin(Es6Emitter);
