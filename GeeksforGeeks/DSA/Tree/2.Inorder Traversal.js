/**
 * https://www.geeksforgeeks.org/problems/inorder-traversal/1?page=2&category=Tree&sortBy=submissions
 * Inorder Traversal of a Binary Tree is a depth-first traversal method where the nodes are visited in the following order: Left Subtree, Root Node, Right Subtree. This means that for any given node, you first visit all the nodes in its left subtree, then the node itself, and finally all the nodes in its right subtree.
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
    inOrder(root) {
        // code here
        let result = [];
        function recursiveInOrder(node) {
            if (!node) return;
            recursiveInOrder(node.left);
            result.push(node.data);
            recursiveInOrder(node.right);
        }
        recursiveInOrder(root);
        return result;
    }
}