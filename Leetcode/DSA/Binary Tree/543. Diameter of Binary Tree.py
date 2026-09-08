# https://leetcode.com/problems/diameter-of-binary-tree/description/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        def dfs(node):
            if not node:
                return [0, 0] # max, diameter
            left_max, left_diameter = dfs(node.left)
            right_max, right_diameter = dfs(node.right)
            m = max(left_max, right_max)
            diameter = max(left_diameter, right_diameter ,(left_max + right_max))
            return [
                1 + m,
                diameter
            ]
        return dfs(root)[1]    