'use strict';

const sum = (...args) => {

    let total = 0;
    let i = 0;

    do {
        total += args[i];
        i++;
    } while (i < args.length);

    return total;
};

const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0 === NaN(number + undefined)
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

console.log(`The result: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}
e = ${e}`);