# https://leetcode.com/problems/balanced-binary-tree/description/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        def isBalancedHelper(root):
            if not root:
                return [0, True]
            left_res = isBalancedHelper(root.left)
            right_res = isBalancedHelper(root.right)
            return [
                1 + max(left_res[0], right_res[0]),
                (left_res[1] and right_res[1]) and (1 >= abs(left_res[0] - right_res[0])),
            ]
        return isBalancedHelper(root)[1]

# Complexity
# Time complexity: O(n)
# Space complexity: O(n)
# In the worst case (a skewed tree), the recursion depth is O(n).

# Clean code
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        
        def dfs(root):
            if not root:
                return [True, 0]
            
            left_balanced, left_height = dfs(root.left)
            right_balanced, right_height = dfs(root.right)
            
            is_balanced = left_balanced and right_balanced and abs(left_height - right_height) <= 1
            
            return [is_balanced, 1 + max(left_height, right_height)]
        
        return dfs(root)[0]