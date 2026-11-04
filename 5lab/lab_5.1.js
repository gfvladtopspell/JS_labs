'use strict';

const seq = (arg) => {
    const array = [arg];

    const checkFunc = (arg) => {
        if (typeof arg === 'function') {
            array.push(arg);
            return checkFunc;
        
        } else if (typeof arg === 'number') {
            let result = arg;
            for (let i = array.length - 1; i >= 0; i--) {
                result = array[i](result);
            }
            return result;
        }
    }
    return checkFunc;
}

console.log(seq(x => x + 7)(x => x * 2)(5)); // 17
console.log(seq(x => x * 2)(x => x + 7)(5)); // 24
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); // 3