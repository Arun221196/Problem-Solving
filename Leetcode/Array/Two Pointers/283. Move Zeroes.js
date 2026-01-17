/**
 * question url: https://leetcode.com/problems/move-zeroes/description/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (i of nums) {
        if (i !== 0) {
            nums[j] = i;
            j++;
        }
    }
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
};