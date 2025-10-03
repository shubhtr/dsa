/**
 * Solution: Maximum Sum of Subarray of Size K
 * 
 * Time Complexity: O(n) - Each element is visited at most twice
 * Space Complexity: O(1) - Only using a few variables
 */

function maxSumSubarray(arr, k) {
    if (arr.length < k) return 0;
    
    let windowSum = 0;
    let maxSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window and update maxSum
    for (let i = k; i < arr.length; i++) {
        // Remove the leftmost element and add the rightmost element
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Alternative approach with explicit start and end pointers
function maxSumSubarrayTwoPointers(arr, k) {
    if (arr.length < k) return 0;
    
    let start = 0;
    let windowSum = 0;
    let maxSum = 0;
    
    for (let end = 0; end < arr.length; end++) {
        windowSum += arr[end];
        
        // Once we hit the window size, start sliding
        if (end >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[start];
            start++;
        }
    }
    
    return maxSum;
}

// Test cases
console.log("=== Sliding Window Approach ===");
console.log("Test Case 1:", maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
console.log("Test Case 2:", maxSumSubarray([2, 3, 4, 1, 5], 2)); // Expected: 7
console.log("Test Case 3:", maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Expected: 39

console.log("\n=== Two Pointers Approach ===");
console.log("Test Case 1:", maxSumSubarrayTwoPointers([2, 1, 5, 1, 3, 2], 3)); // Expected: 9
console.log("Test Case 2:", maxSumSubarrayTwoPointers([2, 3, 4, 1, 5], 2)); // Expected: 7
console.log("Test Case 3:", maxSumSubarrayTwoPointers([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Expected: 39

/**
 * Key Insights:
 * 1. Use a sliding window of fixed size k
 * 2. Calculate sum of first window, then slide one element at a time
 * 3. Remove left element and add right element to maintain window
 * 4. Keep track of maximum sum encountered
 * 5. Time complexity is O(n) as each element is visited at most twice
 */
