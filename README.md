# es6-emitter
> Emitter based on es6 for extends.

## resouces:
+ https://github.com/jeromeetienne/microevent.js
+ https://github.com/kutyel/es6-emitter/blob/master/index.js

## install:
```bash
npm install -S afeiship/es6-emitter --registry=https://registry.npm.taobao.org
```

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
event.destroy(); // or use off method(not recomend)

// one:
event.one('event-one',()=>{})

// once
event.once('event-once',()=>{})
```
