/**
 * https://www.geeksforgeeks.org/problems/level-order-traversal/1?page=1&category=Tree&sortBy=submissions
 * Level Order Traversal of a Binary Tree is a breadth-first traversal method where the nodes are visited level by level from left to right. This means that you first visit all the nodes at the current depth level before moving on to the nodes at the next depth level. The traversal starts at the root node (level 0), then proceeds to its children (level 1), followed by their children (level 2), and so on, until all levels of the tree have been visited.
 */

/**
 * @param {Node} root
 * @returns {number[][]}
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

// Time Complexity: O(n) - Each node is visited once.
// Space Complexity: O(n) - In the worst case, the queue can hold all nodes at the last level of the tree, which can be O(n) in a complete binary tree.
class Solution {
    levelOrder(root) {
        // code here
        let queue = [];
        let result = [];
        queue.push(root);
        while (queue.length) {
            let arr = [];
            let tempQueue = []
            for (let node of queue) {
                arr.push(node.data);
                if (node.left) tempQueue.push(node.left)
                if (node.right) tempQueue.push(node.right)
            }
            queue = tempQueue;
            result.push(arr);
        }
        return result;
    }
}

/**
 * RECURSIVE APPROACH - Level Order Traversal
 * Time Complexity: O(n) - Each node is visited once.
 * Space Complexity: O(h) - Recursion stack space where h is the height of the tree.
 */
class SolutionRecursive {
    levelOrder(root) {
        let result = [];
        this.levelOrderHelper(root, 0, result);
        return result;
    }

    levelOrderHelper(node, level, result) {
        // Base case: if node is null, return
        if (node === null) return;

        // If this is the first time we're visiting this level, create a new array for it
        if (level === result.length) {
            result.push([]);
        }

        // Add current node's data to the array at its level
        result[level].push(node.data);

        // Recursively process left and right children at next level
        this.levelOrderHelper(node.left, level + 1, result);
        this.levelOrderHelper(node.right, level + 1, result);
    }
}

/**
 * QUEUE DATA STRUCTURE - Proper Queue Implementation
 * FIFO (First In First Out) queue using array with pointers for efficient operations
 */
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.front === this.items.length) {
            this.front = 0;
            this.items = [];
        }
        return this.items[this.front++];
    }

    isEmpty() {
        return this.front === this.items.length;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    size() {
        return this.items.length - this.front;
    }
}

/**
 * REAL QUEUE APPROACH - Level Order Traversal using Queue data structure
 * Time Complexity: O(n) - Each node is visited once.
 * Space Complexity: O(n) - Queue stores nodes at each level.
 */
class SolutionWithRealQueue {
    levelOrder(root) {
        if (root === null) return [];

        let result = [];
        let queue = new Queue();
        queue.enqueue(root);

        while (!queue.isEmpty()) {
            let levelSize = queue.size();
            let arr = [];

            // Process all nodes at the current level
            for (let i = 0; i < levelSize; i++) {
                let node = queue.dequeue();
                arr.push(node.data);

                // Add children to queue for next level
                if (node.left !== null) {
                    queue.enqueue(node.left);
                }
                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
            }

            result.push(arr);
        }

        return result;
    }
}
