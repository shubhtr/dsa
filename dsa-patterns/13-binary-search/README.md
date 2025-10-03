# Binary Search Pattern

## Overview
Binary search is a highly efficient searching algorithm that works on sorted data structures. It repeatedly divides the search space in half, eliminating half of the remaining elements at each step, achieving O(log n) time complexity.

## When to Use Binary Search
- **Sorted Data**: Array or list is sorted (ascending or descending)
- **Search Operations**: Finding elements, insert positions, or ranges
- **Optimization Problems**: Finding optimal values in search space
- **Peak Finding**: Locating local maxima or minima
- **Rotated Arrays**: Modified binary search for rotated sorted arrays
- **Answer Space**: When answer lies in a searchable range

## Pattern Characteristics
- **Divide and Conquer**: Splits search space in half each iteration
- **Logarithmic Time**: O(log n) time complexity
- **Constant Space**: O(1) space complexity (iterative)
- **Prerequisite**: Data must be sorted

## Common Problems
- Search in Rotated Sorted Array
- Find First and Last Position of Element
- Search Insert Position
- Find Peak Element
- Find Minimum in Rotated Sorted Array
- Search in 2D Matrix
- Find Square Root
- Find K Closest Elements
- Capacity to Ship Packages
- Median of Two Sorted Arrays

## Time Complexity
- **Standard Search**: O(log n)
- **Range Search**: O(log n) for each operation
- **Peak Finding**: O(log n)
- **Rotated Arrays**: O(log n)

## Space Complexity
- **Iterative**: O(1)
- **Recursive**: O(log n) for call stack

## Implementation Patterns

### Basic Binary Search
```javascript
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

### Find Insert Position
```javascript
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left; // Insert position
}
```

### Find First Occurrence
```javascript
function findFirst(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let first = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            first = mid;
            right = mid - 1; // Continue searching left
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return first;
}
```

### Find Last Occurrence
```javascript
function findLast(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let last = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            last = mid;
            left = mid + 1; // Continue searching right
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return last;
}
```

## Advanced Patterns

### Search in Rotated Sorted Array
```javascript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Check which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}
```

### Find Peak Element
```javascript
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}
```

### Find Minimum in Rotated Array
```javascript
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return nums[left];
}
```

### Search in 2D Matrix
```javascript
function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0) return false;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let left = 0;
    let right = rows * cols - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / cols);
        const col = mid % cols;
        const value = matrix[row][col];
        
        if (value === target) {
            return true;
        } else if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}
```

## Specialized Applications

### Square Root Calculation
```javascript
function mySqrt(x) {
    if (x < 2) return x;
    
    let left = 2;
    let right = Math.floor(x / 2);
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        
        if (square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}
```

### Find K Closest Elements
```javascript
function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Compare distances from x
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return arr.slice(left, left + k);
}
```

### Capacity to Ship Packages
```javascript
function shipWithinDays(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((sum, w) => sum + w, 0);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canShip(weights, days, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

function canShip(weights, days, capacity) {
    let currentWeight = 0;
    let daysNeeded = 1;
    
    for (const weight of weights) {
        if (currentWeight + weight > capacity) {
            daysNeeded++;
            currentWeight = weight;
        } else {
            currentWeight += weight;
        }
    }
    
    return daysNeeded <= days;
}
```

### Median of Two Sorted Arrays
```javascript
function findMedianSortedArrays(nums1, nums2) {
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);
    
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    let left = 0;
    let right = nums1.length - 1;
    
    while (true) {
        const mid1 = Math.floor((left + right) / 2);
        const mid2 = half - mid1 - 2;
        
        const left1 = mid1 >= 0 ? nums1[mid1] : -Infinity;
        const right1 = mid1 + 1 < nums1.length ? nums1[mid1 + 1] : Infinity;
        const left2 = mid2 >= 0 ? nums2[mid2] : -Infinity;
        const right2 = mid2 + 1 < nums2.length ? nums2[mid2 + 1] : Infinity;
        
        if (left1 <= right2 && left2 <= right1) {
            if (total % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.min(right1, right2);
            }
        } else if (left1 > right2) {
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
}
```

## Common Templates

### Template 1: Standard Binary Search
```javascript
function binarySearchTemplate1(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

### Template 2: Lower Bound Search
```javascript
function binarySearchTemplate2(nums, target) {
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```

### Template 3: Upper Bound Search
```javascript
function binarySearchTemplate3(nums, target) {
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```

## Common Pitfalls

### Integer Overflow
```javascript
// WRONG - can cause overflow
const mid = (left + right) / 2;

// RIGHT - avoid overflow
const mid = left + Math.floor((right - left) / 2);
```

### Boundary Conditions
```javascript
// WRONG - might miss edge cases
while (left < right) {
    // ...
}

// RIGHT - handle all cases
while (left <= right) {
    // ...
}
```

### Off-by-One Errors
```javascript
// WRONG - might skip elements
right = mid;

// RIGHT - adjust boundaries correctly
right = mid - 1;
```

## Practice Problems
1. Search in Rotated Sorted Array
2. Find First and Last Position of Element in Sorted Array
3. Search Insert Position
4. Find Peak Element
5. Find Minimum in Rotated Sorted Array
6. Search in 2D Matrix
7. Find Square Root
8. Find K Closest Elements
9. Capacity to Ship Packages
10. Median of Two Sorted Arrays
11. Search in Rotated Sorted Array II
12. Find Minimum in Rotated Sorted Array II
13. Search a 2D Matrix II
14. Find K-th Smallest Pair Distance
15. Split Array Largest Sum
