'use strict';

const dataBase = [
  { name: 'Vlad', phone: '+380445554433' },
  { name: 'Bob', phone: '+380445554434' },
  { name: 'John', phone: '+380445554435' }
];

function findPhoneNumber(name) {
  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].name === name) {
        return dataBase[i].phone;
    }
  }
}

console.log(findPhoneNumber('Bob'));
console.log(findPhoneNumber('Vlad'));