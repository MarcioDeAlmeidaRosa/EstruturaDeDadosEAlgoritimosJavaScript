'use strict';
const Queue = require('./Queue');

let queue = new Queue();

console.log('Validando se a fila esta vazia');
console.log(queue.isEmpty());

queue.enqueue('John', 2);
queue.enqueue('Jack', 1);
queue.enqueue('Camila', 1);

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());

console.log('Removendo itens da fila');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log('Restando na fila');
queue.print();