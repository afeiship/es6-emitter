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
