/**
 * Problem: Maximum Sum of Subarray of Size K
 * 
 * Given an array of positive numbers and a positive number 'k',
 * find the maximum sum of any contiguous subarray of size k.
 * 
 * Example 1:
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 * 
 * Example 2:
 * Input: [2, 3, 4, 1, 5], k=2
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 * 
 * Constraints:
 * - 1 <= k <= array.length <= 1000
 * - 1 <= array[i] <= 1000
 */

function maxSumSubarray(arr, k) {
    // TODO: Implement the sliding window approach
    // Hint: Use two pointers and maintain a window of size k
    // Calculate sum of current window and keep track of maximum sum
    
    return 0; // Placeholder
}

// Test cases
console.log("Test Case 1:", maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
console.log("Test Case 2:", maxSumSubarray([2, 3, 4, 1, 5], 2)); // Expected: 7
console.log("Test Case 3:", maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Expected: 39
