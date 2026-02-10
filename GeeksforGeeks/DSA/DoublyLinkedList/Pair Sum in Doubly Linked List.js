/**
 * https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1?page=1&category=doubly-linked-list&difficulty=Easy&sortBy=submissions
 * Given a doubly linked list and a sum, find pairs in doubly linked list whose sum is equal to given sum.
 * 
 * Example:
 * Input: head = 1<->2<->3<->4<->5, sum = 5
 * Output: (1, 4), (2, 3)
 */

// User function Template for javascript
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

class Solution {
    // Function to find pairs in the linked list with the given sum
    findPairsWithGivenSum(head, target) {
        // code here
        if (!head || !head.next) {
            return [];
        }

        // Approach 1: but not working for all test cases(got infinate loop in some test cases)
        // let p1 = head;
        // let p2 = head.next;
        // let arr = [];
        // while(p1 !== p2 && p2 && p1) {
        //     let sum = p1.data + p2.data;
        //     if(sum === target){
        //         arr.push([p1.data, p2.data]);
        //         p1 = p1.next;
        //     }
        //     else if(sum < target){
        //         p2 = p2.next;
        //     }
        //     else{
        //         p2 = p2.prev;
        //     }
        // }
        // return arr;

        // Approach 2: working for all test cases
        let p1 = head;
        let p2 = head;
        let arr = [];

        // Move p2 to the end of the list
        while (p2.next) {
            p2 = p2.next;
        }

        while (p1.data < p2.data) {
            if (p1.data + p2.data === target) { // Found a pair
                arr.push([p1.data, p2.data]);
                p1 = p1.next; // Move p1 forward to find the next pair
                p2 = p2.prev; // Move p2 backward to find the next pair
            }
            else if (p1.data + p2.data > target) { // If the sum is greater than the target, move p2 backward to decrease the sum
                p2 = p2.prev;
            }
            else { // If the sum is less than the target, move p1 forward to increase the sum
                p1 = p1.next;
            }
        }
        return arr;
    }
}