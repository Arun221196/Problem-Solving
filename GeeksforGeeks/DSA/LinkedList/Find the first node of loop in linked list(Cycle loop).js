/**
 * Question: https://www.geeksforgeeks.org/problems/find-the-first-node-of-loop-in-linked-list--170645/1
 */

/**
 * @param {Node} head
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
    cycleStart(head) {
        // code here
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast){
                slow = head;
                while(slow !== fast){
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow.data;
            }
        }
        return -1;
    }
}