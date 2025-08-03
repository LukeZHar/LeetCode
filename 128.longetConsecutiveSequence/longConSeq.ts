function longestConsecutiveSequence(nums: number[]): number {
  if (nums.length === 0) return 0;
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
    // Only start counting if num is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}
