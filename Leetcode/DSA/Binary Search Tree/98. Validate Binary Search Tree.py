# https://leetcode.com/problems/validate-binary-search-tree/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        valid = True
        def dfs(node):
            nonlocal valid
            if not node:
                return [float('inf'), float('-inf'), None]
            l = dfs(node.left)
            r = dfs(node.right)
            if node.left or node.right:
                if not (node.val < r[0]):
                    valid = False
                if not (l[1] < node.val):
                    valid = False
            return [
                min(l[0], r[0], node.val),
                max(l[1], r[1], node.val),
                node.val
            ]
        dfs(root)
        return valid

# Better solution with cleaner code
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def valid(node, minimum, maximum):
            if not node:
                return True
            
            if not (node.val > minimum and node.val < maximum):
                return False
            
            return valid(node.left, minimum, node.val) and valid(node.right, node.val, maximum)
        
        return valid(root, float("-inf"), float("inf"))