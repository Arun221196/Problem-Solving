/**
 * Question: Find the first node of loop in linked list(Cycle loop)
 * Link: https://www.geeksforgeeks.org/problems/find-length-of-loop/1?page=1&category=Linked%20List&difficulty=Easy&sortBy=submissions
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
    lengthOfLoop(head) {
        // code here
        // detect loop
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast){
                // loop detected, now count length
                let counter = 1;
                slow = slow.next;
                while(slow !== fast){
                    slow = slow.next;
                    counter++;
                }
                return counter;
            }
        }
        return 0;
        
    }
}