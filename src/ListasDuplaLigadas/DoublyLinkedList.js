module.exports = function DoublyLinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    /**
     * Adiciona um novo item ao final da lista.
     * @param {any} element - Elemento à ser adicionado no final da lista
     */
    this.append = function (element) {
        let node = new Node(element);
        let current = null;
        if (head === null) {
            //primeiro nó da lista
            head = node;
        } else {
            //atribui a cabeça para o corrente
            current = head;
            //percorre a lista com um laço até encontrar o último item
            while (current.next) {
                current = current.next;
            }
            //obtém o último item e faz next receber node para fazer a ligação
            current.next = node;
            node.prev = current;
        }
        //Atualiza o tamanho da lista
        length++;
    };

    /**
     * Insere um novo item em uma posição específica na lista
     * @param {any} position - Posição que será inserido o novo elemento
     * @param {any} element - Elemento para ser adicionado na posição definida na lista
     * @return {any} - Retorna true quando registro inserido, ou false quando não inserido
     */
    this.insert = function (position, element) {
        //verifica valores fora do intervalo
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        }
        //retorna false para dizer que o registro não foi incluído
        return false;
    };

    /**
     * Remove um item da lista na posição informada
     * @param {any} position - Posição à ser removida da lista
     * @return {any} - Retorna o registro removido na posição
     */
    this.removeAt = function (position) {
        //verifica valores fora do intervalo
        if (position > -1 && position < length) {
            let current = head;
            let previous = null;
            let index = 0;
            //remover o primeiro elemento
            if (position === 0) {
                head = current.next;
                //se houver apensa um item, atualiza o tail
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length) {
                current = tail;
                tail = current.next;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //faz a ligação de previous com o next de current: pula esse elemento
                //para removê-lo
                previous.next = current.next;
                current.next.prev = previous;
            }
            //atualiza o contador de registro
            length--;
            //retorna o registro exluído
            return current.element;
        }
        //retorna null para dizer que não houve registro excluído
        return null;
    };

    /**
     * Remove um item da lista
     * @param {any} element - Elemento à ser removida da lista
     * @return {any} - Retorna o registro removido na posição
     */
    this.remove = function (element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    };

    /**
     * Devolve o índice do elemento na lista. Se o elemento não estiver na lista, devolve -1
     * @param {any} element - Item para ser localizado o índice na lista
     * @return {any} - Retorna a posição do elemento encontrado
     */
    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    /**
     * Devolve true se a lista ligada não contiver nenhum elemento e false se o tamanho da 
     * lista ligada for maior que 0
     * @return {any} - Retorna true se não existe registro na lista, ou false se tem registro na lista
     * */
    this.isEmpty = function () {
        return length === 0;
    };

    /**
     * Devolve o número de elementos contigos na lista ligada.
     * É semelhante à propriedade length do array
     * @return {any} - Retorna o tamanho da lista
     * */
    this.size = function () {
        return length;
    };

    /**
     * Como a lista usa uma classe Node como item, devemos sobrescrever o método toString
     * padrão herdado do objeto JavaScript a fim de exibir apensa os valores dos elementos
     * @return {any} - Retorna a string formatada com o elemento corrente
     * */
    this.toString = function () {
        let current = head;
        let string = '';
        while (current) {
            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }
        return string;
    };

    /**
     * Imprime o objeto no console
     */
    this.print = function () {
        console.log(this.toString());
    };

    /**
     * Retorna o registro cabeça
     * @return {any} - Retorna o primeiro registro
     * */
    this.getHead = function () {
        return head;
    };

    /**
     * Retorna o útimo registro
     * @return {any} - Retorna o útimo registro
     * */
    this.getTail = function () {
        return tail;
    };
};