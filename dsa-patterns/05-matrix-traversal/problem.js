/**
 * Problem: Spiral Matrix
 * 
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * Example 2:
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 10
 * - -100 <= matrix[i][j] <= 100
 */

function spiralOrder(matrix) {
    // TODO: Implement spiral matrix traversal
    // Hint: Use four boundaries (top, bottom, left, right)
    // Traverse right, down, left, up in order
    // Update boundaries after each direction
    
    return []; // Placeholder
}

function spiralOrderDirection(matrix) {
    // TODO: Implement spiral matrix using direction vectors
    // Hint: Use direction array and change direction when hitting boundary
    
    return []; // Placeholder
}

// Test cases
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const matrix3 = [[1,2],[3,4]];
const matrix4 = [[1]];

console.log("Test Case 1:", spiralOrder(matrix1)); // Expected: [1,2,3,6,9,8,7,4,5]
console.log("Test Case 2:", spiralOrder(matrix2)); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log("Test Case 3:", spiralOrder(matrix3)); // Expected: [1,2,4,3]
console.log("Test Case 4:", spiralOrder(matrix4)); // Expected: [1]

console.log("\nDirection-based approach:");
console.log("Test Case 1:", spiralOrderDirection(matrix1)); // Expected: [1,2,3,6,9,8,7,4,5]
console.log("Test Case 2:", spiralOrderDirection(matrix2)); // Expected: [1,2,3,4,8,12,11,10,9,5,6,7]
