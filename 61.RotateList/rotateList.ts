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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head;

    // First, determine the length of the list and get the tail node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Make the list circular
    tail.next = head;

    // Calculate the effective rotations needed
    k = k % length;
    let stepsToNewHead = length - k;

    // Find the new tail and new head
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next!;
    }
    const newHead = newTail.next;

    // Break the circle
    newTail.next = null;

    return newHead;
}