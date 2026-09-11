# https://leetcode.com/problems/search-in-a-binary-search-tree/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return None
        if val == root.val:
            return root
        elif val < root.val:
            return self.searchBST(root.left, val)
        else:
            return self.searchBST(root.right, val)
# complexity analysis
# Time complexity: O(h), where h is the height of the tree. In the worst case, the tree is skewed and h = n, where n is the number of nodes in the tree.
# Space complexity: O(h), the space used by the recursion stack. In the worst case, the tree is skewed and h = n, where n is the number of nodes in the tree.