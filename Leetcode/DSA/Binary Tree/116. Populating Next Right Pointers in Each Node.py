# https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return root
        arr = [root, None]
        while len(arr):
            tempArr = []
            for i in range(len(arr)-1):
                print(arr[i].val)
                arr[i].next = arr[i+1]
                if arr[i].left: tempArr.append(arr[i].left)
                if arr[i].right: tempArr.append(arr[i].right)
            if len(tempArr):
                 tempArr.append(None)
            arr = tempArr
        return root

# Better solution
# start from the right side of the tree and connect the next pointer to the right node.
class Solution:
    def connect(self, root):
        if not root: return None
        q = deque([root])
        while q:
            rightNode = None
            for _ in range(len(q)):
                cur = q.popleft()
                cur.next, rightNode = rightNode, cur
                if cur.right:
                    q.extend([cur.right, cur.left])
        return root