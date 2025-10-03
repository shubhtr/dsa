# Backtracking Pattern

## Overview
Backtracking is a systematic method for solving problems by exploring all possible solutions through recursive exploration. It builds solutions incrementally and abandons partial solutions ("backtracks") when they cannot lead to a valid complete solution.

## When to Use Backtracking
- **Generate All Solutions**: Finding all possible permutations, combinations, or arrangements
- **Constraint Satisfaction**: Problems with multiple constraints that must be satisfied
- **Decision Problems**: Yes/no problems where you need to find any valid solution
- **Optimization**: Finding the best solution among many possibilities
- **Game Solving**: N-Queens, Sudoku, crossword puzzles
- **Path Finding**: Finding all possible paths in graphs/grids

## Backtracking Characteristics
- **Systematic Exploration**: Tries all possibilities systematically
- **Pruning**: Abandons invalid paths early to save time
- **Recursive**: Uses recursion to explore solution space
- **State Restoration**: Undoes changes when backtracking

## Common Problems
- Generate Parentheses
- N-Queens
- Sudoku Solver
- Combination Sum
- Permutations
- Subsets
- Word Search
- Palindrome Partitioning
- Letter Combinations of a Phone Number
- Restore IP Addresses

## Time Complexity
- **Exponential**: Usually O(b^d) where b is branching factor, d is depth
- **Pruned**: Can be significantly better with good pruning
- **Specific**: Depends on problem constraints and pruning efficiency

## Space Complexity
- **Recursion Stack**: O(d) where d is maximum depth
- **Additional Space**: O(d) for current solution path
- **Total**: Usually O(d) but can be O(n) for some problems

## Backtracking Template

### Basic Template
```javascript
function backtrack(current, ...constraints) {
    // Base case: solution found or invalid
    if (isComplete(current)) {
        result.push([...current]);
        return;
    }
    
    if (isInvalid(current)) {
        return;
    }
    
    // Try all possible choices
    for (const choice of getChoices(current)) {
        // Make choice
        current.push(choice);
        
        // Explore with choice
        backtrack(current, ...constraints);
        
        // Undo choice (backtrack)
        current.pop();
    }
}
```

### With Pruning
```javascript
function backtrack(current, ...constraints) {
    if (isComplete(current)) {
        result.push([...current]);
        return;
    }
    
    // Pruning: avoid exploring invalid paths
    if (!isValid(current)) {
        return;
    }
    
    for (const choice of getChoices(current)) {
        // Early pruning
        if (!canMakeChoice(choice, current)) {
            continue;
        }
        
        current.push(choice);
        backtrack(current, ...constraints);
        current.pop();
    }
}
```

## Implementation Patterns

### Generate Parentheses
```javascript
function generateParenthesis(n) {
    const result = [];
    
    function backtrack(current, openCount, closeCount) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        
        if (openCount < n) {
            backtrack(current + '(', openCount + 1, closeCount);
        }
        
        if (closeCount < openCount) {
            backtrack(current + ')', openCount, closeCount + 1);
        }
    }
    
    backtrack('', 0, 0);
    return result;
}
```

### N-Queens
```javascript
function solveNQueens(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    
    function isValid(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Check diagonals
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
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
```

### Combination Sum
```javascript
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
            backtrack(i, current, remaining - candidates[i]);
            current.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
}
```

## Advanced Patterns

### Word Search with Backtracking
```javascript
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    function backtrack(row, col, index) {
        if (index === word.length) return true;
        
        if (row < 0 || row >= rows || col < 0 || col >= cols || 
            board[row][col] !== word[index]) {
            return false;
        }
        
        // Mark as visited
        const temp = board[row][col];
        board[row][col] = '#';
        
        // Explore all directions
        const found = backtrack(row + 1, col, index + 1) ||
                     backtrack(row - 1, col, index + 1) ||
                     backtrack(row, col + 1, index + 1) ||
                     backtrack(row, col - 1, index + 1);
        
        // Restore
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
```

### Palindrome Partitioning
```javascript
function partition(s) {
    const result = [];
    
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    
    function backtrack(start, current) {
        if (start === s.length) {
            result.push([...current]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            const substring = s.substring(start, end + 1);
            
            if (isPalindrome(substring)) {
                current.push(substring);
                backtrack(end + 1, current);
                current.pop();
            }
        }
    }
    
    backtrack(0, []);
    return result;
}
```

### Letter Combinations
```javascript
function letterCombinations(digits) {
    if (!digits) return [];
    
    const phone = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    
    const result = [];
    
    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        
        const letters = phone[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }
    
    backtrack(0, '');
    return result;
}
```

## Optimization Techniques

### Memoization
```javascript
function backtrackWithMemo(current, memo = new Map()) {
    const key = current.join(',');
    if (memo.has(key)) {
        return memo.get(key);
    }
    
    let result = 0;
    // ... backtracking logic ...
    
    memo.set(key, result);
    return result;
}
```

### Early Termination
```javascript
function backtrackWithEarlyReturn(current) {
    // Early termination if we know this path won't lead to solution
    if (shouldTerminateEarly(current)) {
        return false;
    }
    
    // ... rest of backtracking logic ...
}
```

### Constraint Propagation
```javascript
function backtrackWithConstraints(current, constraints) {
    // Update constraints based on current state
    const newConstraints = updateConstraints(current, constraints);
    
    // Prune invalid choices based on constraints
    const validChoices = getValidChoices(current, newConstraints);
    
    for (const choice of validChoices) {
        current.push(choice);
        backtrackWithConstraints(current, newConstraints);
        current.pop();
    }
}
```

## Common Pitfalls

### Forgetting to Backtrack
```javascript
// WRONG - No backtracking
function wrongBacktrack(current) {
    if (isComplete(current)) {
        result.push([...current]);
        return;
    }
    
    current.push(choice);
    backtrack(current); // Missing pop()!
}
```

### Inefficient State Management
```javascript
// WRONG - Creating new arrays each time
function inefficientBacktrack(current) {
    return backtrack([...current, choice]); // Expensive copying
}

// RIGHT - Reuse and backtrack
function efficientBacktrack(current) {
    current.push(choice);
    const result = backtrack(current);
    current.pop(); // Backtrack
    return result;
}
```

## Practice Problems
1. Generate Parentheses
2. N-Queens
3. Sudoku Solver
4. Combination Sum
5. Permutations
6. Subsets
7. Word Search
8. Palindrome Partitioning
9. Letter Combinations of a Phone Number
10. Restore IP Addresses
11. Combination Sum II
12. Permutations II
13. Subsets II
14. Word Search II
15. Remove Invalid Parentheses
