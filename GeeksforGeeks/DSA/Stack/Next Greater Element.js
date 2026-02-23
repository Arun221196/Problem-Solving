/**
 * https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1?page=1&category=Stack&sortBy=submissions
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    nextLargerElement(arr) {
        // code here
        let n = arr.length;
        let res = new Array(n).fill(-1);
        let stk = [];
        
        function getPeek(a) { // Helper function to get the top element of the stack
            let length = a.length;
            return length > 0 ? a[length-1] : null;
        }
        
        // Traverse the array from right to left
        for(let i = n-1; i >= 0; i--) {
            // Pop elements from the stack that are less
            // than or equal to the current element
            while(stk.length > 0 && getPeek(stk) <= arr[i]){
                stk.pop();
            }
            // If the stack is not empty, the top element
            // is the next greater element
            if(stk.length > 0){
                res[i] = getPeek(stk);
            }
            // Push the current element onto the stack
            stk.push(arr[i]);
        }
        
        return res;
    }
}