module.exports = function LinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;

    let head = null;

    /**
     * Adiciona um novo item ao final da lista.
     * @param {any} element - Elemento � ser adicionado no final da lista
     */
    this.append = function (element) {
        let node = new Node(element);
        let current = null;
        if (head === null) {
            //primeiro n� da lista
            head = node;
        } else {
            //atribui a cabe�a para o corrente
            current = head;
            //percorre a lista com um la�o at� encontrar o �ltimo item
            while (current.next) {
                current = current.next;
            }
            //obt�m o �ltimo item e faz next receber node para fazer a liga��o
            current.next = node;
        }
        //Atualiza o tamanho da lista
        length++;
    };

    /**
     * Insere um novo item em uma posi��o espec�fica na lista
     * @param {any} position - Posi��o que ser� inserido o novo elemento
     * @param {any} element - Elemento para ser adicionado na posi��o definida na lista
     * @return {any} - Retorna true quando registro inserido, ou false quando n�o inserido
     */
    this.insert = function (position, element) {
        //verifica valores fora do intervalo
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous = null;
            let index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }
        //retorna false para dizer que o registro n�o foi inclu�do
        return false;
    };

    /**
     * Remove um item da lista na posi��o informada
     * @param {any} position - Posi��o � ser removida da lista
     * @return {any} - Retorna o registro removido na posi��o
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
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //faz a liga��o de previous com o next de current: pula esse elemento
                //para remov�-lo
                previous.next = current.next;
            }
            //atualiza o contador de registro
            length--;
            //retorna o registro exlu�do
            return current.next;
        }
        //retorna null para dizer que n�o houve registro exclu�do
        return null;
    };

    /**
     * Remove um item da lista
     * @param {any} element - Elemento � ser removida da lista
     * @return {any} - Retorna o registro removido na posi��o
     */
    this.remove = function (element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    };

    /**
     * Devolve o �ndice do elemento na lista. Se o elemento n�o estiver na lista, devolve -1
     * @param {any} element - Item para ser localizado o �ndice na lista
     * @return {any} - Retorna a posi��o do elemento encontrado
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
     * Devolve true se a lista ligada n�o contiver nenhum elemento e false se o tamanho da 
     * lista ligada for maior que 0
     * @return {any} - Retorna true se n�o existe registro na lista, ou false se tem registro na lista
     * */
    this.isEmpty = function () {
        return length === 0;
    };

    /**
     * Devolve o n�mero de elementos contigos na lista ligada.
     * � semelhante � propriedade length do array
     * @return {any} - Retorna o tamanho da lista
     * */
    this.size = function () {
        return length;
    };

    /**
     * Como a lista usa uma classe Node como item, devemos sobrescrever o m�todo toString
     * padr�o herdado do objeto JavaScript a fim de exibir apensa os valores dos elementos
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
     * Retorna o registro cabe�a
     * @return {any} - Retorna o primeiro registro
     * */
    this.getHead = function () {
        return head;
    };
};