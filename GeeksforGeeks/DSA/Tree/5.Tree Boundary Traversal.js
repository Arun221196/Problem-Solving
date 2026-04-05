/**
 * https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1?page=1&category=Tree&sortBy=submissions
 * Boundary Traversal of a Binary Tree is a method of traversing the tree in a specific order that includes the nodes on the boundary of the tree. The boundary traversal consists of three parts: 

 the left boundary, the leaf nodes, and the right boundary.

 The left boundary includes all the nodes on the left edge of the tree (excluding leaf nodes), the leaf nodes include all the nodes that do not have any children, and the right boundary includes all the nodes on the right edge of the tree (excluding leaf nodes). The traversal starts from the root node, then visits the left boundary in a top-down manner, followed by all the leaf nodes from left to right, and finally visits the right boundary in a bottom-up manner.
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
function isLeaf(node) {
    return node.left === null && node.right === null;
}
function collectLeftNodes(root, res){
    if(root === null || isLeaf(root))
        return;
    
    res.push(root.data);
    if(root.left !== null)
        collectLeftNodes(root.left, res);
    else if(root.right !== null)    
        collectLeftNodes(root.right, res);
}
function collectLeafNodes(root, res){
    if(root === null)
        return;
    if(isLeaf(root)){
        res.push(root.data);
        return;
    }
    collectLeafNodes(root.left, res);
    collectLeafNodes(root.right, res);
}
function collectRightNodes(root, res){
    if(root === null || isLeaf(root))
        return;
    
    if(root.right !== null)
        collectRightNodes(root.right, res);
    else if(root.left !== null)    
        collectRightNodes(root.left, res);
    res.push(root.data);
}
class Solution {
    boundaryTraversal(root) {
        // code here
        let res = [];
        if(root === null)
            return res;
        if(!isLeaf(root))
            res.push(root.data);
        collectLeftNodes(root.left, res);
        collectLeafNodes(root,res);
        collectRightNodes(root.right, res);
        return res;
    }
}