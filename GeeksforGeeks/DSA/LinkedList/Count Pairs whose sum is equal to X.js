/**
 * Question: Count Pairs whose sum is equal to X
 * https://www.geeksforgeeks.org/problems/count-pairs-whose-sum-is-equal-to-x/1?page=2&category=Linked%20List&sortBy=submissions
 */

/**
 * @param {Node} head1
 * @param {Node} head2
 * @param {number} x
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    countPairs(head1, head2, x) {
        // your code here
        let set = new Set();
        while(head1){
            set.add(head1.data);
            head1 = head1.next;
        }
        let counter = 0;
        while(head2) {
            if(set.has(x - head2.data)) {
                counter++;
            }
            head2 = head2.next;
        }
        return counter;
    }
}