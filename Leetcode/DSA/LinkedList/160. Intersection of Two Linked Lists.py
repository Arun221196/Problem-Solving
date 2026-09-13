# https://leetcode.com/problems/intersection-of-two-linked-lists/description/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        t1 = headA
        t2 = headB
        # not working for few case
        # while t1 != t2:
        #     t1 = t1.next
        #     t2 = t2.next
        #     if t1 == t2:
        #         return t1
        #     if t1 is None:
        #         t1 = headB
        #     if t2 is None:
        #         t2 = headA
        while t1 != t2:
            t1 = t1.next if t1 else headB
            t2 = t2.next if t2 else headA
        return t1
        