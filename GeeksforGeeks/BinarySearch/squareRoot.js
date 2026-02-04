/**
 * https://www.geeksforgeeks.org/problems/square-root/1
 * Given a positive integer n, find the square root of n. If n is not a perfect square, then return the floor value.

Floor value of any number is the greatest Integer which is less than or equal to that number.

Examples:

Input: n = 4
Output: 2
Explanation: Since, 4 is a perfect square, so its square root is 2.
Input: n = 11
Output: 3
Explanation: Since, 11 is not a perfect square, floor of square root of 11 is 3.
Input: n = 1
Output: 1
Explanation: 1 is a perfect sqaure, so its square root is 1.

TOPIC: Searching Mathematical Binary Search Algorithms
 * @param {*} n 
 * @returns 
 */

function floorSqrt(n) {
    // debugger ;// code here
    if (n === 1)
        return 1;
    let left = 1
      , right = n;
    let lastPerfectSquare;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sqrt = mid * mid;
        if (sqrt === n) {
            return mid;
        }
        if (sqrt < n) {
            lastPerfectSquare = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return lastPerfectSquare;
}
console.log(floorSqrt(9));
