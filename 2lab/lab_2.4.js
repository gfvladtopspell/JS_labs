'use strict';

function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

const array = range (15, 30);
console.log(array);