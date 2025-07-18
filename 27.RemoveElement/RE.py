class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0 # Pointer for the position to place the next non-val element
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        return k  # The new length of the array after removing elements equal to val
