'use strict';

function createUser(name, city) {
  return { name, city };
}

const user = createUser('Vlad', 'Boryspil');
console.log(user);