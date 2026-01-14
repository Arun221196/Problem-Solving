/* Delete a node without head pointer
Question: You are given a pointer to a node in a singly linked list. Your task is to delete that node from the list. https://www.geeksforgeeks.org/problems/delete-without-head-pointer/1?page=1&category=Linked%20List&sortBy=submissions */

/**
 * @param {Node} del
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;

*/

class Solution {
    deleteNode(del_node) {
        // code here
        del_node.data = del_node.next.data;
        del_node.next = del_node.next.next;
        return head;
    }
}