const Queue = require('./Queue');

module.exports = function HotPotato(nameList, num) {

    let queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        eliminated = queue.dequeue();

        console.log(`${eliminated} was eliminated from the Hot Potato game...`);
    }

    return queue.dequeue();
};