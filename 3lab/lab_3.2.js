'use strict';

const generateKey = (length, characters) => {

  let result = '';
  const charsLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    result += characters[randomIndex];
  }
  return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(5, characters))