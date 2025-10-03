/**
 * Solution: Range Sum Query - Immutable
 * 
 * Time Complexity: 
 * - Constructor: O(n) - build prefix sum array
 * - sumRange: O(1) - direct array access
 * 
 * Space Complexity: O(n) - store prefix sum array
 */

class NumArray {
    constructor(nums) {
        // Initialize prefix sum array
        this.prefixSum = new Array(nums.length + 1);
        this.prefixSum[0] = 0; // Base case: sum of 0 elements is 0
        
        // Build prefix sum array
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }
    
    sumRange(i, j) {
        // Sum from index i to j = prefixSum[j+1] - prefixSum[i]
        // prefixSum[j+1] includes elements from 0 to j
        // prefixSum[i] includes elements from 0 to i-1
        // Subtracting gives us elements from i to j
        return this.prefixSum[j + 1] - this.prefixSum[i];
    }
}

// Alternative implementation with better variable names
class NumArrayOptimized {
    constructor(nums) {
        this.cumulativeSum = new Array(nums.length + 1).fill(0);
        
        for (let i = 0; i < nums.length; i++) {
            this.cumulativeSum[i + 1] = this.cumulativeSum[i] + nums[i];
        }
    }
    
    sumRange(left, right) {
        return this.cumulativeSum[right + 1] - this.cumulativeSum[left];
    }
}

// Function-based approach for multiple queries
function rangeSum(nums, queries) {
    // Build prefix sum array
    const prefixSum = new Array(nums.length + 1);
    prefixSum[0] = 0;
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    // Process each query
    const results = [];
    for (const [start, end] of queries) {
        results.push(prefixSum[end + 1] - prefixSum[start]);
    }
    
    return results;
}

// Advanced: 2D Prefix Sum (for matrix problems)
class NumMatrix {
    constructor(matrix) {
        if (matrix.length === 0 || matrix[0].length === 0) {
            this.prefixSum = [[]];
            return;
        }
        
        const rows = matrix.length;
        const cols = matrix[0].length;
        this.prefixSum = Array(rows + 1).fill().map(() => Array(cols + 1).fill(0));
        
        // Build 2D prefix sum
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                this.prefixSum[i][j] = matrix[i-1][j-1] + 
                                     this.prefixSum[i-1][j] + 
                                     this.prefixSum[i][j-1] - 
                                     this.prefixSum[i-1][j-1];
            }
        }
    }
    
    sumRegion(row1, col1, row2, col2) {
        return this.prefixSum[row2+1][col2+1] - 
               this.prefixSum[row1][col2+1] - 
               this.prefixSum[row2+1][col1] + 
               this.prefixSum[row1][col1];
    }
}

// Test cases
console.log("=== Class-based Approach ===");
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log("Test Case 1:", numArray.sumRange(0, 2)); // Expected: 1
console.log("Test Case 2:", numArray.sumRange(2, 5)); // Expected: -1
console.log("Test Case 3:", numArray.sumRange(0, 5)); // Expected: -3

console.log("\n=== Optimized Class ===");
const numArrayOpt = new NumArrayOptimized([-2, 0, 3, -5, 2, -1]);
console.log("Test Case 1:", numArrayOpt.sumRange(0, 2)); // Expected: 1
console.log("Test Case 2:", numArrayOpt.sumRange(2, 5)); // Expected: -1

console.log("\n=== Function-based Approach ===");
console.log("Queries result:", rangeSum([-2, 0, 3, -5, 2, -1], [[0, 2], [2, 5], [0, 5]])); 
// Expected: [1, -1, -3]

console.log("\n=== 2D Prefix Sum Example ===");
const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
];
const numMatrix = new NumMatrix(matrix);
console.log("2D Sum (2,1 to 4,3):", numMatrix.sumRegion(2, 1, 4, 3)); // Expected: 8

/**
 * Key Insights:
 * 1. Precompute prefix sums to answer range queries in O(1)
 * 2. prefixSum[i] = sum of elements from index 0 to i-1
 * 3. Sum from i to j = prefixSum[j+1] - prefixSum[i]
 * 4. Handle edge cases (empty array, single element)
 * 5. For 2D: sum = bottomRight - topRight - bottomLeft + topLeft
 * 
 * Applications:
 * - Range sum queries
 * - Subarray sum problems
 * - Matrix sum queries
 * - Counting problems with ranges
 * - Optimization problems with cumulative data
 */
