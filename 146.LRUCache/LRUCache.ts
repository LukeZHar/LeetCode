class Node {
  key: number;
  value: number;
  prev: Node | null;
  next: Node | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<number, Node>;
  private head: Node;
  private tail: Node;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    // Dummy head and tail nodes
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.value = value;
      this.moveToHead(node);
    } else {
      const node = new Node(key, value);
      this.map.set(key, node);
      this.addNode(node);
      if (this.map.size > this.capacity) {
        const tail = this.popTail();
        if (tail) this.map.delete(tail.key);
      }
    }
  }

  private addNode(node: Node) {
    node.prev = this.head;
    node.next = this.head.next;
    if (this.head.next) this.head.next.prev = node;
    this.head.next = node;
  }

  private removeNode(node: Node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
  }

  private moveToHead(node: Node) {
    this.removeNode(node);
    this.addNode(node);
  }

  private popTail(): Node | null {
    if (!this.tail.prev || this.tail.prev === this.head) return null;
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
