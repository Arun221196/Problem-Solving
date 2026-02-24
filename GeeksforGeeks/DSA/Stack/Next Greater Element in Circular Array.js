/**
 * Next Greater Element in Circular Array
https://www.geeksforgeeks.org/problems/next-greater-element/1
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    nextGreater(arr) {
        // code here
        let n = arr.length;
        let res = Array(n).fill(-1);
        let st = [];

        // 2*n - 1 is used to traverse the array twice to simulate the circular nature
        for (let i = ((2 * n) - 1); i >= 0; i--) {
            // i % n is used to simulate the circular nature of the array
            // Pop elements from the stack that are less than or equal to the current element
            while (st.length > 0 && st[st.length - 1] <= arr[i % n]) {
                st.pop();
            }

            // If the stack is not empty, the top element is the next greater element
            if (i < n && st.length) {
                res[i] = st[st.length - 1];
            }

            // Push the current element onto the stack
            st.push(arr[i % n]);
        }
        return res;
    }
}