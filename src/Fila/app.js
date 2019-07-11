'use strict';
const Queue = require('./Queue');

let queue = new Queue();

console.log('Validando se a fila esta vazia');
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());

console.log('Removendo itens da fila');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log('Restando na fila');
queue.print();