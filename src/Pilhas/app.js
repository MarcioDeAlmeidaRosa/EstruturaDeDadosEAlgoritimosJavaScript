'use strict';
const Stack = require('./Stack');

let stack = new Stack();

console.log('Validando se a pilha esta vazia');
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log('Recuperando o ultimo elemento inclído na pilha, este não é removido');
console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);
stack.print();

console.log('Removendo itens da pilha');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
stack.print();
console.log(stack);
