/**
 * Solution: Spiral Matrix
 * 
 * Time Complexity: O(m × n) - visit each cell once
 * Space Complexity: O(1) - only using variables for boundaries
 */

// Approach 1: Boundary-based Traversal
function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse right
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;
        
        // Traverse down
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;
        
        // Traverse left (if we still have rows)
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        
        // Traverse up (if we still have columns)
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }
    
    return result;
}

// Approach 2: Direction-based Traversal
function spiralOrderDirection(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    
    // Directions: right, down, left, up
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0;
    
    let row = 0, col = 0;
    
    for (let i = 0; i < rows * cols; i++) {
        result.push(matrix[row][col]);
        visited[row][col] = true;
        
        // Calculate next position
        const nextRow = row + directions[directionIndex][0];
        const nextCol = col + directions[directionIndex][1];
        
        // Check if we need to change direction
        if (nextRow < 0 || nextRow >= rows || 
            nextCol < 0 || nextCol >= cols || 
            visited[nextRow][nextCol]) {
            directionIndex = (directionIndex + 1) % 4;
        }
        
        // Update position
        row += directions[directionIndex][0];
        col += directions[directionIndex][1];
    }
    
    return result;
}

// Additional Matrix Traversal Patterns

// Clockwise Spiral (different starting point)
function spiralOrderClockwise(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    
    while (top <= bottom && left <= right) {
        // Right
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;
        
        // Down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        
        if (top <= bottom) {
            // Left
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }
        
        if (left <= right) {
            // Up
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return result;
}

// Counter-clockwise Spiral
function spiralOrderCounterClockwise(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    
    while (top <= bottom && left <= right) {
        // Down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][left]);
        }
        left++;
        
        // Right
        for (let j = left; j <= right; j++) {
            result.push(matrix[bottom][j]);
        }
        bottom--;
        
        if (left <= right) {
            // Up
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][right]);
            }
            right--;
        }
        
        if (top <= bottom) {
            // Left
            for (let j = right; j >= left; j--) {
                result.push(matrix[top][j]);
            }
            top++;
        }
    }
    
    return result;
}

// Diagonal Traversal
function diagonalOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];
    
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Traverse diagonals from top-left to bottom-right
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

// Zigzag Traversal
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

// Test cases
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const matrix3 = [[1,2],[3,4]];
const matrix4 = [[1]];

console.log("=== Boundary-based Approach ===");
console.log("Test Case 1:", spiralOrder(matrix1)); // Expected: [1,2,3,6,9,8,7,4,5]
console.log("Test Case 2:", spiralOrder(matrix2)); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log("Test Case 3:", spiralOrder(matrix3)); // Expected: [1,2,4,3]
console.log("Test Case 4:", spiralOrder(matrix4)); // Expected: [1]

console.log("\n=== Direction-based Approach ===");
console.log("Test Case 1:", spiralOrderDirection(matrix1)); // Expected: [1,2,3,6,9,8,7,4,5]
console.log("Test Case 2:", spiralOrderDirection(matrix2)); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]

console.log("\n=== Other Traversal Patterns ===");
console.log("Counter-clockwise:", spiralOrderCounterClockwise(matrix1)); // [1,4,7,8,9,6,3,2,5]
console.log("Diagonal:", diagonalOrder(matrix1)); // [1,2,4,3,5,7,6,8,9]
console.log("Zigzag:", zigzagOrder(matrix2)); // [1,2,3,4,8,7,6,5,9,10,11,12]

/**
 * Key Insights:
 * 1. Use four boundaries to track traversal limits
 * 2. Traverse in order: right → down → left → up
 * 3. Update boundaries after each direction
 * 4. Check if boundaries are still valid before each direction
 * 5. Direction-based approach uses visited array and direction vectors
 * 
 * Matrix Traversal Patterns:
 * - Spiral (clockwise/counter-clockwise)
 * - Diagonal (top-left to bottom-right)
 * - Zigzag (row-wise alternating direction)
 * - Layer-by-layer (concentric rectangles)
 * 
 * Applications:
 * - Print matrix in spiral order
 * - Rotate matrix by 90 degrees
 * - Set matrix zeros
 * - Search in 2D matrix
 * - Number of islands
 */
