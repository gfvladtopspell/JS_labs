'use strict';

function average(a, b) {
    return (a + b) / 2;
};

function square(x) {
    return x ** 2;
};

function cube(x) {
    return x ** 3;
};

function calculate() {
    const result = [];
    for (let i = 0; i <= 9; i++) {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb);
        result.push(avg);
    }
    return result;
};

console.log(calculate());