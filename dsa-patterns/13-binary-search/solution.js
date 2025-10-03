/**
 * Solution: Binary Search on Rotated Sorted Array
 * 
 * Time Complexity: O(log n) - binary search
 * Space Complexity: O(1) - iterative approach
 */

// Approach 1: Single Pass Binary Search
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

// Approach 2: Two Pass - Find Pivot Then Search
function searchTwoPass(nums, target) {
    const pivot = findPivot(nums);
    
    // Search in appropriate half
    if (pivot === 0) {
        return binarySearch(nums, 0, nums.length - 1, target);
    }
    
    if (target >= nums[0]) {
        return binarySearch(nums, 0, pivot - 1, target);
    } else {
        return binarySearch(nums, pivot, nums.length - 1, target);
    }
}

function findPivot(nums) {
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
    
    return left;
}

function binarySearch(nums, left, right, target) {
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

// Find Minimum in Rotated Sorted Array
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

// Additional Binary Search Patterns

// Basic Binary Search
function binarySearchBasic(nums, target) {
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

// Find First and Last Position
function searchRange(nums, target) {
    const first = findFirst(nums, target);
    const last = findLast(nums, target);
    
    return [first, last];
}

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

// Find Peak Element
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

// Search Insert Position
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
    
    return left;
}

// Find Square Root
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

// Find Minimum in Rotated Array with Duplicates
function findMinWithDuplicates(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            // nums[mid] === nums[right], can't determine which half
            right--;
        }
    }
    
    return nums[left];
}

// Search in 2D Matrix
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

// Find K Closest Elements
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

// Capacity to Ship Packages
function shipWithinDays(weights, days) {
    let left = Math.max(...weights); // Minimum capacity
    let right = weights.reduce((sum, w) => sum + w, 0); // Maximum capacity
    
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

// Test cases
console.log("=== Search in Rotated Sorted Array ===");
console.log("Test Case 1:", search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log("Test Case 2:", search([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log("Test Case 3:", search([1], 0)); // Expected: -1
console.log("Test Case 4:", search([1,3], 3)); // Expected: 1

console.log("\n=== Two-Pass Approach ===");
console.log("Test Case 1:", searchTwoPass([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log("Test Case 2:", searchTwoPass([4,5,6,7,0,1,2], 3)); // Expected: -1

console.log("\n=== Find Minimum ===");
console.log("Test Case 1:", findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log("Test Case 2:", findMin([3,4,5,1,2])); // Expected: 1
console.log("Test Case 3:", findMin([11,13,15,17])); // Expected: 11

console.log("\n=== Basic Binary Search ===");
console.log("Search 5 in [1,2,3,4,5,6,7]:", binarySearchBasic([1,2,3,4,5,6,7], 5)); // Expected: 4

console.log("\n=== Search Range ===");
console.log("Range of 8 in [5,7,7,8,8,10]:", searchRange([5,7,7,8,8,10], 8)); // Expected: [3,4]

console.log("\n=== Find Peak Element ===");
console.log("Peak in [1,2,3,1]:", findPeakElement([1,2,3,1])); // Expected: 2

console.log("\n=== Search Insert Position ===");
console.log("Insert 5 in [1,3,5,6]:", searchInsert([1,3,5,6], 5)); // Expected: 2
console.log("Insert 2 in [1,3,5,6]:", searchInsert([1,3,5,6], 2)); // Expected: 1

console.log("\n=== Square Root ===");
console.log("Sqrt of 8:", mySqrt(8)); // Expected: 2

console.log("\n=== Find Min with Duplicates ===");
console.log("Min in [2,2,2,0,1]:", findMinWithDuplicates([2,2,2,0,1])); // Expected: 0

console.log("\n=== Search in 2D Matrix ===");
const matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]];
console.log("Search 5 in matrix:", searchMatrix(matrix, 5)); // Expected: true

console.log("\n=== Find Closest Elements ===");
console.log("4 closest to 3 in [1,2,3,4,5]:", findClosestElements([1,2,3,4,5], 4, 3)); // Expected: [1,2,3,4]

/**
 * Key Insights:
 * 1. Binary search works on sorted data structures
 * 2. Modified binary search handles rotated arrays
 * 3. Always compare with the "sorted half" to determine direction
 * 4. Use left <= right for inclusive search, left < right for exclusive
 * 5. Handle edge cases like duplicates and empty arrays
 * 
 * Binary Search Variants:
 * - Basic search: find exact element
 * - Range search: find first/last occurrence
 * - Insert position: find where to insert element
 * - Peak finding: find local maximum
 * - Rotated array: handle rotation
 * - 2D search: search in matrix
 * - Answer search: find optimal value
 * 
 * Template Patterns:
 * - Standard: left <= right, mid = (left + right) / 2
 * - Lower bound: left < right, right = mid
 * - Upper bound: left < right, left = mid + 1
 * - Rotated: check which half is sorted
 */
