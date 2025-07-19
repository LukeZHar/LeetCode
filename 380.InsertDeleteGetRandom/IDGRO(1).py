class RandomizedSet:
    
    def __init__(self):
        self.val_to_index = {}
        self.values = []
        self.size = 0

    def insert(self, val: int) -> bool:
        if val in self.val_to_index:
            return False
        self.val_to_index[val] = self.size
        self.values.append(val)
        self.size += 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.val_to_index:
            return False
        index = self.val_to_index[val]
        last_val = self.values[-1]
        
        # Move the last value to the place of the removed value
        self.values[index] = last_val
        self.val_to_index[last_val] = index
        
        # Remove the last value
        self.values.pop()
        del self.val_to_index[val]
        self.size -= 1
        return True

    def getRandom(self) -> int:
        import random
        return random.choice(self.values)

    
# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()