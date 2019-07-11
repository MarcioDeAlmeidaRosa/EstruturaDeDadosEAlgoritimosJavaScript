'use strict';
const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();
console.log(linkedList.isEmpty());
console.log('Incluindo 2 registros na lista');
linkedList.append(15);
linkedList.append(10);
console.log('Imprimindo registros...');
linkedList.print();
linkedList.toString();
console.log(`Tamanho da lista: ${linkedList.size()}`);

console.log(`Primeiro registro: ${JSON.stringify(linkedList.getHead())}`);


console.log(linkedList.indexOf(linkedList.getHead().next.element));

linkedList.insert(1, 22);
console.log('Imprimindo registros...');
linkedList.print();
linkedList.toString();
console.log(`Tamanho da lista: ${linkedList.size()}`);

linkedList.insert(0, 51);
console.log('Imprimindo registros...');
linkedList.print();
linkedList.toString();
console.log(`Tamanho da lista: ${linkedList.size()}`);

console.log(`Irei excluir: ${linkedList.getHead().element}`);
linkedList.remove(linkedList.getHead().element);
console.log('Imprimindo registros...');
linkedList.print();
linkedList.toString();
console.log(`Tamanho da lista: ${linkedList.size()}`);
console.log(`Primeiro registro: ${JSON.stringify(linkedList.getHead())}`);

console.log(`Irei excluir: ${linkedList.getHead().element}`);
linkedList.removeAt(0);
console.log('Imprimindo registros...');
linkedList.print();
linkedList.toString();
console.log(`Tamanho da lista: ${linkedList.size()}`);
console.log(`Primeiro registro: ${JSON.stringify(linkedList.getHead())}`);