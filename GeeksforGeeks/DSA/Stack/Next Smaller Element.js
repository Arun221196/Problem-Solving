/**
 * Next Smaller Element
https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    nextSmallerEle(arr) {
        // code here
        let n = arr.length;
        let res = Array(n).fill(-1);
        let stack = [];

        for (let i = n - 1; i >= 0; i--) {
            // Pop elements from the stack that are greater than or equal to the current element
            while (stack.length && arr[i] <= stack[stack.length - 1]) {
                stack.pop();
            }
            // If the stack is not empty, the top element is the next smaller element
            if (stack.length) {
                res[i] = stack[stack.length - 1];
            }
            // Push the current element onto the stack
            stack.push(arr[i]);
        }
        return res;
    }
}