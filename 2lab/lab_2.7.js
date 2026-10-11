'use strict';

const obj1 = { name: 'Marcus' };

let obj2 = { name: 'Antoninus' };

obj1.name = 'Steve';
obj2.name = 'Bob';

obj2 = { name: 'John' };

console.log(obj1);
console.log(obj2);