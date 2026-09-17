# https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head.next:
            return None
        p1 = head
        p2 = head

        for _ in range(n):
            p1 = p1.next

        if not p1:
            return head.next
       
        while p1 and p1.next:
            p1 = p1.next
            p2 = p2.next

        p2.next = p2.next.next
        return head

# using duplicate node
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
        d = ListNode(0, head)
        l = d
        r = head 
        
        while n > 0 and r:
            r = r.next
            n -= 1

        while r:
            l = l.next
            r = r.next
        
        l.next = l.next.next

        return d.next