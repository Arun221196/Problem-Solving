# https://leetcode.com/problems/design-linked-list/description/
class Node:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

class MyLinkedList:

    def __init__(self):
        self.head = None
        self.len = 0
    
    def displayFullList(self):
        root = self.head
        res = []
        while(root):
            res.append(root.val)
            root = root.next
        print('NodeList', res)

    def get(self, index: int) -> int:
        root = self.head
        while index and root:
            root = root.next
            index -= 1
        return root.val if root else -1

    def addAtHead(self, val: int) -> None:
        new_node = Node(val)
        temp = self.head
        new_node.next = temp
        self.head = new_node
        self.len += 1

    def addAtTail(self, val: int) -> None:
        root = self.head
        if not root:
            self.addAtHead(val)
            return
        while root.next:
            root = root.next
        root.next = Node(val)
        self.len += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.len:
            return
        if index == 0:
            self.addAtHead(val)
            return
        new_node = Node(val)
        current = self.head
        for _ in range(index - 1):
            current = current.next
        new_node.next = current.next
        current.next = new_node
        self.len += 1

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.len:
            return
        if index == 0:
            self.head = self.head.next
        else:
            current = self.head
            for _ in range(index - 1):
                current = current.next
            current.next = current.next.next
        self.len -= 1


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)