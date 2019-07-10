/*
 * Estrutura de dados de Fila usando o princípio FIFO - first in first out (primeiro que entra primeiro que sai) seguindo a prioridade
 **/

module.exports = function Queue() {
    /*
     * Array para armazenar os itens da pilha
     **/
    let items = [];

    /**
     * Objeto da fila
     * @param {any} elemet - item da fila
     * @param {any} priority - prioridade do item na fila
     */
    function QueueElement(elemet, priority) {
        this.elemet = elemet;
        this.priority = priority;
    };

    /**
     * Adiciona elemento no final da fila
     * @param {any} elemet - item à ser inserido na fila
     * @param {any} priority - prioridade para ser inserido na fila
     */
    this.queue = function (elemet, priority) {
        let queueElement = new QueueElement(elemet, priority);

        let added = false;

        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            items.push(queueElement);
        }
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
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].elemet} - ${items[i].priority}`);
        }
    };
};