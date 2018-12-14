# es6-emitter
> Emitter based on es6 for extends.

## resouces:
+ https://github.com/jeromeetienne/microevent.js
+ https://github.com/kutyel/es6-emitter/blob/master/index.js

## install:
```bash
npm install -S afeiship/es6-emitter --registry=https://registry.npm.taobao.org
```

## apis:
| name | args                  | description         |
|------|-----------------------|---------------------|
| on   | name,handler,context  | register an event   |
| off  | name,handler,context  | unregister an event |
| emit | name,data             | fire an event       |
| one  | name, handler,context | register only once  |
| once | name, handler,context | excute only once    |

## usage:
```js
import Es6Emitter from 'es6-emitter';

const event = new Es6Emitter();

// register:
const res = event.on('event1',(_, data)=>{
  console.log(data)
});

// emit:
event.emit('event1',{ name:'xiaoming'});

// off:
event.destroy();

// one:
event.one('event-one',()=>{})

// once
event.once('event-once',()=>{})
```
