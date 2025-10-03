/**
 * Problem: Search in Rotated Sorted Array
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown
 * pivot index k (1 <= k < nums.length) such that the resulting array is
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * 
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * 
 * Given the array nums after the possible rotation and an integer target, return the
 * index of target if it is in nums, or -1 if it is not in nums.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1
 * 
 * Constraints:
 * - 1 <= nums.length <= 5000
 * - -10^4 <= nums[i] <= 10^4
 * - All values of nums are unique
 * - nums is an ascending array that is possibly rotated
 * - -10^4 <= target <= 10^4
 */

function search(nums, target) {
    // TODO: Implement binary search on rotated sorted array
    // Hint: Find the pivot point first, then search in appropriate half
    // Or use modified binary search to handle rotation
    
    return -1; // Placeholder
}

function searchTwoPass(nums, target) {
    // TODO: Implement using two-pass approach
    // Hint: First find pivot, then search in appropriate half
    
    return -1; // Placeholder
}

function findMin(nums) {
    // TODO: Find the minimum element in rotated sorted array
    // Hint: Use binary search to find pivot point
    
    return 0; // Placeholder
}

// Test cases
console.log("Test Case 1:", search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log("Test Case 2:", search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log("Test Case 3:", search([1], 0)); // Expected: -1
console.log("Test Case 4:", search([1,3], 3)); // Expected: 1

console.log("\nTwo-pass approach:");
console.log("Test Case 1:", searchTwoPass([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log("Test Case 2:", searchTwoPass([4,5,6,7,0,1,2], 3)); // Expected: -1

console.log("\nFind minimum:");
console.log("Test Case 1:", findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log("Test Case 2:", findMin([3,4,5,1,2])); // Expected: 1
console.log("Test Case 3:", findMin([11,13,15,17])); // Expected: 11
