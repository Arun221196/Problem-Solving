# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return 0
        lca = None
        def lcaHelper(node, p, q):
            nonlocal lca
            if not node:
                return False
            left_lca = lcaHelper(node.left, p, q)
            right_lca = lcaHelper(node.right, p, q)
            if (left_lca or right_lca) and (node.val == p or node.val == q):
                lca = node
            if (left_lca and right_lca):
                lca = node
            return left_lca or right_lca or (node.val == p or node.val == q)
        lcaHelper(root, p.val, q.val)
        return lca

# Better solution
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        if left and right:
            return root

        return left or right        