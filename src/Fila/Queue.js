/*
 * Estrutura de dados de Fila usando o princípio FIFO - first in first out (primeiro que entra primeiro que sai)
 **/

module.exports = function Queue() {
    /*
     * Array para armazenar os itens da pilha
     **/
    let items = [];

    /**
     * Adiciona elemento no final da fila
     * @param {any} elemet - item à ser inserido na fila
     */
    this.queue = function (elemet) {
        items.push(elemet);
    };

    /*
     * Remove o item no início da fila
     * */
    this.dequeue = function () {
        return items.shift();
    };

    /*
     * Devolve o elemento que está no início da fila, o elemento não é removido da fila
     * */
    this.front = function () {
        return items[0];
    };

    /*
     * Devolve true se a fila não conter nenhum elemento, e false se a fila conter algum elemento
     * */
    this.isEmpty = function () {
        return items.length === 0;
    };

    /*
     * remove todos os elementos da fila
     * */
    this.clear = function () {
        items = [];
    };

    /*
     * Devolve o número de elementos contidos na pilha
     * */
    this.size = function () {
        return items.length;
    };

    /*
     * Imprime o conteúdo da pilha
     * */
    this.print = function () {
        console.log(items.toString());
    };
};