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

/**
 * 
 * @param head (ListNode | null)
 * @param left (number)
 * @param right (number)
 * @returns (ListNode | null)
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head || left === right) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;

    // Move `prev` to the node just before the `left` position
    for (let i = 1; i < left; i++) {
        prev = prev.next!;
    }

    let current = prev.next;
    let next: ListNode | null = null;

    // Reverse the sublist from `left` to `right`
    for (let i = 0; i < right - left; i++) {
        next = current!.next!;
        current!.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
}

