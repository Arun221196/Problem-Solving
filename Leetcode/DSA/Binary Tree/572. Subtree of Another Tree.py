# https://leetcode.com/problems/subtree-of-another-tree/description/

# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
# Few test cases failed for the below code. So, I have commented it and added a new solution which is working fine.
# class Solution:
#     def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
#         if not root or not subRoot:
#             return False
#         res = False

#         # Helper function to check if two trees are identical
#         def isSameTree(node1, node2):
#             if not node1 and not node2:
#                 return True
#             if not node1 or not node2:
#                 return False
#             return (node1.val == node2.val and 
#                     isSameTree(node1.left, node2.left) and 
#                     isSameTree(node1.right, node2.right))

#         def dfs(node):
#             nonlocal res
#             if not node:
#                 return
#             if node.val == subRoot.val:
#                 res = isSameTree(node, subRoot)
#             if not res:    
#                 dfs(node.left)
#                 dfs(node.right)

#         dfs(root)
#         return res

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        # If the main tree is empty, it can't contain a subtree
        if not root:
            return False
            
        # Helper function to check if two trees are identical
        def isSameTree(node1, node2):
            if not node1 and not node2:
                return True
            if not node1 or not node2:
                return False
            return (node1.val == node2.val and 
                    isSameTree(node1.left, node2.left) and 
                    isSameTree(node1.right, node2.right))
        
        # If they match at the current node, return True immediately
        if isSameTree(root, subRoot):
            return True
            
        # Otherwise, check the left and right children of the main tree
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
