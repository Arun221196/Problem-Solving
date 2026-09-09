# https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def goodNodesHelper(node, maxVal):
            if not node:
                return 0
            count = 0
            if node.val >= maxVal:
                count = 1
                maxVal = node.val 
            return (
                count + 
                goodNodesHelper(node.left, maxVal) +
                goodNodesHelper(node.right, maxVal)
            )
        return goodNodesHelper(root, root.val)