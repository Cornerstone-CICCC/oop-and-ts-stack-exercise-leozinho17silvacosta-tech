// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  const tempStack = new Stack()
  const duplicate = new Stack()
  const reverseStack = new Stack()

// MAIN STACK:

  while (!stack.isEmpty()) {
    const current = stack.pop()
    let isDuplicate = false

// TEMP STACK:

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop()

    if (removed === current) {
      isDuplicate = true
    }
    duplicate.push(removed)
  }

  while (!duplicate.isEmpty()) {
    tempStack.push(duplicate.pop())
  }
  
  if (!isDuplicate) {
    tempStack.push(current)
  }
}

// REVERSE STACK:
  
  while (!tempStack.isEmpty()) {
    reverseStack.push(tempStack.pop())
  }

// RETURN TO MAIN STACK:

  while (!reverseStack.isEmpty()) {
    stack.push(reverseStack.pop())
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [3, 1, 5, 2]