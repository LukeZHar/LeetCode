function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const indexMap: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in indexMap && i - indexMap[num] <= k) {
            return true;
        }
        indexMap[num] = i;
    }
    return false;
}