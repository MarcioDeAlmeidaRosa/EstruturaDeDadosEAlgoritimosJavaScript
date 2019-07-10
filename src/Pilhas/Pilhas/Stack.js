/*
 * Estrutura de dados de Pilha usando o princ�pio LIFO - last in first out (ultimo que entra primeiro que sai)
 **/

module.exports = function Stack() {
    /*
     * Array para armazenar os itens da pilha
     **/
    let items = [];

    /**
     * Adiciona elemento no topo da pilha
     * @param {any} elemet - item � ser inserido na pilha
     */
    this.push = function (elemet) {
        items.push(elemet);
    };

    /*
     * Remove o item no topo da pilha
     * */
    this.pop = function () {
        return items.pop();
    };

    /*
     * Devolve o elemento que est� no topo da pilha, o elemento n�o � removido da pilha
     * */
    this.peek = function () {
        return items[this.size() - 1];
    };

    /*
     * Devolve true se a pilha n�o conter nenhum elemento, e false se a pilha conter algum elemento
     * */
    this.isEmpty = function () {
        return items.length === 0;
    };

    /*
     * remove todos os elementos da pilha
     * */
    this.clear = function () {
        items = [];
    };

    /*
     * Devolve o n�mero de elementos contidos na pilha
     * */
    this.size = function () {
        return items.length;
    };

    /*
     * Imprime o conte�do da pilha
     * */
    this.print = function () {
        console.log(items.toString());
    };
};