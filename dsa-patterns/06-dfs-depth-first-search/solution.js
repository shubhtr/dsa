/**
 * Solution: Number of Islands
 * 
 * Time Complexity: O(m × n) - visit each cell at most once
 * Space Complexity: O(m × n) - for recursion stack in worst case
 */

// Approach 1: DFS with Visited Array
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    let islandCount = 0;
    
    function dfs(row, col) {
        // Check boundaries and if already visited or water
        if (row < 0 || row >= rows || col < 0 || col >= cols || 
            visited[row][col] || grid[row][col] === '0') {
            return;
        }
        
        // Mark current cell as visited
        visited[row][col] = true;
        
        // Explore all four directions
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    }
    
    // Iterate through each cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1' && !visited[row][col]) {
                dfs(row, col);
                islandCount++;
            }
        }
    }
    
    return islandCount;
}

// Approach 2: DFS with In-place Modification (Space Optimized)
function numIslandsInPlace(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
    
    function dfs(row, col) {
        // Check boundaries and if water
        if (row < 0 || row >= rows || col < 0 || col >= cols || 
            grid[row][col] === '0') {
            return;
        }
        
        // Mark current cell as visited by changing to '0'
        grid[row][col] = '0';
        
        // Explore all four directions
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    }
    
    // Iterate through each cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                dfs(row, col);
                islandCount++;
            }
        }
    }
    
    return islandCount;
}

// Approach 3: Union-Find Data Structure
class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill().map((_, i) => i);
        this.rank = Array(size).fill(0);
        this.count = size;
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return;
        
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        this.count--;
    }
}

function numIslandsUnionFind(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    
    // Initialize Union-Find with all land cells
    let landCount = 0;
    const landPositions = [];
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1') {
                landPositions.push([row, col]);
                landCount++;
            }
        }
    }
    
    if (landCount === 0) return 0;
    
    const uf = new UnionFind(landCount);
    const positionToIndex = new Map();
    
    // Map positions to indices
    landPositions.forEach((pos, index) => {
        positionToIndex.set(`${pos[0]},${pos[1]}`, index);
    });
    
    // Union adjacent land cells
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for (let i = 0; i < landPositions.length; i++) {
        const [row, col] = landPositions[i];
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                grid[newRow][newCol] === '1') {
                
                const neighborIndex = positionToIndex.get(`${newRow},${newCol}`);
                uf.union(i, neighborIndex);
            }
        }
    }
    
    return uf.count;
}

// Approach 4: Iterative DFS using Stack
function numIslandsIterative(grid) {
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    let islandCount = 0;
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === '1' && !visited[row][col]) {
                const stack = [[row, col]];
                
                while (stack.length > 0) {
                    const [r, c] = stack.pop();
                    
                    if (r < 0 || r >= rows || c < 0 || c >= cols || 
                        visited[r][c] || grid[r][c] === '0') {
                        continue;
                    }
                    
                    visited[r][c] = true;
                    
                    // Add all four directions to stack
                    for (const [dr, dc] of directions) {
                        stack.push([r + dr, c + dc]);
                    }
                }
                
                islandCount++;
            }
        }
    }
    
    return islandCount;
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

console.log("=== DFS with Visited Array ===");
console.log("Test Case 1:", numIslands(grid1)); // Expected: 1
console.log("Test Case 2:", numIslands(grid2)); // Expected: 3
console.log("Test Case 3:", numIslands(grid3)); // Expected: 5

console.log("\n=== DFS with In-place Modification ===");
const grid1Copy = grid1.map(row => [...row]);
const grid2Copy = grid2.map(row => [...row]);
console.log("Test Case 1:", numIslandsInPlace(grid1Copy)); // Expected: 1
console.log("Test Case 2:", numIslandsInPlace(grid2Copy)); // Expected: 3

console.log("\n=== Union-Find Approach ===");
const grid1Copy2 = grid1.map(row => [...row]);
const grid2Copy2 = grid2.map(row => [...row]);
console.log("Test Case 1:", numIslandsUnionFind(grid1Copy2)); // Expected: 1
console.log("Test Case 2:", numIslandsUnionFind(grid2Copy2)); // Expected: 3

console.log("\n=== Iterative DFS ===");
console.log("Test Case 1:", numIslandsIterative(grid1)); // Expected: 1
console.log("Test Case 2:", numIslandsIterative(grid2)); // Expected: 3

/**
 * Key Insights:
 * 1. DFS is perfect for exploring connected components
 * 2. Mark visited cells to avoid infinite loops
 * 3. Use recursion or stack for DFS implementation
 * 4. Union-Find can be used for dynamic connectivity problems
 * 5. In-place modification saves space but destroys original data
 * 
 * DFS Applications:
 * - Connected components (islands, provinces)
 * - Path finding in graphs
 * - Cycle detection
 * - Topological sorting
 * - Maze solving
 * - Tree/graph traversal
 * 
 * Variations:
 * - 8-directional islands (include diagonals)
 * - Islands with holes (lakes)
 * - Largest island size
 * - Number of closed islands
 */
