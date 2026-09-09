# https://leetcode.com/problems/binary-tree-right-side-view/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        q = collections.deque([root])
        res = []
        while len(q):
            same_level = None
            for _ in range(len(q)):
                node = q.popleft()
                same_level = node.val
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            res.append(same_level)
        return res