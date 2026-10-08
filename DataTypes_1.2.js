'use strict';

const ITEMS = [true, 'hello', 5, 12, -200, false, false, 'word', 42, 'JS', null, undefined];

const FILTERED_ITEMS = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0 };

for (const ITEM of ITEMS) {
  const TYPE = typeof ITEM;
  if (TYPE in FILTERED_ITEMS) {
    FILTERED_ITEMS[TYPE]++;
  }
}

console.log('Результат №1: ', FILTERED_ITEMS);


const FILTERED_ITEMS2 = {};

for (const ITEM of ITEMS) {
    const TYPE = typeof ITEM;
    if (FILTERED_ITEMS2[TYPE] === undefined) {
        FILTERED_ITEMS2[TYPE] = 1;
    } else {
        FILTERED_ITEMS2[TYPE]++;
    }
};

console.log('Результат №2: ', FILTERED_ITEMS2);