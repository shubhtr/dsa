/**
 * Solution: In-Place Traversal Problems
 * 
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using constant extra space
 */

// Approach 1: Two Pointers - Overwrite
function moveZeroes(nums) {
    let writeIndex = 0;
    
    // Move all non-zero elements to the beginning
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    // Fill remaining positions with zeros
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Approach 2: Two Pointers - Swap
function moveZeroesTwoPointers(nums) {
    let left = 0; // Points to next position for non-zero element
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            // Swap if necessary
            if (left !== right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
            }
            left++;
        }
    }
}

// Approach 3: Remove Element (similar pattern)
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

// Additional In-Place Patterns

// Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
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

// Remove Duplicates (allow at most 2 duplicates)
function removeDuplicatesII(nums) {
    if (nums.length <= 2) return nums.length;
    
    let writeIndex = 2;
    
    for (let readIndex = 2; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[writeIndex - 2]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    return writeIndex;
}

// Sort Colors (Dutch National Flag Problem)
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
            // Don't increment mid because we need to check swapped element
        }
    }
}

// Reverse Array
function reverseArray(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

// Rotate Array
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

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Find Missing Number
function missingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    
    for (const num of nums) {
        actualSum += num;
    }
    
    return expectedSum - actualSum;
}

// Find Missing Number (using XOR)
function missingNumberXOR(nums) {
    const n = nums.length;
    let xor = n;
    
    for (let i = 0; i < n; i++) {
        xor ^= i ^ nums[i];
    }
    
    return xor;
}

// First Missing Positive
function firstMissingPositive(nums) {
    const n = nums.length;
    
    // Replace negatives, zeros, and numbers > n with n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }
    
    // Use negative marking to indicate presence
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    
    // Find first positive number
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    
    return n + 1;
}

// Product of Array Except Self
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Left pass: calculate left products
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Right pass: calculate right products and multiply
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}

// Test cases
console.log("=== Move Zeroes Tests ===");
const test1 = [0, 1, 0, 3, 12];
const test2 = [0];
const test3 = [1, 2, 3, 4, 5];
const test4 = [0, 0, 0, 1, 2];

console.log("Original arrays:");
console.log("Test 1:", test1);
console.log("Test 2:", test2);
console.log("Test 3:", test3);
console.log("Test 4:", test4);

moveZeroes(test1);
moveZeroes(test2);
moveZeroes(test3);
moveZeroes(test4);

console.log("\nAfter moveZeroes:");
console.log("Test 1:", test1); // Expected: [1, 3, 12, 0, 0]
console.log("Test 2:", test2); // Expected: [0]
console.log("Test 3:", test3); // Expected: [1, 2, 3, 4, 5]
console.log("Test 4:", test4); // Expected: [1, 2, 0, 0, 0]

console.log("\n=== Remove Element Tests ===");
const test5 = [3, 2, 2, 3];
const test6 = [0, 1, 2, 2, 3, 0, 4, 2];

console.log("Remove 3 from [3,2,2,3], new length:", removeElement(test5, 3)); // Expected: 2
console.log("Remove 2 from [0,1,2,2,3,0,4,2], new length:", removeElement(test6, 2)); // Expected: 5

console.log("\n=== Remove Duplicates Tests ===");
const test7 = [1, 1, 2, 2, 2, 3, 4, 4];
const test8 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log("Remove duplicates from [1,1,2,2,2,3,4,4], new length:", removeDuplicates(test7)); // Expected: 4
console.log("Remove duplicates from [0,0,1,1,1,2,2,3,3,4], new length:", removeDuplicates(test8)); // Expected: 5

console.log("\n=== Sort Colors Test ===");
const test9 = [2, 0, 2, 1, 1, 0];
sortColors(test9);
console.log("Sort colors [2,0,2,1,1,0]:", test9); // Expected: [0,0,1,1,2,2]

console.log("\n=== Reverse Array Test ===");
const test10 = [1, 2, 3, 4, 5];
reverseArray(test10);
console.log("Reverse [1,2,3,4,5]:", test10); // Expected: [5,4,3,2,1]

console.log("\n=== Rotate Array Test ===");
const test11 = [1, 2, 3, 4, 5, 6, 7];
rotate(test11, 3);
console.log("Rotate [1,2,3,4,5,6,7] by 3:", test11); // Expected: [5,6,7,1,2,3,4]

console.log("\n=== Missing Number Tests ===");
console.log("Missing number in [3,0,1]:", missingNumber([3, 0, 1])); // Expected: 2
console.log("Missing number XOR in [9,6,4,2,3,5,7,0,1]:", missingNumberXOR([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected: 8

console.log("\n=== First Missing Positive Test ===");
const test12 = [3, 4, -1, 1];
console.log("First missing positive in [3,4,-1,1]:", firstMissingPositive(test12)); // Expected: 2

console.log("\n=== Product Except Self Test ===");
console.log("Product except self [1,2,3,4]:", productExceptSelf([1, 2, 3, 4])); // Expected: [24,12,8,6]

/**
 * Key Insights:
 * 1. In-place algorithms modify input array without extra space
 * 2. Use two pointers: one for reading, one for writing
 * 3. Overwrite approach: write non-target elements first, then fill remaining
 * 4. Swap approach: swap elements when target is found
 * 5. Space complexity is O(1) - only using constant extra variables
 * 
 * In-Place Patterns:
 * - Two pointers (read/write)
 * - Dutch National Flag (three-way partitioning)
 * - Reverse operations
 * - Rotation using reversals
 * - Negative marking for presence
 * - XOR for finding missing/duplicate elements
 * 
 * Applications:
 * - Array manipulation without extra space
 * - Sorting algorithms (quicksort, heapsort)
 * - Removing duplicates/elements
 * - Reversing/rotating arrays
 * - Finding missing numbers
 * - Product calculations
 */
