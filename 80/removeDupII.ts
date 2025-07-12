function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;

    let writeIndex = 2; // Start writing from the third position
    for (let i = 2; i < nums.length; i++) {
        // Check if the current number is different from the number two places before
        if (nums[i] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }

    return writeIndex;
}