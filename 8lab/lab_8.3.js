'use strict'

const checkType = (value, expectedType) => {
  const typeName = expectedType.name.toLowerCase();

  if (typeof value === 'object' && value !== null) {
    if (!(value instanceof expectedType)) {
      throw new TypeError(`Очікувався екземпляр ${expectedType.name}`);
    }
  } else if (typeof value !== typeName) {
    throw new TypeError(`Очікувався тип ${typeName}, отримано ${typeof value}`);
  }
};

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];

  return (...args) => {
    if (args.length !== argTypes.length) {
      throw new TypeError(`Очікувалось ${argTypes.length} аргументів, отримано ${args.length}`);
    }

    for (let i = 0; i < argTypes.length; i++) {
      checkType(args[i], argTypes[i]);
    }

    const result = fn(...args);
    checkType(result, returnType);

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!