class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.storage = {};
    this.frontIndex = 0;
    this.backIndex = -1;
  }
  storageLength() {
    /* function calculates the length of the queue by subtracting the last index and front index + 1
    Example: backIndex (+3 items) = -1 + 3 = 2 therefore 3 items in the queue (0, 1, 2)
    frontIndex = 0
    therefore length: 2 - 0 + 1 = 3
     */
    return this.backIndex - this.frontIndex + 1;
  }
  enQueue(item) {
    /* function to add an item to the back of the queue, only if queue has not surpassed its maxSize.
  backIndex is increased by one to reflect the addition of item to queue and then item added to storage at the position of the backIndex */
    if (this.storageLength() < this.maxSize) {
      this.storage[++this.backIndex] = item;
    }
  }

  deQueue() {
    /* function to remove items from the front of the queue, only if the queue has items in storage.
    The items is deleted from the frontIndex position adn the frontIndex is increased by 1 as items are moved down the queue */
    if (this.storageLength() !== 0) {
      delete this.storage[this.frontIndex++];
    }
  }

  isEmpty() {
    // function to return a boolean of true when queue is empty
    return !this.storageLength();
  }

  isFull() {
    // function to return a boolean of true when queue has reached maxSize
    return this.storageLength() === this.maxSize ? true : false;
  }

  peek() {
    //function to return the item at the front of the queue without removal
    return this.storage[this.frontIndex];
  }
}

module.exports = Queue;
