/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current) {
        let isDuplicate = false;

        // Check for duplicates
        while (current.next && current.val === current.next.val) {
            isDuplicate = true;
            current = current.next;
        }

        if (isDuplicate) {
            // Skip all duplicates
            prev.next = current.next;
        } else {
            // Move prev pointer only if no duplicates
            prev = prev.next;
        }

        current = current.next;
    }

    return dummy.next;
}
