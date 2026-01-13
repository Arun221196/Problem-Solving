/* 
Question: https://www.geeksforgeeks.org/find-intersection-point-y-shaped-linked-lists/
Solution: https://www.youtube.com/watch?v=0DYoPz2Tpt4
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
*/


/**
 * @param {Node} head1
 * @param {Node} head2
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
    intersectPoint(head1, head2) {
        //  code here
        let t1 = head1;
        let t2 = head2;
        while (t1 !== t2) {
            t1 = t1.next;
            t2 = t2.next;
            if (t1 === t2) {
                return t1;
            }
            if (t1 === null) t1 = head2;
            if (t2 === null) t2 = head1;
        }
    }
}