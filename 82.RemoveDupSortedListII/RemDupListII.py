# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        current = head
        
        while current:
            # Check if current node is a duplicate
            if current.next and current.val == current.next.val:
                # Skip all duplicates
                while current.next and current.val == current.next.val:
                    current = current.next
                # Link previous node to the next non-duplicate node
                prev.next = current.next
            else:
                # Move prev pointer only if no duplicates were found
                prev = prev.next
            
            # Move to the next node
            current = current.next
        
        return dummy.next