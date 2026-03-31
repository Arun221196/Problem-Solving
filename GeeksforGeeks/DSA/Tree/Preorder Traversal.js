/**
 * https://www.geeksforgeeks.org/problems/preorder-traversal/1?page=1&category=Tree&sortBy=submissions
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
    preOrder(root) {
        // code here
        let result = [];
        function preOrderRec(root){
            if(root === null){
                return;
            }
            result.push(root.data);
            preOrderRec(root.left);
            preOrderRec(root.right);
        }
        preOrderRec(root);
        return result;
    }
}

/* 
1. Recursive Approach (Pure Functional)
Instead of pushing to an external array, each function call returns its own list. You then concatenate the results from the left and right subtrees. This is a "top-down" construction.

preOrder(root) {
    // Base case: if node is null, return an empty array
    if (root === null) return [];

    // Return: [Current Node] + [Left Subtree Results] + [Right Subtree Results]
    return [
        root.data, 
        ...this.preOrder(root.left), 
        ...this.preOrder(root.right)
    ];
}
Pros: Very clean and follows functional programming principles.
Cons: Less memory efficient because it creates many intermediate arrays during concatenation ($O(n^2)$ time in some languages, though modern JS engines optimize spread operators well). */


/*
2. Iterative Approach (Using a Stack)
This approach mimics the recursion stack manually using a while loop and a Stack data structure. Since we want to process the Left child first, we push the Right child onto the stack first (because stacks are Last-In-First-Out).

JavaScript
preOrder(root) {
    if (root === null) return [];

    let stack = [root];
    let output = [];

    while (stack.length > 0) {
        let node = stack.pop();
        output.push(node.data);

        // Push Right first so Left is processed first (LIFO)
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return output;
}
Pros: Avoids "Maximum Call Stack Size Exceeded" errors on very deep trees.

Cons: Slightly more complex logic to manage the stack manually. */