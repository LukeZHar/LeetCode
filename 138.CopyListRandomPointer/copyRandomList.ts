/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    const map = new Map<_Node, _Node>();

    // First pass: create a copy of each node and store it in the map
    let current = head;
    while (current) {
        map.set(current, new _Node(current.val));
        current = current.next;
    }

    // Second pass: assign next and random pointers
    current = head;
    while (current) {
        const copiedNode = map.get(current);
        copiedNode!.next = map.get(current.next) || null;
        copiedNode!.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head) || null;
}