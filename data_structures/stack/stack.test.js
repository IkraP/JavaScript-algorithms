const Stack = require("./stack");

describe("stack data structure", () => {
  test("should return a new stack with a quantity property set to 0", () => {
    const testStack = new Stack();
    expect(testStack.quantity).toBe(0);
  });
  test("should return a new stack with storage property set to an empty object", () => {
    const testStack = new Stack();
    expect(testStack.storage).toEqual({});
  });
  test("should return a new stack with a maxSize property that is given as an argument when new stack is created", () => {
    const maxSize = 10;
    const testStack = new Stack(maxSize);
    expect(testStack.maxSize).toBe(10);
  });
  test("should have a push method that add items to the stack storage and increases the quantity", () => {
    const maxSize = 10;
    const testStack = new Stack(maxSize);
    testStack.push("a brown handbag");
    expect(testStack.storage).toEqual({ 1: "a brown handbag" });
    expect(testStack.quantity).toBe(1);
  });
  test("should check whether maxSize of stack has been reached before pushing items onto the stack storage", () => {
    const maxSize = 2;
    const testStack = new Stack(maxSize);
    testStack.push("a brown handbag");
    testStack.push("a pink scarf");
    testStack.push("a yellow scarf");
    expect(testStack.storage).toEqual({
      1: "a brown handbag",
      2: "a pink scarf",
    });
    expect(testStack.quantity).toBe(2);
    expect(testStack.maxSize).toBe(2);
  });
  test("should have a pop method that removes items from the storage providing storage is not empty", () => {
    const maxSize = 1;
    const testStack = new Stack(maxSize);
    testStack.push("a brown handbag");
    const removedItem = testStack.pop();
    expect(testStack.storage).toEqual({});
    expect(testStack.quantity).toBe(0);
    expect(removedItem).toEqual("a brown handbag");
  });
  test("should remove the last item in the storage when multiple items are removed from the stack", () => {
    const maxSize = 3;
    const testStack = new Stack(maxSize);
    testStack.push("a brown handbag");
    testStack.push("a pink scarf");
    testStack.push("a dress");
    const removedItem = testStack.pop();
    expect(testStack.storage).toEqual({
      1: "a brown handbag",
      2: "a pink scarf",
    });
    expect(testStack.quantity).toEqual(2);
    expect(removedItem).toEqual("a dress");
  });
  test("should have an isEmpty method that returns a boolean, checking whether the stack is empty and quantity is 0", () => {
    const maxSize = 10;
    const testStack = new Stack(maxSize);
    const checkStack = testStack.isEmpty();

    expect(testStack.storage).toEqual({});
    expect(testStack.quantity).toBe(0);
    expect(checkStack).toBe(true);
  });
  test("should have a isFull method that returns a boolean when the storage is full when the the current quantity is equal to the maxSize", () => {
    const maxSize = 1;
    const testStack = new Stack(maxSize);
    testStack.push("a brown handbag");
    const checkStack = testStack.isFull();

    expect(testStack.storage).toEqual({ 1: "a brown handbag" });
    expect(testStack.quantity).toBe(1);
    expect(checkStack).toBe(true);
  });
  test("should have a peek method that will show the item that is on the top of the stack storage", () => {
    const maxSize = 5;
    const testStack = new Stack(maxSize);
    testStack.push("apple");
    testStack.push("orange");
    testStack.push("banana");
    testStack.push("kiwi");
    const stackStorage = { 1: "apple", 2: "orange", 3: "banana", 4: "kiwi" };
    const stackPeek = testStack.peek();
    expect(testStack.storage).toEqual(stackStorage);
    expect(testStack.quantity).toBe(4);
    expect(stackPeek).toBe("kiwi");
  });
});
