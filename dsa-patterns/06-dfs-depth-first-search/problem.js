/**
 * Problem: Number of Islands
 * 
 * Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are all
 * surrounded by water.
 * 
 * Example 1:
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Example 2:
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 * 
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 300
 * - grid[i][j] is '0' or '1'
 */

function numIslands(grid) {
    // TODO: Implement DFS to count islands
    // Hint: For each '1' found, mark entire island as visited using DFS
    // Use visited array or modify grid in-place to mark visited cells
    
    return 0; // Placeholder
}

function numIslandsUnionFind(grid) {
    // TODO: Implement using Union-Find data structure
    // Hint: Treat each '1' as a separate component initially
    // Union adjacent '1's to form islands
    
    return 0; // Placeholder
}

// Test cases
const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

const grid3 = [
    ["1","0","1"],
    ["0","1","0"],
    ["1","0","1"]
];

console.log("Test Case 1 (DFS):", numIslands(grid1)); // Expected: 1
console.log("Test Case 2 (DFS):", numIslands(grid2)); // Expected: 3
console.log("Test Case 3 (DFS):", numIslands(grid3)); // Expected: 5

console.log("\nTest Case 1 (Union-Find):", numIslandsUnionFind(grid1)); // Expected: 1
console.log("Test Case 2 (Union-Find):", numIslandsUnionFind(grid2)); // Expected: 3
