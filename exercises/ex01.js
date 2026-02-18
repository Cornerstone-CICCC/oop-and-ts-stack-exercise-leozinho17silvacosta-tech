// Create a function called removeEvenNums that removes even numbers from the stack
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeEvenNums(stack) {
  const tempStack = new Stack();

// MAIN STACK:

  while (!stack.isEmpty()) {
    const removed = stack.pop()

    if(removed % 2 !== 0) {
      tempStack.push(removed)
    }
  }

// TEMP STACK:

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop()
    if(removed !== undefined) {
      stack.push(removed)
    }
  }
}

// Create stack
const stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(1);
stack.push(3);
stack.push(6);

removeEvenNums(stack)
console.log(stack.printStack()) // [5, 1, 3]