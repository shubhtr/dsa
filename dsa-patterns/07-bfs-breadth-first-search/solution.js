/**
 * Solution: Binary Tree Level Order Traversal II
 * 
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(w) - where w is maximum width of tree
 */

// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Approach 1: BFS with Queue + Reverse
function levelOrderBottom(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        // Process all nodes at current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            // Add children to queue for next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result.reverse();
}

// Approach 2: BFS with Unshift (Build from Bottom)
function levelOrderBottomUnshift(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        // Add to beginning of result array
        result.unshift(currentLevel);
    }
    
    return result;
}

// Approach 3: DFS with Level Tracking
function levelOrderBottomDFS(root) {
    const result = [];
    
    function dfs(node, level) {
        if (!node) return;
        
        // Create new level array if needed
        if (result.length === level) {
            result.push([]);
        }
        
        // Add current node to appropriate level
        result[level].push(node.val);
        
        // Recursively process children
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    
    dfs(root, 0);
    return result.reverse();
}

// Additional BFS Patterns

// BFS for Graph (Adjacency List)
function bfsGraph(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];
    
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}

// BFS for Grid (Shortest Path)
function bfsGrid(grid, start, target) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    const queue = [{ ...start, distance: 0 }];
    
    visited[start.row][start.col] = true;
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    while (queue.length > 0) {
        const { row, col, distance } = queue.shift();
        
        if (row === target.row && col === target.col) {
            return distance;
        }
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                !visited[newRow][newCol] && 
                grid[newRow][newCol] !== '#') {
                
                visited[newRow][newCol] = true;
                queue.push({ row: newRow, col: newCol, distance: distance + 1 });
            }
        }
    }
    
    return -1; // Target not reachable
}

// BFS with Path Reconstruction
function bfsWithPath(graph, start, end) {
    const visited = new Set();
    const queue = [start];
    const parent = new Map();
    
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node === end) {
            // Reconstruct path
            const path = [];
            let current = end;
            
            while (current !== undefined) {
                path.unshift(current);
                current = parent.get(current);
            }
            
            return path;
        }
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parent.set(neighbor, node);
                queue.push(neighbor);
            }
        }
    }
    
    return null; // No path found
}

// BFS for Binary Tree with Level Tracking
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [{ node: root, level: 0 }];
    
    while (queue.length > 0) {
        const { node, level } = queue.shift();
        
        // Create new level array if needed
        if (result.length === level) {
            result.push([]);
        }
        
        result[level].push(node.val);
        
        if (node.left) queue.push({ node: node.left, level: level + 1 });
        if (node.right) queue.push({ node: node.right, level: level + 1 });
    }
    
    return result;
}

// BFS for N-ary Tree
class NaryNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

function levelOrderNary(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            // Add all children
            for (const child of node.children) {
                queue.push(child);
            }
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// BFS for Matrix (Islands, Shortest Path)
function bfsMatrix(matrix, start) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    const queue = [start];
    
    visited[start[0]][start[1]] = true;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        
        // Process current cell
        console.log(`Processing: [${row}, ${col}]`);
        
        // Explore neighbors
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                !visited[newRow][newCol] && 
                matrix[newRow][newCol] === 1) {
                
                visited[newRow][newCol] = true;
                queue.push([newRow, newCol]);
            }
        }
    }
}

// Helper function to create test trees
function createTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }
    
    const root = new TreeNode(arr[index]);
    root.left = createTree(arr, 2 * index + 1);
    root.right = createTree(arr, 2 * index + 2);
    
    return root;
}

// Test cases
const tree1 = createTree([3, 9, 20, null, null, 15, 7]);
const tree2 = createTree([1]);
const tree3 = createTree([]);

console.log("=== BFS with Reverse ===");
console.log("Test Case 1:", levelOrderBottom(tree1)); // Expected: [[15,7],[9,20],[3]]
console.log("Test Case 2:", levelOrderBottom(tree2)); // Expected: [[1]]
console.log("Test Case 3:", levelOrderBottom(tree3)); // Expected: []

console.log("\n=== BFS with Unshift ===");
console.log("Test Case 1:", levelOrderBottomUnshift(tree1)); // Expected: [[15,7],[9,20],[3]]
console.log("Test Case 2:", levelOrderBottomUnshift(tree2)); // Expected: [[1]]

console.log("\n=== DFS with Level Tracking ===");
console.log("Test Case 1:", levelOrderBottomDFS(tree1)); // Expected: [[15,7],[9,20],[3]]
console.log("Test Case 2:", levelOrderBottomDFS(tree2)); // Expected: [[1]]

console.log("\n=== Regular Level Order ===");
console.log("Test Case 1:", levelOrder(tree1)); // Expected: [[3],[9,20],[15,7]]

console.log("\n=== Graph BFS Example ===");
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1],
    5: [2]
};
console.log("Graph BFS from node 0:", bfsGraph(graph, 0)); // Expected: [0, 1, 2, 3, 4, 5]

/**
 * Key Insights:
 * 1. BFS uses queue (FIFO) to process nodes level by level
 * 2. Perfect for shortest path problems in unweighted graphs
 * 3. Guarantees finding minimum distance/shortest path
 * 4. Use visited set/array to avoid revisiting nodes
 * 5. Level tracking helps separate different levels
 * 
 * BFS Applications:
 * - Shortest path in unweighted graphs
 * - Level order traversal in trees
 * - Finding connected components
 * - Word ladder problems
 * - Rotting oranges
 * - Binary tree right side view
 * 
 * BFS vs DFS:
 * - BFS: Guarantees shortest path, uses more memory
 * - DFS: May not find shortest path, uses less memory
 * - BFS: Level by level processing
 * - DFS: Deep exploration first
 */
