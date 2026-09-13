# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # Recursive
        # if not root or p == root or q == root:
        #     return root
        # l = self.lowestCommonAncestor(root.left, p, q)
        # r = self.lowestCommonAncestor(root.right, p, q)
        # if l and r:
        #     return root
        # return l or r

        # Iterative better solution
        while True:
            if p.val < root.val and q.val < root.val:
                root = root.left
            elif root.val < p.val and root.val < q.val:
                root = root.right
            else:
                return root