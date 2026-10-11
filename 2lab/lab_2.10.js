'use strict';

const phoneHash = {
  'Vlad': '+380445554433',
  'Bob': '+380445554434',
  'John': '+380445554435'
};

function findPhoneByName(name) {
  return phoneHash[name];
}

console.log(findPhoneByName('Vlad'));
console.log(findPhoneByName('Bob'));