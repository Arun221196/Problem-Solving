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
}