'use strict';

const pipe = (...args) => {
    for(const key of args) {
        if (typeof key !== 'function') {
            throw new Error("Not a function");
        }
    }
    return x => args.reduce((acc, fn) => fn(acc), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const fn = pipe(inc, twice, cube, 5);
const x = fn(5);

console.log(x);