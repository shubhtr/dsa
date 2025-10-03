/**
 * Solution: Two Sum - Sorted Array
 * 
 * Time Complexity: O(n) - Each element is visited at most once
 * Space Complexity: O(1) - Only using two pointers
 */

function twoSumSorted(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++; // Need larger sum, move left pointer right
        } else {
            right--; // Need smaller sum, move right pointer left
        }
    }
    
    return []; // No solution found (shouldn't happen per constraints)
}

// Alternative approach with early termination
function twoSumSortedOptimized(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            return [left + 1, right + 1];
        }
        
        // Since array is sorted, we can optimize pointer movement
        if (sum < target) {
            // Skip duplicates for left pointer
            while (left < right && numbers[left] === numbers[left + 1]) {
                left++;
            }
            left++;
        } else {
            // Skip duplicates for right pointer
            while (left < right && numbers[right] === numbers[right - 1]) {
                right--;
            }
            right--;
        }
    }
    
    return [];
}

// Generic two pointers template for other problems
function twoPointersTemplate(arr, condition) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        if (condition(arr[left], arr[right])) {
            // Found what we're looking for
            return [left, right];
        } else if (someCondition(arr[left], arr[right])) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// Test cases
console.log("=== Two Pointers Approach ===");
console.log("Test Case 1:", twoSumSorted([2, 7, 11, 15], 9)); // Expected: [1, 2]
console.log("Test Case 2:", twoSumSorted([2, 3, 4], 6)); // Expected: [1, 3]
console.log("Test Case 3:", twoSumSorted([-1, 0], -1)); // Expected: [1, 2]
console.log("Test Case 4:", twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8)); // Expected: [4, 5]

console.log("\n=== Optimized Approach (with duplicates handling) ===");
console.log("Test Case 1:", twoSumSortedOptimized([2, 7, 11, 15], 9)); // Expected: [1, 2]
console.log("Test Case 2:", twoSumSortedOptimized([2, 3, 4], 6)); // Expected: [1, 3]
console.log("Test Case 3:", twoSumSortedOptimized([-1, 0], -1)); // Expected: [1, 2]

/**
 * Key Insights:
 * 1. Use two pointers starting from opposite ends
 * 2. Since array is sorted, we can make intelligent decisions
 * 3. If sum < target, move left pointer right (increase sum)
 * 4. If sum > target, move right pointer left (decrease sum)
 * 5. Time complexity is O(n) as each element is visited at most once
 * 6. Space complexity is O(1) - no additional data structures needed
 * 
 * Variations:
 * - Three Sum: Add a third pointer or fix one element
 * - Four Sum: Extend the approach with nested loops
 * - Container With Most Water: Different movement condition
 * - Remove Duplicates: Move one pointer to track unique elements
 */
