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
});
