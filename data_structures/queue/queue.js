class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.storage = {};
    this.frontIndex = 0;
    this.backIndex = -1;
  }
}

module.exports = Queue;
