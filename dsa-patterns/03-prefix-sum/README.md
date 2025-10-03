# Prefix Sum Pattern

## Overview
The prefix sum (also known as cumulative sum) technique precomputes the sum of elements from the beginning of the array up to each index. This allows for efficient range sum queries and is fundamental to solving many array problems involving subarray sums.

## When to Use
- Multiple range sum queries on the same array
- Problems involving subarray sums
- Optimization problems with cumulative data
- Matrix range sum queries (2D prefix sum)
- Counting problems with ranges
- When you need to compute sum of any subarray frequently

## Core Concept
- **Prefix Sum Array**: `prefixSum[i]` contains sum of elements from index 0 to i-1
- **Range Query**: Sum from index i to j = `prefixSum[j+1] - prefixSum[i]`
- **Preprocessing**: O(n) time to build prefix sum array
- **Query Time**: O(1) per query after preprocessing

## Pattern Structure
1. **1D Prefix Sum**: For linear arrays
2. **2D Prefix Sum**: For matrices
3. **Circular Prefix Sum**: For circular arrays
4. **Modular Prefix Sum**: For problems with modular arithmetic

## Common Problems
- Range Sum Query (Immutable/Mutable)
- Subarray Sum Equals K
- Continuous Subarray Sum
- Matrix Block Sum
- Count Subarrays with Sum
- Maximum Subarray Sum
- Product of Array Except Self

## Time Complexity
- **Preprocessing**: O(n) for 1D, O(m×n) for 2D
- **Query**: O(1) per query
- **Total**: O(n + q) where q is number of queries

## Space Complexity
- **1D**: O(n) for prefix sum array
- **2D**: O(m×n) for prefix sum matrix
- **In-place**: O(1) if allowed to modify input

## Key Implementation Steps
1. Initialize prefix sum array with proper size
2. Set base case (usually prefixSum[0] = 0)
3. Build prefix sum array iteratively
4. Use formula for range queries
5. Handle edge cases (empty array, single element)

## Template Patterns

### 1D Prefix Sum
```javascript
class PrefixSum {
    constructor(nums) {
        this.prefixSum = new Array(nums.length + 1);
        this.prefixSum[0] = 0;
        
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }
    
    sumRange(i, j) {
        return this.prefixSum[j + 1] - this.prefixSum[i];
    }
}
```

### 2D Prefix Sum
```javascript
class PrefixSum2D {
    constructor(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        this.prefixSum = Array(rows + 1).fill()
            .map(() => Array(cols + 1).fill(0));
        
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
```

## Example Applications

### Range Sum Query
```javascript
function rangeSum(nums, queries) {
    const prefixSum = new Array(nums.length + 1);
    prefixSum[0] = 0;
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    return queries.map(([start, end]) => 
        prefixSum[end + 1] - prefixSum[start]
    );
}
```

### Subarray Sum Equals K
```javascript
function subarraySum(nums, k) {
    const prefixSum = new Map();
    prefixSum.set(0, 1); // Empty subarray has sum 0
    
    let sum = 0;
    let count = 0;
    
    for (let num of nums) {
        sum += num;
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k);
        }
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }
    
    return count;
}
```

## Advanced Variations

### Circular Array
```javascript
function circularPrefixSum(nums) {
    const n = nums.length;
    const prefixSum = new Array(2 * n + 1);
    prefixSum[0] = 0;
    
    for (let i = 0; i < 2 * n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i % n];
    }
    
    return prefixSum;
}
```

### Modular Prefix Sum
```javascript
function modularPrefixSum(nums, mod) {
    const prefixSum = new Array(nums.length + 1);
    prefixSum[0] = 0;
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = (prefixSum[i] + nums[i]) % mod;
    }
    
    return prefixSum;
}
```

## Practice Problems
1. Range Sum Query - Immutable
2. Range Sum Query - Mutable
3. Subarray Sum Equals K
4. Continuous Subarray Sum
5. Matrix Block Sum
6. Count Subarrays with Sum
7. Maximum Subarray Sum
8. Product of Array Except Self
9. Minimum Size Subarray Sum
10. Binary Subarrays with Sum
