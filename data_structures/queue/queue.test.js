const Queue = require("./queue");

test("should have a Queue class with a maxSize property", () => {
  const maxSize = 1;
  const testQueue = new Queue(maxSize);
  expect(testQueue.maxSize).toBe(1);
});
