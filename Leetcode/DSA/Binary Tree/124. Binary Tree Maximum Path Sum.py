# https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
class Solution:
    # def maxPathSum(self, root: Optional[TreeNode]) -> int:
    #     if not root: return root
    #     maxx = float('-inf')
    #     def dfs(node):
    #         nonlocal maxx
    #         if not node:
    #             return float('-inf')
    #         leftCall = dfs(node.left)
    #         rightCall = dfs(node.right)
    #         tempLeftCall = leftCall
    #         tempRightCall = rightCall
    #         if leftCall == float('-inf'): tempLeftCall = 0
    #         if rightCall == float('-inf'): tempRightCall = 0
    #         tempMax = node.val + tempLeftCall + tempRightCall
    #         maxx = max(maxx, tempMax, node.val, node.val + tempLeftCall, node.val + tempRightCall)
    #         if leftCall == float('-inf') and rightCall == float('-inf'):
    #             return node.val
    #         return node.val + max(leftCall, rightCall)
    #     dfs(root)
    #     return maxx


    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        max_sum = float('-inf')
        
        def maxPathDown(node):
            nonlocal max_sum
            if not node:
                return 0
            
            # Get max sum from left and right children
            left_sum = max(0, maxPathDown(node.left))
            right_sum = max(0, maxPathDown(node.right))
            
            # Max path that bends at this node
            bent_path = node.val + left_sum + right_sum
            max_sum = max(max_sum, bent_path)
            
            # Return max path going down from this node
            return node.val + max(left_sum, right_sum)
        
        maxPathDown(root)
        return max_sum