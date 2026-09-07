/**
 * https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1?page=1&category=doubly-linked-list&sortBy=submissions
 * Given a doubly linked list, the task is to reverse the given doubly linked list.
 * 
 * Example:
 * Input: head = 1<->2<->3<->4<->5
 * Output: 5<->4<->3<->2<->1
 */

/*
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
    reverse(head) {
        // code here
        let prev = null;
        let curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            if (prev !== null) {
                prev.prev = curr; // Update the prev pointer of the previous node to point to the current node
            }
            prev = curr;
            curr = next;
        }
        return prev;
    }
}