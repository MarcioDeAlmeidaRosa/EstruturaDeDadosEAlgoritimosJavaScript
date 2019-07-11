'use strict';
const hotPotato = require('./HotPotato');

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

console.log(`Testando com 7`);
let winner = hotPotato(names, 7);
console.log(`The winner is: ${winner}`);

console.log(`Testando com 1`);
winner = hotPotato(names, 1);
console.log(`The winner is: ${winner}`);

console.log(`Testando com 2`);
winner = hotPotato(names, 2);
console.log(`The winner is: ${winner}`);

console.log(`Testando com 3`);
winner = hotPotato(names, 3);
console.log(`The winner is: ${winner}`);

console.log(`Testando com 4`);
winner = hotPotato(names, 4);
console.log(`The winner is: ${winner}`);