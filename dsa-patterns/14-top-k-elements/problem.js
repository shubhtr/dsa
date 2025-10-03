/**
 * Problem: Top K Frequent Elements
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k is in the range [1, the number of unique elements in the array]
 * - It is guaranteed that the answer is unique
 */

function topKFrequent(nums, k) {
    // TODO: Implement using heap (priority queue) approach
    // Hint: Count frequencies, then use min-heap to maintain top k elements
    
    return []; // Placeholder
}

function topKFrequentBucket(nums, k) {
    // TODO: Implement using bucket sort approach
    // Hint: Use frequency as bucket index, then collect top k from buckets
    
    return []; // Placeholder
}

function topKFrequentSort(nums, k) {
    // TODO: Implement using sorting approach
    // Hint: Count frequencies, sort by frequency, return top k
    
    return []; // Placeholder
}

function findKthLargest(nums, k) {
    // TODO: Find the kth largest element in array
    // Hint: Use quickselect or heap approach
    
    return 0; // Placeholder
}

// Test cases
console.log("Test Case 1:", topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log("Test Case 2:", topKFrequent([1], 1)); // Expected: [1]
console.log("Test Case 3:", topKFrequent([1,1,1,2,2,3,3,3,3], 2)); // Expected: [3,1]

console.log("\nBucket sort approach:");
console.log("Test Case 1:", topKFrequentBucket([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log("Test Case 2:", topKFrequentBucket([1], 1)); // Expected: [1]

console.log("\nSorting approach:");
console.log("Test Case 1:", topKFrequentSort([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log("Test Case 2:", topKFrequentSort([1], 1)); // Expected: [1]

console.log("\nKth Largest:");
console.log("Test Case 1:", findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
console.log("Test Case 2:", findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4
