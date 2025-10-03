/**
 * Problem: Climbing Stairs
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways
 * can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * Constraints:
 * - 1 <= n <= 45
 */

function climbStairs(n) {
    // TODO: Implement using dynamic programming
    // Hint: This is a Fibonacci sequence problem
    // Ways to reach step n = ways to reach step (n-1) + ways to reach step (n-2)
    // Base cases: ways to reach step 1 = 1, ways to reach step 2 = 2
    
    return 0; // Placeholder
}

function climbStairsRecursive(n) {
    // TODO: Implement using recursion with memoization
    // Hint: Use memoization to avoid recalculating same subproblems
    
    return 0; // Placeholder
}

function climbStairsSpaceOptimized(n) {
    // TODO: Implement using only two variables (space-optimized)
    // Hint: Since we only need previous two values, we can use just two variables
    
    return 0; // Placeholder
}

// Test cases
console.log("Test Case 1:", climbStairs(2)); // Expected: 2
console.log("Test Case 2:", climbStairs(3)); // Expected: 3
console.log("Test Case 3:", climbStairs(4)); // Expected: 5
console.log("Test Case 4:", climbStairs(5)); // Expected: 8

console.log("\nRecursive with memoization:");
console.log("Test Case 1:", climbStairsRecursive(2)); // Expected: 2
console.log("Test Case 2:", climbStairsRecursive(3)); // Expected: 3

console.log("\nSpace-optimized:");
console.log("Test Case 1:", climbStairsSpaceOptimized(2)); // Expected: 2
console.log("Test Case 2:", climbStairsSpaceOptimized(3)); // Expected: 3
