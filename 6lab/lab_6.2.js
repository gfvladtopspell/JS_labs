'use strict';

const compose = (...fns) => {

  const errorHandlers = [];

  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError("Not a function");
    }
  }

  const composed = (initialValue) => {
    let result = initialValue;

    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        const currentFn = fns[i];
        result = currentFn(result);
      }
      return result;
    } catch (error) {
      for (const handler of errorHandlers) {
        handler(error);
      }
      return undefined;
    }
  };

  composed.on = (eventName, callback) => {
    if (eventName === 'error' && typeof callback === 'function') {
      errorHandlers.push(callback);
    }
    return composed;
  };

  return composed;
};

const inc = x => x + 1;
const brokenFn = x => { throw new Error("Error"); };
const double = x => x * 2;

const goodF = compose(inc, double);
console.log(goodF(5));

const badF = compose(inc, brokenFn, double);

badF.on('error', (err) => {
  console.log('Помилка:', err.message);
});

const result = badF(5);
console.log(result);