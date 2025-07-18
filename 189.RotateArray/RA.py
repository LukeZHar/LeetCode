class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n
        if k == 0:
            return # If k is 0, no rotation is needed
        # Reverse the entire array
        nums.reverse()
        # Reverse the first k elements
        nums[:k] = reversed(nums[:k])
        # Reverse the remaining n-k elements
        nums[k:] = reversed(nums[k:])