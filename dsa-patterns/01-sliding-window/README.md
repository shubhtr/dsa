# Sliding Window Pattern

## Overview
The sliding window technique is used to solve problems involving subarrays or substrings where we need to find a contiguous sequence that meets certain criteria. Instead of recalculating everything for each possible subarray, we maintain a "window" and slide it across the data structure.

## When to Use
- Problems involving contiguous subarrays/substrings
- Need to find maximum, minimum, or specific condition within a window
- Window size is fixed or can be determined dynamically
- Optimization problems where brute force would be O(n²) or worse

## Pattern Structure
1. **Fixed Size Window**: Window size is predetermined
2. **Variable Size Window**: Window size changes based on conditions
3. **Two Pointers**: Use start and end pointers to define window boundaries

## Common Problems
- Maximum/Minimum sum of subarray of size K
- Longest substring with K distinct characters
- Smallest subarray with sum >= target
- Find all anagrams in a string
- Longest substring without repeating characters

## Time Complexity
- **Fixed Window**: O(n) - each element visited at most twice
- **Variable Window**: O(n) - each element added and removed at most once
- **Two Pointers**: O(n) - both pointers traverse the array once

## Space Complexity
- Usually O(1) additional space (not counting input)
- May use O(k) for hash maps in some problems

## Key Implementation Steps
1. Initialize window boundaries (start, end)
2. Expand window until condition is met
3. Contract window while maintaining condition
4. Update result during expansion/contraction
5. Handle edge cases (empty array, single element, etc.)

## Example Applications
```javascript
// Fixed window size
function maxSumSubarray(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
    
    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

## Practice Problems
1. Maximum Sum of Subarray of Size K
2. Longest Substring with K Distinct Characters
3. Smallest Subarray with a Given Sum
4. Longest Substring with Same Letters after Replacement
5. Permutation in a String
6. String Anagrams
7. Subarray Product Less Than K
8. Longest Subarray with Ones after Replacement
