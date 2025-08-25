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
function partition(head: ListNode | null, x: number): ListNode | null {
    const dummy1 = new ListNode(0);
    const dummy2 = new ListNode(0);
    let cur1 = dummy1;
    let cur2 = dummy2;
    let cur = head;
    while (cur) {
        if (cur.val < x) {
            cur1.next = cur;
            cur1 = cur1.next;
        } else {
            cur2.next = cur;
            cur2 = cur2.next;
        }
        cur = cur.next;
    }
    cur1.next = dummy2.next;
    cur2.next = null;
    return dummy1.next;
}