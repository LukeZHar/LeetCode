function removeElement(nums: number[], val: number): number {
    let k = 0; // Pointer for the position of the next valid element
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
        nums[k] = nums[i]; // Place the valid element at the next position
        k++;
        }
    }
    
    return k; // Return the count of valid elements
}
