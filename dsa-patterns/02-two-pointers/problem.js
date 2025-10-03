/**
 * Problem: Two Sum - Sorted Array
 * 
 * Given a sorted array of integers and a target sum,
 * find two numbers such that they add up to the target.
 * Return the indices of the two numbers (1-indexed).
 * 
 * Example 1:
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 * Explanation: numbers[1] + numbers[2] = 2 + 7 = 9
 * 
 * Example 2:
 * Input: numbers = [2, 3, 4], target = 6
 * Output: [1, 3]
 * Explanation: numbers[1] + numbers[3] = 2 + 4 = 6
 * 
 * Example 3:
 * Input: numbers = [-1, 0], target = -1
 * Output: [1, 2]
 * Explanation: numbers[1] + numbers[2] = -1 + 0 = -1
 * 
 * Constraints:
 * - 2 <= numbers.length <= 3 * 10^4
 * - -1000 <= numbers[i] <= 1000
 * - numbers is sorted in non-decreasing order
 * - -1000 <= target <= 1000
 * - There is exactly one solution
 */

function twoSumSorted(numbers, target) {
    // TODO: Implement the two pointers approach
    // Hint: Use left pointer at start and right pointer at end
    // Move pointers based on comparison with target sum
    
    return []; // Placeholder
}

// Test cases
console.log("Test Case 1:", twoSumSorted([2, 7, 11, 15], 9)); // Expected: [1, 2]
console.log("Test Case 2:", twoSumSorted([2, 3, 4], 6)); // Expected: [1, 3]
console.log("Test Case 3:", twoSumSorted([-1, 0], -1)); // Expected: [1, 2]
console.log("Test Case 4:", twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8)); // Expected: [4, 5]
