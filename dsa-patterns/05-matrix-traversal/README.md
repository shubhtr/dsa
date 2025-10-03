# Matrix Traversal Pattern

## Overview
Matrix traversal refers to systematically visiting each element in a 2D matrix following specific patterns or rules. This pattern is essential for solving problems involving 2D arrays, grids, and matrices.

## Common Traversal Patterns

### 1. Spiral Traversal
- **Clockwise**: Right → Down → Left → Up
- **Counter-clockwise**: Down → Right → Up → Left
- **Boundary-based**: Use four boundaries (top, bottom, left, right)
- **Direction-based**: Use direction vectors and visited array

### 2. Diagonal Traversal
- **Main diagonal**: Top-left to bottom-right
- **Anti-diagonal**: Top-right to bottom-left
- **All diagonals**: Process each diagonal separately

### 3. Layer-by-Layer Traversal
- **Concentric rectangles**: Process outer layer first, then inner layers
- **Boundary shrinking**: Reduce boundaries after each layer

### 4. Row-wise and Column-wise
- **Row-wise**: Left to right, top to bottom
- **Column-wise**: Top to bottom, left to right
- **Zigzag**: Alternate direction for each row

## When to Use
- Printing matrix in specific order
- Matrix rotation problems
- Searching in 2D matrix
- Grid-based pathfinding
- Image processing algorithms
- Game board problems

## Common Problems
- Spiral Matrix
- Spiral Matrix II
- Rotate Image
- Set Matrix Zeroes
- Search a 2D Matrix
- Number of Islands
- Word Search
- Surrounded Regions
- Pacific Atlantic Water Flow

## Time Complexity
- **Most traversals**: O(m × n) where m×n is matrix size
- **Each element visited once**: O(m × n)
- **With optimization**: Can be O(m + n) for some problems

## Space Complexity
- **In-place**: O(1) additional space
- **With visited array**: O(m × n)
- **Recursive**: O(m × n) for call stack

## Implementation Patterns

### Spiral Traversal (Boundary-based)
```javascript
function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Right
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;
        
        // Down
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;
        
        if (top <= bottom) {
            // Left
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        
        if (left <= right) {
            // Up
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }
    
    return result;
}
```

### Direction-based Traversal
```javascript
function spiralOrderDirection(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0;
    let row = 0, col = 0;
    
    for (let i = 0; i < rows * cols; i++) {
        result.push(matrix[row][col]);
        visited[row][col] = true;
        
        const nextRow = row + directions[directionIndex][0];
        const nextCol = col + directions[directionIndex][1];
        
        if (nextRow < 0 || nextRow >= rows || 
            nextCol < 0 || nextCol >= cols || 
            visited[nextRow][nextCol]) {
            directionIndex = (directionIndex + 1) % 4;
        }
        
        row += directions[directionIndex][0];
        col += directions[directionIndex][1];
    }
    
    return result;
}
```

### Diagonal Traversal
```javascript
function diagonalOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let d = 0; d < rows + cols - 1; d++) {
        let row = Math.min(d, rows - 1);
        let col = d - row;
        
        while (row >= 0 && col < cols) {
            result.push(matrix[row][col]);
            row--;
            col++;
        }
    }
    
    return result;
}
```

## Advanced Patterns

### Layer-by-Layer Processing
```javascript
function layerByLayer(matrix) {
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let layer = 0; layer < Math.min(rows, cols) / 2; layer++) {
        // Process current layer
        const top = layer;
        const bottom = rows - 1 - layer;
        const left = layer;
        const right = cols - 1 - layer;
        
        // Add elements from current layer
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        for (let row = top + 1; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        if (top < bottom) {
            for (let col = right - 1; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
        }
        if (left < right) {
            for (let row = bottom - 1; row > top; row--) {
                result.push(matrix[row][left]);
            }
        }
    }
    
    return result;
}
```

### Zigzag Traversal
```javascript
function zigzagOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let row = 0; row < rows; row++) {
        if (row % 2 === 0) {
            // Left to right
            for (let col = 0; col < cols; col++) {
                result.push(matrix[row][col]);
            }
        } else {
            // Right to left
            for (let col = cols - 1; col >= 0; col--) {
                result.push(matrix[row][col]);
            }
        }
    }
    
    return result;
}
```

## Specialized Applications

### Matrix Rotation
```javascript
function rotateMatrix(matrix) {
    const n = matrix.length;
    
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}
```

### Set Matrix Zeroes (In-place)
```javascript
function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;
    
    // Check if first row has zero
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    
    // Check if first column has zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    
    // Use first row and column as markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set zeros based on markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Handle first row and column
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
    
    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}
```

## Practice Problems
1. Spiral Matrix
2. Spiral Matrix II
3. Rotate Image
4. Set Matrix Zeroes
5. Search a 2D Matrix
6. Number of Islands
7. Word Search
8. Surrounded Regions
9. Pacific Atlantic Water Flow
10. Matrix Diagonal Sum
11. The Maze
12. Number of Closed Islands
