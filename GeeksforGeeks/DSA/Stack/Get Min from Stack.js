/**
 * Get Min from Stack
https://www.geeksforgeeks.org/problems/get-minimum-element-from-stack/1?page=1&category=Stack&sortBy=submissions
 */

class SpecialStack {
    constructor() {
        // Define Stack
        this.stack = [];
        this.minStack = [];
        this.size = -1;
    }

    push(x) {
        // Push element onto the stack
        this.size++;
        this.stack[this.size] = x;
        let minStackLen = this.minStack.length;
        if(minStackLen === 0 || this.minStack[minStackLen - 1] >= x){
            this.minStack.push(x);
        }
    }

    pop() {
        // Pop the top element from the stack
        if(this.size !== -1) {
            let popedEl = this.stack.pop();
            this.size--;
            let minStackLen = this.minStack.length;
            if(this.minStack[minStackLen - 1] === popedEl){
                this.minStack.pop();
            }
        }
    }

    peek() {
        // Return the top element of the stack
        if(this.size === -1){
            return -1;
        }
        return this.stack[this.size];
    }

    isEmpty() {
        // Check if the stack is empty
        return this.size === -1;
    }

    getMin() {
        // Get the minimum element in the stack
        let minStackLen = this.minStack.length;
        return minStackLen === 0 ? -1 : this.minStack[minStackLen - 1];
    }
}
