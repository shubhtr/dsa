# Dynamic Programming Pattern

## Overview
Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler overlapping subproblems. It stores the solutions to subproblems to avoid redundant computations, making it highly efficient for optimization and counting problems.

## When to Use Dynamic Programming
- **Overlapping Subproblems**: Same subproblems are solved multiple times
- **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems
- **Optimization Problems**: Finding maximum, minimum, or optimal values
- **Counting Problems**: Counting number of ways or solutions
- **Decision Problems**: Making optimal decisions at each step

## DP Characteristics
- **Memoization**: Store solutions to avoid recomputation
- **Bottom-up or Top-down**: Two main approaches to build solutions
- **State Transition**: Define how to move from one state to another
- **Base Cases**: Define initial conditions for the problem

## Common Problems
- Climbing Stairs
- House Robber
- Longest Increasing Subsequence
- Longest Common Subsequence
- Edit Distance
- Coin Change
- Unique Paths
- Maximum Subarray
- Word Break
- Fibonacci Sequence

## Time Complexity
- **With Memoization**: O(n) to O(n²) depending on problem
- **Without DP**: Often exponential O(2^n) or worse
- **2D DP**: Usually O(m × n) where m, n are dimensions

## Space Complexity
- **1D DP**: O(n) for DP array
- **2D DP**: O(m × n) for DP matrix
- **Space Optimized**: O(1) to O(n) depending on optimization

## DP Approaches

### 1. Top-down (Memoization)
```javascript
function dpTopDown(n, memo = new Map()) {
    // Base cases
    if (n <= 1) return n;
    
    // Check memoization
    if (memo.has(n)) {
        return memo.get(n);
    }
    
    // Recursive case
    const result = dpTopDown(n - 1, memo) + dpTopDown(n - 2, memo);
    
    // Store result
    memo.set(n, result);
    return result;
}
```

### 2. Bottom-up (Tabulation)
```javascript
function dpBottomUp(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Initialize DP array
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    // Build solution from bottom-up
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}
```

## Implementation Patterns

### 1D DP Template
```javascript
function oneDimensionalDP(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Initialize DP array
    const dp = new Array(n + 1);
    dp[0] = baseCase0;
    dp[1] = baseCase1;
    
    // Fill DP array
    for (let i = 2; i <= n; i++) {
        dp[i] = combine(dp[i - 1], dp[i - 2]);
    }
    
    return dp[n];
}
```

### 2D DP Template
```javascript
function twoDimensionalDP(m, n) {
    // Initialize DP matrix
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Initialize base cases
    for (let i = 0; i <= m; i++) dp[i][0] = baseCase;
    for (let j = 0; j <= n; j++) dp[0][j] = baseCase;
    
    // Fill DP matrix
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = calculate(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
        }
    }
    
    return dp[m][n];
}
```

### Space Optimization
```javascript
function spaceOptimizedDP(n) {
    if (n <= 1) return n;
    
    // Use only necessary variables
    let prev2 = 0;
    let prev1 = 1;
    
    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```

## Common DP Patterns

### Fibonacci-like Sequences
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

### House Robber Pattern
```javascript
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```

### Longest Common Subsequence
```javascript
function lcs(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}
```

### Edit Distance
```javascript
function editDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Initialize base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // deletion
                    dp[i][j - 1],     // insertion
                    dp[i - 1][j - 1]  // substitution
                );
            }
        }
    }
    
    return dp[m][n];
}
```

## Advanced Patterns

### Knapsack Problems
```javascript
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w], // Don't take item
                    dp[i - 1][w - weights[i - 1]] + values[i - 1] // Take item
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}
```

### Coin Change
```javascript
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}
```

### Palindrome Subsequence
```javascript
function longestPalindromeSubseq(s) {
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(0));
    
    // Single character palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    
    // Fill DP table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[0][n - 1];
}
```

## Optimization Techniques

### Rolling Array Optimization
```javascript
function optimized2DDP(m, n) {
    // Use only two rows instead of full matrix
    let prev = new Array(n + 1).fill(0);
    let curr = new Array(n + 1).fill(0);
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            curr[j] = calculate(prev[j], curr[j-1], prev[j-1]);
        }
        
        // Swap arrays
        [prev, curr] = [curr, prev];
    }
    
    return prev[n];
}
```

### State Machine DP
```javascript
function stateMachineDP(prices) {
    let hold = -prices[0]; // Hold stock
    let sold = 0;          // Sold stock (cooldown)
    let rest = 0;          // Rest state
    
    for (let i = 1; i < prices.length; i++) {
        const prevHold = hold;
        const prevSold = sold;
        const prevRest = rest;
        
        hold = Math.max(prevHold, prevRest - prices[i]);
        sold = prevHold + prices[i];
        rest = Math.max(prevRest, prevSold);
    }
    
    return Math.max(sold, rest);
}
```

## DP Problem Categories

### 1. Linear DP
- Fibonacci
- House Robber
- Climbing Stairs
- Maximum Subarray

### 2. 2D DP
- Longest Common Subsequence
- Edit Distance
- Unique Paths
- Minimum Path Sum

### 3. Interval DP
- Matrix Chain Multiplication
- Palindrome Partitioning
- Burst Balloons

### 4. Tree DP
- Binary Tree Maximum Path Sum
- House Robber III
- Diameter of Binary Tree

### 5. Bitmask DP
- Traveling Salesman Problem
- Maximum Product of Word Lengths

## Practice Problems
1. Climbing Stairs
2. House Robber
3. Longest Increasing Subsequence
4. Longest Common Subsequence
5. Edit Distance
6. Coin Change
7. Unique Paths
8. Maximum Subarray
9. Word Break
10. Fibonacci Number
11. House Robber II
12. Coin Change II
13. Longest Palindromic Subsequence
14. Maximum Product Subarray
15. Decode Ways
