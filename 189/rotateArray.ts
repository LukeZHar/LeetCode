/**
 * Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; // Handle cases where k is greater than n
    if (k === 0) return; // No rotation needed
    
    // Helper function to reverse a portion of the array
    const reverse = (arr: number[], start: number, end: number): void => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining n-k elements
    reverse(nums, k, n - 1);
}
