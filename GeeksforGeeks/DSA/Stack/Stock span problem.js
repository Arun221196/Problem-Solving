/**
 * https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1?page=1&category=Stack&sortBy=submissions
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    calculateSpan(arr) {
        // stock span problem with bruteforc approach O(N^2)
        // code here
        let n = arr.length;
        let span = new Array(n).fill(1);

        // Calculate span for each day
        for (let i = 1; i < n; i++) {

            // Traverse left while arr[i] >= arr[j]
            let j = i - 1;
            while (j >= 0 && arr[i] >= arr[j]) {
                span[i]++;
                j--;
            }
        }

        return span;
    }

    calculateSpanOptimized(arr) {
        // Optimized approach using stack
        let n = arr.length;
        let span = new Array(n);
        let stack = []; // Stack to store indices

        // Initialize the first element
        span[0] = 1;
        stack.push(0);

        // Process remaining elements
        for (let i = 1; i < n; i++) {
            // Pop elements from stack while stack is not empty and current element is greater than or equal to the element at the top of the stack
            while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
                stack.pop();
            }

            // If stack is empty, it means all previous elements are smaller than current element
            span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];

            // Push current index to the stack
            stack.push(i);
        }

        return span;
    }
}