/**
 * Solution: Generate Parentheses
 * 
 * Time Complexity: O(4^n / sqrt(n)) - Catalan number
 * Space Complexity: O(4^n / sqrt(n)) - for storing results
 */

// Approach 1: Recursive Backtracking
function generateParenthesis(n) {
    const result = [];
    
    function backtrack(current, openCount, closeCount) {
        // Base case: valid combination found
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        
        // Add opening parenthesis if we haven't used all n
        if (openCount < n) {
            backtrack(current + '(', openCount + 1, closeCount);
        }
        
        // Add closing parenthesis if it won't make the string invalid
        if (closeCount < openCount) {
            backtrack(current + ')', openCount, closeCount + 1);
        }
    }
    
    backtrack('', 0, 0);
    return result;
}

// Approach 2: Backtracking with Array (More Memory Efficient)
function generateParenthesisArray(n) {
    const result = [];
    
    function backtrack(current, openCount, closeCount) {
        if (current.length === 2 * n) {
            result.push(current.join(''));
            return;
        }
        
        if (openCount < n) {
            current.push('(');
            backtrack(current, openCount + 1, closeCount);
            current.pop(); // Backtrack
        }
        
        if (closeCount < openCount) {
            current.push(')');
            backtrack(current, openCount, closeCount + 1);
            current.pop(); // Backtrack
        }
    }
    
    backtrack([], 0, 0);
    return result;
}

// Approach 3: Iterative with Stack
function generateParenthesisIterative(n) {
    const result = [];
    const stack = [['', 0, 0]]; // [current string, open count, close count]
    
    while (stack.length > 0) {
        const [current, openCount, closeCount] = stack.pop();
        
        if (current.length === 2 * n) {
            result.push(current);
            continue;
        }
        
        // Add closing parenthesis first (LIFO)
        if (closeCount < openCount) {
            stack.push([current + ')', openCount, closeCount + 1]);
        }
        
        // Add opening parenthesis
        if (openCount < n) {
            stack.push([current + '(', openCount + 1, closeCount]);
        }
    }
    
    return result;
}

// Additional Backtracking Patterns

// N-Queens Problem
function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isValid(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Check diagonal (top-left to bottom-right)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // Check diagonal (top-right to bottom-left)
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.'; // Backtrack
            }
        }
    }
    
    backtrack(0);
    return result;
}

// Combination Sum
function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        
        if (remaining < 0) return;
        
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, remaining - candidates[i]); // Allow reuse
            current.pop(); // Backtrack
        }
    }
    
    backtrack(0, [], target);
    return result;
}

// Permutations
function permute(nums) {
    const result = [];
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (const num of nums) {
            if (!current.includes(num)) {
                current.push(num);
                backtrack(current);
                current.pop(); // Backtrack
            }
        }
    }
    
    backtrack([]);
    return result;
}

// Subsets
function subsets(nums) {
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop(); // Backtrack
        }
    }
    
    backtrack(0, []);
    return result;
}

// Word Search
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    function backtrack(row, col, index) {
        if (index === word.length) return true;
        
        if (row < 0 || row >= rows || col < 0 || col >= cols || 
            board[row][col] !== word[index]) {
            return false;
        }
        
        // Mark cell as visited
        const temp = board[row][col];
        board[row][col] = '#';
        
        // Explore all four directions
        const found = backtrack(row + 1, col, index + 1) ||
                     backtrack(row - 1, col, index + 1) ||
                     backtrack(row, col + 1, index + 1) ||
                     backtrack(row, col - 1, index + 1);
        
        // Restore cell
        board[row][col] = temp;
        
        return found;
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (backtrack(row, col, 0)) {
                return true;
            }
        }
    }
    
    return false;
}

// Sudoku Solver
function solveSudoku(board) {
    function isValid(row, col, num) {
        // Check row
        for (let j = 0; j < 9; j++) {
            if (board[row][j] === num) return false;
        }
        
        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        
        // Check 3x3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        
        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }
        
        return true;
    }
    
    function backtrack() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = '1'; num <= '9'; num++) {
                        if (isValid(row, col, num)) {
                            board[row][col] = num;
                            
                            if (backtrack()) {
                                return true;
                            }
                            
                            board[row][col] = '.'; // Backtrack
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    return backtrack();
}

// Test cases
console.log("=== Generate Parentheses ===");
console.log("Test Case 1:", generateParenthesis(1)); // Expected: ["()"]
console.log("Test Case 2:", generateParenthesis(2)); // Expected: ["(())","()()"]
console.log("Test Case 3:", generateParenthesis(3)); 
// Expected: ["((()))","(()())","(())()","()(())","()()()"]

console.log("\n=== Array-based Approach ===");
console.log("Test Case 1:", generateParenthesisArray(1)); // Expected: ["()"]
console.log("Test Case 2:", generateParenthesisArray(2)); // Expected: ["(())","()()"]

console.log("\n=== Iterative Approach ===");
console.log("Test Case 1:", generateParenthesisIterative(1)); // Expected: ["()"]
console.log("Test Case 2:", generateParenthesisIterative(2)); // Expected: ["(())","()()"]

console.log("\n=== N-Queens (4x4) ===");
console.log("Solutions:", solveNQueens(4).length); // Expected: 2 solutions

console.log("\n=== Combination Sum ===");
console.log("Combinations:", combinationSum([2, 3, 6, 7], 7)); 
// Expected: [[2,2,3],[7]]

console.log("\n=== Permutations ===");
console.log("Permutations of [1,2,3]:", permute([1, 2, 3]).length); // Expected: 6

console.log("\n=== Subsets ===");
console.log("Subsets of [1,2,3]:", subsets([1, 2, 3]).length); // Expected: 8

/**
 * Key Insights:
 * 1. Backtracking is systematic exploration of all possible solutions
 * 2. Use recursion with base case and recursive case
 * 3. Make a choice, explore, then undo the choice (backtrack)
 * 4. Pruning: avoid exploring invalid paths early
 * 5. Template: build solution incrementally, backtrack when needed
 * 
 * Backtracking Template:
 * 1. Base case: solution found or invalid path
 * 2. Make a choice
 * 3. Recursively explore with the choice
 * 4. Undo the choice (backtrack)
 * 5. Try next choice
 * 
 * Common Applications:
 * - Generate all permutations/combinations
 * - Solve constraint satisfaction problems
 * - Find all paths in graphs
 * - Game solving (N-Queens, Sudoku)
 * - String/grid pattern matching
 */
