/**
 * Solution: Climbing Stairs
 * 
 * Time Complexity: O(n) - each step calculated once
 * Space Complexity: O(n) for DP array, O(1) for space-optimized
 */

// Approach 1: Bottom-up Dynamic Programming
function climbStairs(n) {
    if (n <= 2) return n;
    
    const dp = new Array(n + 1);
    dp[1] = 1; // Ways to reach step 1
    dp[2] = 2; // Ways to reach step 2
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Approach 2: Top-down with Memoization
function climbStairsRecursive(n) {
    const memo = new Map();
    
    function helper(step) {
        if (step <= 2) return step;
        
        if (memo.has(step)) {
            return memo.get(step);
        }
        
        const result = helper(step - 1) + helper(step - 2);
        memo.set(step, result);
        return result;
    }
    
    return helper(n);
}

// Approach 3: Space-Optimized DP
function climbStairsSpaceOptimized(n) {
    if (n <= 2) return n;
    
    let prev2 = 1; // Ways to reach step (i-2)
    let prev1 = 2; // Ways to reach step (i-1)
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// Additional Dynamic Programming Patterns

// Fibonacci Sequence
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

// House Robber
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[nums.length - 1];
}

// House Robber (Space Optimized)
function robSpaceOptimized(nums) {
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

// Longest Increasing Subsequence
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// Longest Common Subsequence
function longestCommonSubsequence(text1, text2) {
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

// Edit Distance (Levenshtein Distance)
function minDistance(word1, word2) {
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

// Coin Change
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

// Unique Paths
function uniquePaths(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
}

// Unique Paths (Space Optimized)
function uniquePathsSpaceOptimized(m, n) {
    const dp = new Array(n).fill(1);
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    
    return dp[n - 1];
}

// Maximum Subarray Sum (Kadane's Algorithm)
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Word Break
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
}

// Test cases
console.log("=== Climbing Stairs ===");
console.log("Test Case 1:", climbStairs(2)); // Expected: 2
console.log("Test Case 2:", climbStairs(3)); // Expected: 3
console.log("Test Case 3:", climbStairs(4)); // Expected: 5
console.log("Test Case 4:", climbStairs(5)); // Expected: 8

console.log("\n=== Recursive with Memoization ===");
console.log("Test Case 1:", climbStairsRecursive(2)); // Expected: 2
console.log("Test Case 2:", climbStairsRecursive(3)); // Expected: 3

console.log("\n=== Space-Optimized ===");
console.log("Test Case 1:", climbStairsSpaceOptimized(2)); // Expected: 2
console.log("Test Case 2:", climbStairsSpaceOptimized(3)); // Expected: 3

console.log("\n=== Fibonacci ===");
console.log("Fibonacci(10):", fibonacci(10)); // Expected: 55

console.log("\n=== House Robber ===");
console.log("Rob [2,7,9,3,1]:", rob([2, 7, 9, 3, 1])); // Expected: 12

console.log("\n=== Longest Increasing Subsequence ===");
console.log("LIS [10,9,2,5,3,7,101,18]:", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Expected: 4

console.log("\n=== Longest Common Subsequence ===");
console.log("LCS 'abcde' 'ace':", longestCommonSubsequence("abcde", "ace")); // Expected: 3

console.log("\n=== Edit Distance ===");
console.log("Edit distance 'horse' 'ros':", minDistance("horse", "ros")); // Expected: 3

console.log("\n=== Coin Change ===");
console.log("Coin change [1,3,4] amount 6:", coinChange([1, 3, 4], 6)); // Expected: 2

console.log("\n=== Unique Paths ===");
console.log("Unique paths 3x7:", uniquePaths(3, 7)); // Expected: 28

console.log("\n=== Maximum Subarray ===");
console.log("Max subarray [-2,1,-3,4,-1,2,1,-5,4]:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6

/**
 * Key Insights:
 * 1. DP breaks complex problems into simpler overlapping subproblems
 * 2. Store solutions to subproblems to avoid recomputation
 * 3. Build solution from bottom-up or top-down with memoization
 * 4. Identify optimal substructure and overlapping subproblems
 * 5. State transition equation defines relationship between states
 * 
 * DP Patterns:
 * - 1D DP: Linear problems (Fibonacci, House Robber)
 * - 2D DP: Matrix/grid problems (LCS, Edit Distance)
 * - Optimization: Find maximum/minimum value
 * - Counting: Count number of ways/solutions
 * - Decision: Make optimal decisions at each step
 * 
 * Common DP Categories:
 * - Fibonacci-like sequences
 * - Knapsack problems
 * - Longest common subsequence
 * - Edit distance
 * - Path counting
 * - Coin change
 * - Matrix chain multiplication
 */
