/**
 * Implement stack using array
 * https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1?page=1&category=Stack&sortBy=submissions
 */

class TwoStacks {
    // constructor for twoStacks()
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Function to push an integer into the stack1.
    push1(x) {
        // code here
        this.stack1.push(x);
    }

    // Function to push an integer into the stack2.
    push2(x) {
        // code here
        this.stack2.push(x);
    }

    // Function to remove an element from top of the stack1.
        
    pop1() {
        // code here
        let len = this.stack1.length;
        return len === 0 ? -1 : this.stack1.pop();
    }

        
    // Function to remove an element from top of the stack2.
    pop2() {
        // code here
        let len = this.stack2.length;
        return len === 0 ? -1 : this.stack2.pop();
    }
}