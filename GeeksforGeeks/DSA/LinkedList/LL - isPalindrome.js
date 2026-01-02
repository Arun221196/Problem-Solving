/**
 * @param {Node} head
 * @returns {boolean}
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Solution {
    isPalindrome(head) {
        if (!head || !head.next) return true;

        // build reversed copy by prepending nodes
        let revHead = null;
        let cur = head;
        while (cur) {
            const node = new Node(cur.data);
            node.next = revHead;
            revHead = node;
            cur = cur.next;
        }
        
        // compare original and reversed copy
        let p1 = head;
        let p2 = revHead;
        while (p1 && p2) {
            if (p1.data !== p2.data) return false;
            p1 = p1.next;
            p2 = p2.next;
        }
        return true;
    }
}
// Test the solution
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

const solution = new Solution();
console.log(solution.isPalindrome(head)); // true