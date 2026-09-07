/**
 * https://leetcode.com/problems/sqrtx/description/
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1, right = Math.floor(x / 2); // The square root of x is always less than or equal to x/2 for x >= 2

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;    
};