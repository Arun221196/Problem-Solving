/**
 * @param {Node} head
 * @param {number} key
 * @returns {boolean}
 */

/**
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    searchKey(head, key) {
        // Code here
        while(head){
            if(head.data === key){
                return true;
            }
            head = head.next;
        }
        return false;
    }
}