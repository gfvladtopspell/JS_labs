'use strict';

const array = () => {
    const resultArray = [];
    const index = (arg) => {
        return resultArray[arg];
    }

    index.push = (element) => {
        return resultArray.push(element);
    }

    index.pop = (element) => {
        return resultArray.pop(element);
    }

    return index;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first

console.log(arr.pop()); // undefined