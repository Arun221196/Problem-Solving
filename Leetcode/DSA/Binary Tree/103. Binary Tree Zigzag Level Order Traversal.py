# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        queue = collections.deque()
        queue.append(root)
        res = []
        left_to_right = True
        while len(queue):
            same_level = []
            temp_queue = []
            for _ in range(len(queue)):
                node = queue.pop()
                same_level.append(node.val)
                if left_to_right:
                    if node.left:
                        temp_queue.append(node.left)
                    if node.right:
                        temp_queue.append(node.right)
                else:
                    if node.right:
                        temp_queue.append(node.right)
                    if node.left:
                        temp_queue.append(node.left)
            res.append(same_level)
            queue = temp_queue
            left_to_right = not left_to_right
        return res


# Better solution with clean code
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        # Standard queue for level-order traversal
        queue = collections.deque([root])
        res = []
        left_to_right = True
        
        while queue:
            level_size = len(queue)
            # Use a deque for the current level to allow efficient O(1) insertions at both ends
            same_level = collections.deque()
            
            for _ in range(level_size):
                node = queue.popleft()  # Always pop from the front to maintain standard BFS order
                
                # Insert value into the level list based on the current direction
                if left_to_right:
                    same_level.append(node.val)      # Add to the end
                else:
                    same_level.appendleft(node.val)  # Add to the beginning (effectively reversing)
                
                # Always add children in standard left-to-right order
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            res.append(list(same_level))
            left_to_right = not left_to_right  # Flip direction for the next level
            
        return res
