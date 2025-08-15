"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None
        
        # Step 1: Create a copy of each node and insert it next to the original node
        current = head
        while current:
            new_node = Node(current.val)
            new_node.next = current.next
            current.next = new_node
            current = new_node.next
        
        # Step 2: Set the random pointers for the copied nodes
        current = head
        while current:
            if current.random:
                current.next.random = current.random.next
            current = current.next.next
        
        # Step 3: Separate the original and copied nodes
        original = head
        copy_head = head.next
        copy_current = copy_head
        
        while original:
            original.next = original.next.next if original.next else None
            copy_current.next = copy_current.next.next if copy_current.next else None
            
            original = original.next
            copy_current = copy_current.next
        
        return copy_head