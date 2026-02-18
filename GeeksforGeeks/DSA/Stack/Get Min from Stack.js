/**
 * Get Min from Stack
https://www.geeksforgeeks.org/problems/get-minimum-element-from-stack/1?page=1&category=Stack&sortBy=submissions
 */
/**
 * time complexity: O(1) for all operations
 * space complexity: O(n) in worst case when all elements are in decreasing order
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
        if (minStackLen === 0 || this.minStack[minStackLen - 1] >= x) {
            this.minStack.push(x);
        }
    }

    pop() {
        // Pop the top element from the stack
        if (this.size !== -1) {
            let popedEl = this.stack.pop();
            this.size--;
            let minStackLen = this.minStack.length;
            if (this.minStack[minStackLen - 1] === popedEl) {
                this.minStack.pop();
            }
        }
    }

    peek() {
        // Return the top element of the stack
        if (this.size === -1) {
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

/**
 * time complexity: O(1) for all operations
 * space complexity: O(1) as we are using only one variable to store the minimum element
 */

class SpecialStack {
    constructor() {
        // Define Stack
        this.stack = [];
        this.min = Infinity;
    }

    push(x) {
        // Push element onto the stack
        if (this.stack.length === 0) {
            this.stack.push(x);
            this.min = x;
        }
        else {
            if (x < this.min) {
                let modVal = 2 * x - this.min;
                this.stack.push(modVal);
                this.min = x;
            }
            else {
                this.stack.push(x);
            }
        }
    }

    pop() {
        // Pop the top element from the stack
        if (this.stack.length !== 0) {
            let popedVal = this.stack.pop();
            if (popedVal < this.min) {
                this.min = this.min * 2 - popedVal;
            }
        }
    }

    peek() {
        // Return the top element of the stack
        if (this.stack.length === 0) {
            return -1;
        }
        let topElement = this.stack[this.stack.length - 1];
        return this.min < topElement ? topElement : this.min;
    }

    isEmpty() {
        // Check if the stack is empty
        return this.stack.length === 0;
    }

    getMin() {
        // Get the minimum element in the stack
        if (this.stack.length === 0) {
            return -1;
        }
        return this.min;
    }
}
