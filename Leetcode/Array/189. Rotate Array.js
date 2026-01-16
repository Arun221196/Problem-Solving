/**
 * Question https://leetcode.com/problems/rotate-array/description/
 */

var reverse = function (arr, start, end) {
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

var rotate = function (nums, k) {
    k = k % nums.length;
    if (k) {
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }
    return nums;
};

rotate([1, 2, 3, 4, 5], 3)