const Stack = require("./stack");

describe("stack data structure", () => {
  test("should return a new stack with a quantity property set to 0", () => {
    const testStack = new Stack();
    console.log(testStack);
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
});
