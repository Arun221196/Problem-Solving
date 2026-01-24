/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=problem-list-v2&envId=two-pointers
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    let s1Counter = 0;
    let i = 0, j = 0;
    while (s1Counter < haystack.length) {
        i = s1Counter;
        j = 0;
        while (j < needle.length) {
            if (haystack[i] !== needle[j]) {
                break;
            }
            if (j === needle.length - 1) return s1Counter;
            i++;
            j++;
        }
        s1Counter++;
    }
    return -1;

    // Optimal Solution
    // return haystack.indexOf(needle)
};