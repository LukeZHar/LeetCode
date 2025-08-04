function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];

    const result: string[] = [];
    let start = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            if (start === nums[i - 1]) {
                result.push(start.toString());
            } else {
                result.push(`${start}->${nums[i - 1]}`);
            }
            start = nums[i];
        }
    }

    return result;
};