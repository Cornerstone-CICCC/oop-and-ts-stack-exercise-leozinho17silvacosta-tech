// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function lowercaseStrings(stack) {
  const tempStack = new Stack();

// MAIN STACK:

  while (!stack.isEmpty()) {
    const removed = stack.pop()

    if(typeof removed === "string") {
      tempStack.push(removed.toLowerCase())
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

stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack)
console.log(stack.printStack()) // ["hello", "world", "good", "morning"]