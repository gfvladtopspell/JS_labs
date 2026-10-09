'use strict';

function inc(n) {
    return n + 1;
};

let a = 5;
let b = inc(a);

console.dir({a, b});






function inc2(num) {
    num.n += 1;
};

const obj1 = { n: 5 };
inc2(obj1);
console.dir(obj1);