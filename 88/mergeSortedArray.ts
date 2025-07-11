/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // last position in nums1

  // Merge in reverse order
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // If any elements remain in nums2, copy them
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
