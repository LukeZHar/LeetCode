function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let uniqueIndex = 0; // Pointer for the position of the last unique element
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
        uniqueIndex++;
        nums[uniqueIndex] = nums[i]; // Update the next unique position
        }
    }
    
    return uniqueIndex + 1; // Return the count of unique elements
}
