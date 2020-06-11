class Stack {
  constructor(maxSize) {
    this.quantity = 0;
    this.storage = {};
    this.maxSize = maxSize;
  }

  push(item) {
    //function to add items to the stack storage providing stack is not already full
    if (this.quantity < this.maxSize) {
      this.storage[++this.quantity] = item;
    }
  }

  pop() {
    // function to remove items from the stack storage providing stack has items to remove
    const itemToRemove = this.storage[this.quantity];
    delete this.storage[this.quantity];
    this.quantity--;
    return itemToRemove;
  }

  isEmpty() {
    //function to check whether the stack is empty and return a boolean
    return this.quantity === 0;
  }

  isFull() {
    //function to check whether the stack is full and return a boolean
    return this.quantity === this.maxSize;
  }

  peek() {
    //function to show the item that is at the top of the stack
    return this.storage[this.quantity];
  }
}

module.exports = Stack;
