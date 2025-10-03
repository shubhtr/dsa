/**
 * Problem: Move Zeroes
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 */

function moveZeroes(nums) {
    // TODO: Implement in-place traversal to move all zeros to end
    // Hint: Use two pointers - one for current position, one for next non-zero position
    // Swap or overwrite elements to maintain relative order
    
    // Modify nums in-place, don't return anything
}

function moveZeroesTwoPointers(nums) {
    // TODO: Implement using two pointers approach
    // Hint: Use slow pointer for next non-zero position
    // Use fast pointer to scan through array
    
    // Modify nums in-place, don't return anything
}

function removeElement(nums, val) {
    // TODO: Remove all instances of val from nums in-place
    // Return the new length of array
    // Hint: Use two pointers - one for reading, one for writing
    
    return 0; // Placeholder
}

// Test cases
const test1 = [0, 1, 0, 3, 12];
const test2 = [0];
const test3 = [1, 2, 3, 4, 5];
const test4 = [0, 0, 0, 1, 2];

console.log("Original arrays:");
console.log("Test 1:", test1);
console.log("Test 2:", test2);
console.log("Test 3:", test3);
console.log("Test 4:", test4);

// Test moveZeroes
moveZeroes(test1);
moveZeroes(test2);
moveZeroes(test3);
moveZeroes(test4);

console.log("\nAfter moveZeroes:");
console.log("Test 1:", test1); // Expected: [1, 3, 12, 0, 0]
console.log("Test 2:", test2); // Expected: [0]
console.log("Test 3:", test3); // Expected: [1, 2, 3, 4, 5]
console.log("Test 4:", test4); // Expected: [1, 2, 0, 0, 0]

// Test removeElement
const test5 = [3, 2, 2, 3];
const test6 = [0, 1, 2, 2, 3, 0, 4, 2];

console.log("\nRemove element tests:");
console.log("Remove 3 from [3,2,2,3], new length:", removeElement(test5, 3)); // Expected: 2
console.log("Remove 2 from [0,1,2,2,3,0,4,2], new length:", removeElement(test6, 2)); // Expected: 5
