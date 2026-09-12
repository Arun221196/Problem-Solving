# https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # Recursive approach  22.14 MB Beats 61.84%
        # counter = 0
        # res = None
        # def dfs(node):
        #     nonlocal counter, res
        #     if not node:
        #         return
        #     dfs(node.left)
        #     counter += 1
        #     if counter == k:
        #         res =  node.val
        #         return
        #     dfs(node.right)
            
        # dfs(root)
        # return res

        # Iterative approach 22.09 MB Beats 87.80%
        counter = 0
        cur = root
        stack = []
        while cur or stack:
            while cur:
                stack.append(cur)
                cur  = cur.left
            cur = stack.pop()
            counter += 1
            if(counter == k):
                return cur.val
            cur = cur.right
            
