/**
 * Problem: Range Sum Query - Immutable
 * 
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * 
 * Implement the NumArray class:
 * - NumArray(int[] nums) Initializes the object with the integer array nums.
 * - int sumRange(int i, int j) Returns the sum of the elements of the nums array in the range [i, j] inclusive
 * 
 * Example 1:
 * Input: ["NumArray", "sumRange", "sumRange", "sumRange"]
 *        [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * Output: [null, 1, -1, -3]
 * 
 * Explanation:
 * NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 * numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
 * numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
 * numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 * 
 * Constraints:
 * - 0 <= nums.length <= 10^4
 * - -10^5 <= nums[i] <= 10^5
 * - 0 <= i <= j < nums.length
 * - At most 10^4 calls will be made to sumRange
 */

class NumArray {
    constructor(nums) {
        // TODO: Initialize prefix sum array
        // Hint: prefixSum[i] should contain sum of elements from index 0 to i
    }
    
    sumRange(i, j) {
        // TODO: Return sum from index i to j using prefix sum
        // Hint: sum(i, j) = prefixSum[j] - prefixSum[i-1]
        // Handle edge case when i = 0
    }
}

// Alternative function-based approach
function rangeSum(nums, queries) {
    // TODO: For each query [i, j], return the sum of elements from i to j
    // Use prefix sum to optimize multiple queries
    
    return []; // Placeholder
}

// Test cases
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log("Test Case 1:", numArray.sumRange(0, 2)); // Expected: 1
console.log("Test Case 2:", numArray.sumRange(2, 5)); // Expected: -1
console.log("Test Case 3:", numArray.sumRange(0, 5)); // Expected: -3

console.log("\nFunction-based approach:");
console.log("Queries result:", rangeSum([-2, 0, 3, -5, 2, -1], [[0, 2], [2, 5], [0, 5]])); 
// Expected: [1, -1, -3]
