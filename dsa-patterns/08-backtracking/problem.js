/**
 * Problem: Generate Parentheses
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 * 
 * Constraints:
 * - 1 <= n <= 8
 */

function generateParenthesis(n) {
    // TODO: Implement backtracking to generate all valid parentheses combinations
    // Hint: Use recursion with constraints:
    // - Can add '(' if openCount < n
    // - Can add ')' if closeCount < openCount
    // - Base case: when string length equals 2*n
    
    return []; // Placeholder
}

function generateParenthesisIterative(n) {
    // TODO: Implement using iterative approach with stack
    // Hint: Use stack to simulate recursion
    // Each stack element contains: current string, open count, close count
    
    return []; // Placeholder
}

// Test cases
console.log("Test Case 1:", generateParenthesis(1)); // Expected: ["()"]
console.log("Test Case 2:", generateParenthesis(2)); // Expected: ["(())","()()"]
console.log("Test Case 3:", generateParenthesis(3)); 
// Expected: ["((()))","(()())","(())()","()(())","()()()"]

console.log("\nIterative approach:");
console.log("Test Case 1:", generateParenthesisIterative(1)); // Expected: ["()"]
console.log("Test Case 2:", generateParenthesisIterative(2)); // Expected: ["(())","()()"]
