const Queue = require("./queue");

describe("Queue data structure", () => {
  test("should return a maxSize property that is passed as an argument when new Queue is created", () => {
    const maxSize = 1;
    const testQueue = new Queue(maxSize);
    expect(testQueue.maxSize).toBe(1);
  });
  test("should return a storage property when a new Queue is creates - returns an empty object", () => {
    const maxSize = 5;
    const testQueue = new Queue(maxSize);
    expect(testQueue.storage).toEqual({});
  });
  test("should have a front and back property that represents the index of the front and back of the queue respectively", () => {
    const maxSize = 10;
    const testQueue = new Queue(maxSize);
    expect(testQueue).toHaveProperty("frontIndex");
    expect(testQueue).toHaveProperty("backIndex");
  });
  test("should have an enQueue method that adds one item to the back of the queue providing the maxSize has not be fulfilled", () => {
    const maxSize = 10;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("Ikra");
    expect(testQueue.storage).toEqual({ "0": "Ikra" });
  });
  test("should have a storageLength method that returns the length of the storage in the queue", () => {
    const maxSize = 2;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("hello");
    testQueue.enQueue("world");
    expect(testQueue.storage).toEqual({ 0: "hello", 1: "world" });
    expect(testQueue.storageLength()).toBe(2);
  });
  test("should not add items to the queue when the maxSize has been exceeded", () => {
    const maxSize = 2;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("hello");
    testQueue.enQueue("world");
    testQueue.enQueue("computer");
    expect(testQueue.storage).toEqual({ 0: "hello", 1: "world" });
    expect(testQueue.storageLength()).toBe(2);
  });
  test("should increase the backIndex in respect to amount of items that have been added to the queue", () => {
    const maxSize = 3;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("hello");
    testQueue.enQueue("world");
    expect(testQueue.backIndex).toBe(1);
    expect(testQueue.storageLength()).toBe(2);
  });
  test("should have a deQueue function that removes items from the front of the queue, only if items are present in the queue", () => {
    const maxSize = 3;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("hello");
    testQueue.enQueue("world");
    testQueue.deQueue();
    expect(testQueue.storageLength()).toBe(1);
    expect(testQueue.storage).toEqual({ 1: "world" });
  });
  it("should update the front and back index when removing items from the front of the queue", () => {
    const maxSize = 3;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("Ikra");
    testQueue.enQueue("hello");
    testQueue.enQueue("world");
    testQueue.deQueue();
    expect(testQueue.frontIndex).toBe(1);
    expect(testQueue.backIndex).toBe(2);
    expect(testQueue.storageLength()).toBe(2);
  });
  test("should have an isEmpty method that will return a boolean of true or false reflecting queue storage", () => {
    const maxSize = 1;
    const testQueue = new Queue(maxSize);
    expect(testQueue.isEmpty()).toBe(true);
    testQueue.enQueue("Ikra");
    expect(testQueue.isEmpty()).toBe(false);
    expect(testQueue.storageLength()).toBe(1);
  });
  test("should have an isFull method that will return a boolean of true when the queue is full and false when the queue has not reached its maxSize", () => {
    const maxSize = 2;
    const testQueue = new Queue(maxSize);
    expect(testQueue.isFull()).toBe(false);
    testQueue.enQueue("Ikra");
    testQueue.enQueue("hello");
    expect(testQueue.storageLength()).toBe(2);
    expect(testQueue.isFull()).toBe(true);
  });
  test("should have a peek method that returns the item that is at the front of the queue without removal from queue", () => {
    const maxSize = 2;
    const testQueue = new Queue(maxSize);
    testQueue.enQueue("Ikra");
    testQueue.enQueue("hello");
    expect(testQueue.peek()).toBe("Ikra");
    expect(testQueue.storageLength()).toBe(2);
  });
});
