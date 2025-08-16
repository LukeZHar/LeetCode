# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # Helper to check if there are at least k nodes left
        def has_k_nodes(node, k):
            count = 0
            while node and count < k:
                node = node.next
                count += 1
            return count == k

        # Helper to reverse k nodes, returns new head and next group's head
        def reverse_k_nodes(node, k):
            prev = None
            curr = node
            for _ in range(k):
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt
            return prev, curr  # new head, next group's head

        dummy = ListNode(0)
        dummy.next = head
        group_prev = dummy

        while has_k_nodes(group_prev.next, k):
            group_start = group_prev.next
            new_group_head, next_group_head = reverse_k_nodes(group_start, k)
            group_prev.next = new_group_head
            group_start.next = next_group_head
            group_prev = group_start

        return dummy.next