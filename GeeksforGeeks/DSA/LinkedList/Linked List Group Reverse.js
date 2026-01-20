/**
 * Problem: Reverse a linked list in groups of given size
 * Link: https://www.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1?page=1&category=Linked%20List&sortBy=submissions
 */

/**
 * @param {Node} head
 * @param {number} k
 * @returns {Node}
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
    reverseKGroup(head, k) {
        // code here
        if(head === null || k === 1) return head;
        
        let mainHead = null;
        let tail = null;
        let prev = null;
        let curr = head;
        let counter = 0;
        
        let prevHead = null;
        let prevTail = null;
        
        while(counter < k && curr) {
            if(tail === null) tail = curr;
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            counter++;

            if(counter === k || next === null) {
                counter = 0;
                
                if(mainHead === null) mainHead = prev;
                
                if(prevTail !== null) {
                    prevTail.next = prev;
                }
                
                prevHead = prev;
                prevTail = tail;
                
                tail = null;
                prev = null;
            }
        }

        return mainHead;
        
    }
}