# https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        # 1.Iterative approach
        # new_node = TreeNode(val)
        # if not root:
        #     return new_node
        # tempRoot = root
        # while True:
        #     if val < tempRoot.val:
        #         if not tempRoot.left:
        #             tempRoot.left = new_node
        #             break
        #         else:
        #             tempRoot = tempRoot.left
        #     else:
        #         if not tempRoot.right:
        #             tempRoot.right = new_node
        #             break
        #         else:
        #             tempRoot = tempRoot.right
        # return root

        # 2.Recursive approach (what i did) working
        # new_node = TreeNode(val)
        # if not root:
        #     return new_node
        # def dfs(node):
        #     if val < node.val:
        #         if not node.left:
        #             node.left = new_node
        #             return node.left
        #         return self.insertIntoBST(node.left, val)
        #     else:
        #         if not node.right:
        #             node.right = new_node
        #             return node.right
        #         return self.insertIntoBST(node.right, val)
        # dfs(root)
        # return root

        # 3.Recursive approach clean code
        if not root:
            return TreeNode(val)
        if val < root.val:
            root.left = self.insertIntoBST(root.left, val)
        else:
            root.right = self.insertIntoBST(root.right, val)
        return root