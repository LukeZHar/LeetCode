class RandomizedSet {
  private map: Map<number, number>;
  private arr: number[];
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val)!;
    const last = this.arr[this.arr.length - 1];
    this.arr[idx] = last;
    this.map.set(last, idx);
    this.arr.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
