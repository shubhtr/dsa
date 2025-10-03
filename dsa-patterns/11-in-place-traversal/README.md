# In-Place Traversal Pattern

## Overview
In-place traversal algorithms modify data structures without using additional space proportional to the input size. These algorithms use the existing data structure to store intermediate results, achieving O(1) space complexity while maintaining efficiency.

## When to Use In-Place Traversal
- **Memory Constraints**: Limited memory available
- **Space Optimization**: Need O(1) additional space
- **Array Manipulation**: Moving, removing, or reordering elements
- **Sorting**: Some sorting algorithms work in-place
- **Data Processing**: Transform data without creating copies

## Pattern Characteristics
- **Constant Space**: Uses O(1) additional space
- **Modifies Input**: Changes the original data structure
- **Two Pointers**: Often uses read/write pointer technique
- **Swapping**: Exchanges elements to achieve desired order

## Common Problems
- Move Zeroes
- Remove Element
- Remove Duplicates from Sorted Array
- Sort Colors (Dutch National Flag)
- Reverse Array
- Rotate Array
- Find Missing Number
- First Missing Positive
- Product of Array Except Self
- Merge Sorted Arrays

## Time Complexity
- **Most Problems**: O(n) - single pass through data
- **Some Operations**: O(n log n) for sorting
- **Complex Operations**: O(n²) for nested operations

## Space Complexity
- **All Problems**: O(1) - only using constant extra variables
- **No Additional Arrays**: Modify input in-place

## Implementation Patterns

### Two Pointers (Read/Write)
```javascript
function removeElement(nums, val) {
    let writeIndex = 0;
    
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    return writeIndex;
}
```

### Move Elements to End
```javascript
function moveZeroes(nums) {
    let writeIndex = 0;
    
    // Move non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    // Fill remaining with zeros
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}
```

### Dutch National Flag (Three-way Partitioning)
```javascript
function sortColors(nums) {
    let low = 0;    // Boundary for 0s
    let mid = 0;    // Current element
    let high = nums.length - 1; // Boundary for 2s
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else { // nums[mid] === 2
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}
```

### Reverse Operations
```javascript
function reverseArray(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
```

## Advanced Patterns

### Rotate Array Using Reversals
```javascript
function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // Handle k > n
    
    // Reverse entire array
    reverse(nums, 0, n - 1);
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    // Reverse remaining elements
    reverse(nums, k, n - 1);
}
```

### Negative Marking for Presence
```javascript
function firstMissingPositive(nums) {
    const n = nums.length;
    
    // Replace invalid numbers with n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }
    
    // Mark presence using negative signs
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    
    // Find first positive (missing number)
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    
    return n + 1;
}
```

### XOR for Finding Missing/Duplicate
```javascript
function missingNumber(nums) {
    const n = nums.length;
    let xor = n;
    
    for (let i = 0; i < n; i++) {
        xor ^= i ^ nums[i];
    }
    
    return xor;
}

function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
    
    // Find intersection point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Find entrance to cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

### Product Calculation
```javascript
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Left pass: calculate left products
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Right pass: multiply with right products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}
```

## Specialized Applications

### Remove Duplicates with Constraints
```javascript
function removeDuplicatesII(nums) {
    if (nums.length <= 2) return nums.length;
    
    let writeIndex = 2;
    
    for (let readIndex = 2; readIndex < nums.length; readIndex++) {
        // Allow at most 2 duplicates
        if (nums[readIndex] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    return writeIndex;
}
```

### Merge Sorted Arrays
```javascript
function merge(nums1, m, nums2, n) {
    let i = m - 1;    // Last element in nums1
    let j = n - 1;    // Last element in nums2
    let k = m + n - 1; // Last position in nums1
    
    // Merge from end to beginning
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
    
    // Copy remaining elements from nums2
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
```

### Find All Duplicates
```javascript
function findDuplicates(nums) {
    const duplicates = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }
    
    return duplicates;
}
```

## Optimization Techniques

### Early Termination
```javascript
function moveZeroesOptimized(nums) {
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Only swap if necessary
            if (writeIndex !== i) {
                [nums[writeIndex], nums[i]] = [nums[i], nums[writeIndex]];
            }
            writeIndex++;
        }
    }
}
```

### Single Pass Operations
```javascript
function removeDuplicatesSinglePass(nums) {
    if (nums.length === 0) return 0;
    
    let writeIndex = 1;
    
    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    return writeIndex;
}
```

## Common Pitfalls

### Modifying Array While Iterating
```javascript
// WRONG - modifying array while iterating
function wrongRemove(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1); // Changes array length
        }
    }
}

// RIGHT - use two pointers
function correctRemove(nums, val) {
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    return writeIndex;
}
```

### Not Handling Edge Cases
```javascript
// WRONG - doesn't handle empty array
function wrongMoveZeroes(nums) {
    let writeIndex = 0;
    // ... rest of code
}

// RIGHT - handle edge cases
function correctMoveZeroes(nums) {
    if (nums.length === 0) return;
    
    let writeIndex = 0;
    // ... rest of code
}
```

## Practice Problems
1. Move Zeroes
2. Remove Element
3. Remove Duplicates from Sorted Array
4. Remove Duplicates from Sorted Array II
5. Sort Colors
6. Reverse Array
7. Rotate Array
8. Find Missing Number
9. First Missing Positive
10. Product of Array Except Self
11. Merge Sorted Array
12. Find All Duplicates in Array
13. Set Matrix Zeroes
14. Spiral Matrix
15. Pascal's Triangle
