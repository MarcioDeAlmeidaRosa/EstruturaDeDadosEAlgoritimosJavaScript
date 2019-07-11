'use strict';
const DoublyLinkedList = require('./DoublyLinkedList');

const doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList.isEmpty());
console.log('Incluindo 15 registros na lista');
doublyLinkedList.append(15);
console.log(`Primeiro registro: ${doublyLinkedList.getHead().element}`);

console.log('Incluindo 10 registros na lista');
doublyLinkedList.append(10);
console.log(`Primeiro registro: ${doublyLinkedList.getHead().element}`);
console.log(`Registro anterior do proximo: ${doublyLinkedList.getHead().next.prev.element}`);

console.log('Imprimindo registros...');
doublyLinkedList.print();
doublyLinkedList.toString();
console.log(`Tamanho da lista: ${doublyLinkedList.size()}`);

console.log(`Primeiro registro: ${doublyLinkedList.getHead().element}`);
console.log(`Registro anterior do proximo: ${doublyLinkedList.getHead().next.prev.element}`);


console.log(doublyLinkedList.indexOf(doublyLinkedList.getHead().next.element));

doublyLinkedList.insert(1, 22);
console.log('Imprimindo registros...');
doublyLinkedList.print();
doublyLinkedList.toString();
console.log(`Tamanho da lista: ${doublyLinkedList.size()}`);

doublyLinkedList.insert(0, 51);
console.log('Imprimindo registros...');
doublyLinkedList.print();
doublyLinkedList.toString();
console.log(`Tamanho da lista: ${doublyLinkedList.size()}`);

console.log(`Irei excluir: ${doublyLinkedList.getHead().element}`);
doublyLinkedList.remove(doublyLinkedList.getHead().element);
console.log('Imprimindo registros...');
doublyLinkedList.print();
doublyLinkedList.toString();
console.log(`Tamanho da lista: ${doublyLinkedList.size()}`);
console.log(`Primeiro registro: ${doublyLinkedList.getHead().element}`);
console.log(`Registro anterior do proximo: ${doublyLinkedList.getHead().next.prev.element}`);

console.log(`Irei excluir: ${doublyLinkedList.getHead().element}`);
doublyLinkedList.removeAt(0);
console.log('Imprimindo registros...');
doublyLinkedList.print();
doublyLinkedList.toString();
console.log(`Tamanho da lista: ${doublyLinkedList.size()}`);
console.log(`Primeiro registro: ${doublyLinkedList.getHead().element}`);
console.log(`Registro anterior do proximo: ${doublyLinkedList.getHead().next.prev.element}`);