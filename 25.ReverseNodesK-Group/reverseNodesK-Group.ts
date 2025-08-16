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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || k <= 1) {
        return head;
    }

    let current = head;
    let count = 0;

    // Count the number of nodes in the list
    while (current !== null) {
        count++;
        current = current.next;
    }

    // If there are fewer than k nodes, return the head as is
    if (count < k) {
        return head;
    }

    let prev: ListNode | null = null;
    current = head;
    
    // Reverse the first k nodes
    for (let i = 0; i < k; i++) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Recursively reverse the rest of the list and connect it
    if (current !== null) {
        head.next = reverseKGroup(current, k);
    }

    return prev; // New head of the reversed group
}