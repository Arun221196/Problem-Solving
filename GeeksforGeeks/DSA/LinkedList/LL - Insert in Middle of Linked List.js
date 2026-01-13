/* 
Question: https://www.geeksforgeeks.org/problems/insert-in-middle-of-linked-list/1?page=2&category=Linked%20List&sortBy=submissions
Solution: https://www.geeksforgeeks.org/dsa/insert-node-middle-linked-list/

Given the head of a Singly Linked List and a value x. The task is to insert the key in the middle of the linked list.
*/

class Solution {
    insertInMiddle(head, x) {
        // code here
        if(head === null){
            return new Node(x);
        }
        else{
            
        let slow = head;
        let fast = head.next; // start by one advance to handle even length case
        
        // find middle using slow and fast pointers
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // insert node
        let newNode = new Node(x);
        newNode.next = slow.next;
        slow.next = newNode;
        
        }
        return head;
    }
}