const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const list = new ListNode(element);
    if (!this.start) {
      this.start = list;
      this.end = list;
    } else {
      this.end.next = list;
      this.end = list;
    }
    this.length++;
  }

  dequeue() {
    if (!this.start) {
      return null;
    }
    const dequeued = this.start;
    this.start = dequeued.next;
    this.length--;
    return dequeued.value;
  }
}

module.exports = Queue;
