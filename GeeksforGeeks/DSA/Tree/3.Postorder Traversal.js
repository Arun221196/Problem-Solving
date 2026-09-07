/**
 * https://www.geeksforgeeks.org/problems/postorder-traversal/1?page=2&category=Tree&sortBy=submissions
 * Postorder Traversal of a Binary Tree is a depth-first traversal method where the nodes are visited in the following order: Left Subtree, Right Subtree, Root Node. This means that for any given node, you first visit all the nodes in its left subtree, then all the nodes in its right subtree, and finally the node itself.
 */
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    postOrder(root) {
        // code here
        let result = [];
        function recursionPostOrder(node){
            if(!node) return;
            recursionPostOrder(node.left);
            recursionPostOrder(node.right);
            result.push(node.data);
        }
        recursionPostOrder(root);
        return result;
    }
}