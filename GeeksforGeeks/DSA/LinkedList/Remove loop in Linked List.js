/**
 * Remove loop in Linked List
 * Question: https://www.geeksforgeeks.org/problems/remove-loop-in-linked-list/1?page=1&category=Linked%20List&sortBy=submissions
 */

/**
 * @param {Node} head
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
    removeLoop(head) {
        // code here
        let slow = head, fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                // less optimised
                // if(slow !== head){ // loop does not start at head
                //     let prevNode = null;
                //     slow = head;
                //     while(slow !== fast){
                //         prevNode = fast;
                //         slow = slow.next;
                //         fast = fast.next;
                //     }
                //     prevNode.next = null;
                // }
                // else{ // loop starts at head
                //     let prevNode = fast;
                //     fast = fast.next;
                //     while(slow !== fast) {
                //         prevNode = fast;
                //         fast=fast.next;
                //     }
                //     prevNode.next = null;
                // }

                // optimized solution
                // Move both pointers at same speed; they will meet at loop start
                slow = head;
                while (slow !== fast) {
                    slow = slow.next;
                    fast = fast.next;
                }

                // find the node just before loop start
                let loopStart = slow;
                let prev = loopStart;
                while (prev.next !== loopStart) {
                    prev = prev.next;
                }
                prev.next = null;
            }
        }
    }
}