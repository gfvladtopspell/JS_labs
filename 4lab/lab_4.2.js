'use strict';

const max = (arg) => {
    
    let maximum = -Infinity;
    for(const max of arg) {
        for (const value of max) {
            if(value > maximum) {
                maximum = value;
            }
        }
    }
    return maximum;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(`The result: ${m}`);