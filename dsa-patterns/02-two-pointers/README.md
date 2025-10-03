# Two Pointers Pattern

## Overview
The two pointers technique uses two pointers that traverse the data structure (usually an array) from different positions, typically moving towards each other or in the same direction at different speeds. This pattern is highly efficient for solving problems involving pairs, triplets, or subarrays.

## When to Use
- Array is sorted (most common case)
- Need to find pairs, triplets, or combinations
- Problems involving palindromes
- Removing duplicates from sorted array
- Finding subarrays with specific properties
- Container/maximum area problems

## Pattern Types

### 1. Opposite Direction (Converging)
- Start with pointers at both ends
- Move towards each other based on conditions
- Example: Two Sum in sorted array

### 2. Same Direction (Fast and Slow)
- Both pointers start at the same position
- Move at different speeds
- Example: Remove duplicates, detect cycles

### 3. Fixed Distance
- Pointers maintain constant distance
- Example: Maximum sum subarray of size K

## Common Problems
- Two Sum (sorted array)
- Three Sum
- Container With Most Water
- Remove Duplicates from Sorted Array
- Valid Palindrome
- Move Zeroes
- Sort Colors
- Trapping Rain Water

## Time Complexity
- Usually O(n) - each element visited at most once
- Some variations may be O(n log n) due to sorting
- Three/four sum variations: O(n²) or O(n³)

## Space Complexity
- Usually O(1) - only using two pointers
- Some problems may require O(1) to O(n) for results

## Key Implementation Steps
1. Initialize two pointers at appropriate positions
2. Define the condition for pointer movement
3. Move pointers based on the problem requirements
4. Handle edge cases (empty array, single element, etc.)
5. Return result when condition is met

## Template Patterns

### Opposite Direction Template
```javascript
function oppositeDirection(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        if (condition(arr[left], arr[right])) {
            // Process result
            left++;
            right--;
        } else if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
}
```

### Same Direction Template
```javascript
function sameDirection(arr) {
    let slow = 0;
    let fast = 0;
    
    while (fast < arr.length) {
        if (condition(arr[slow], arr[fast])) {
            slow++;
            arr[slow] = arr[fast];
        }
        fast++;
    }
}
```

## Example Applications

### Two Sum in Sorted Array
```javascript
function twoSumSorted(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}
```

### Remove Duplicates
```javascript
function removeDuplicates(nums) {
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
}
```

## Practice Problems
1. Two Sum (sorted array)
2. Three Sum
3. Container With Most Water
4. Remove Duplicates from Sorted Array
5. Valid Palindrome
6. Move Zeroes
7. Sort Colors
8. Trapping Rain Water
9. Squares of a Sorted Array
10. Backspace String Compare
