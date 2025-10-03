# Depth-First Search (DFS) Pattern

## Overview
Depth-First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It's implemented using recursion or an explicit stack, making it ideal for exploring all possible paths or finding connected components.

## When to Use DFS
- **Connected Components**: Finding islands, provinces, or connected regions
- **Path Finding**: Exploring all possible paths from start to destination
- **Tree/Graph Traversal**: Visiting all nodes in a specific order
- **Cycle Detection**: Finding cycles in directed/undirected graphs
- **Topological Sorting**: Ordering nodes based on dependencies
- **Maze Solving**: Finding paths through mazes or grids
- **Backtracking Problems**: Exploring all possible solutions

## DFS Characteristics
- **Memory Efficient**: Uses O(h) space where h is the height/depth
- **Path Exploration**: Explores one complete path before trying alternatives
- **Recursive Nature**: Naturally implemented using recursion
- **Backtracking**: Automatically backtracks when reaching dead ends

## Common Problems
- Number of Islands
- Word Search
- Surrounded Regions
- Course Schedule
- Pacific Atlantic Water Flow
- Number of Provinces
- Find All Paths
- Maximum Depth of Binary Tree
- Path Sum
- Clone Graph

## Time Complexity
- **General**: O(V + E) where V is vertices and E is edges
- **Grid Problems**: O(m × n) where m×n is grid size
- **Tree Problems**: O(n) where n is number of nodes

## Space Complexity
- **Recursive**: O(h) where h is maximum depth
- **Iterative with Stack**: O(V) in worst case
- **With Visited Array**: O(V) additional space

## Implementation Patterns

### Basic DFS Template
```javascript
function dfs(graph, start, visited) {
    visited.add(start);
    
    // Process current node
    console.log(start);
    
    // Explore neighbors
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
```

### Grid DFS Template
```javascript
function gridDFS(grid, row, col, visited) {
    // Boundary check
    if (row < 0 || row >= grid.length || 
        col < 0 || col >= grid[0].length) {
        return;
    }
    
    // Check if already visited or invalid cell
    if (visited[row][col] || grid[row][col] === '0') {
        return;
    }
    
    // Mark as visited
    visited[row][col] = true;
    
    // Explore all four directions
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (const [dr, dc] of directions) {
        gridDFS(grid, row + dr, col + dc, visited);
    }
}
```

### Tree DFS Template
```javascript
function treeDFS(root, target) {
    if (!root) return false;
    
    // Process current node
    if (root.val === target) return true;
    
    // Recursively search left and right subtrees
    return treeDFS(root.left, target) || treeDFS(root.right, target);
}
```

## Advanced Patterns

### Iterative DFS with Stack
```javascript
function iterativeDFS(graph, start) {
    const visited = new Set();
    const stack = [start];
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        if (visited.has(node)) continue;
        
        visited.add(node);
        console.log(node);
        
        // Add neighbors to stack (in reverse order for consistent traversal)
        for (let i = graph[node].length - 1; i >= 0; i--) {
            const neighbor = graph[node][i];
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }
}
```

### DFS with Path Tracking
```javascript
function dfsWithPath(graph, start, end, path = [], visited = new Set()) {
    if (start === end) {
        return [...path, start];
    }
    
    visited.add(start);
    path.push(start);
    
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            const result = dfsWithPath(graph, neighbor, end, path, visited);
            if (result) return result;
        }
    }
    
    path.pop();
    visited.delete(start);
    return null;
}
```

### DFS with Return Values
```javascript
function dfsReturnValue(node) {
    if (!node) return 0;
    
    // Process children first
    const leftSum = dfsReturnValue(node.left);
    const rightSum = dfsReturnValue(node.right);
    
    // Process current node with children results
    return node.val + Math.max(leftSum, rightSum);
}
```

## Specialized Applications

### Cycle Detection
```javascript
function hasCycle(graph) {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const colors = new Array(graph.length).fill(WHITE);
    
    function dfs(node) {
        if (colors[node] === GRAY) return true; // Back edge found
        if (colors[node] === BLACK) return false;
        
        colors[node] = GRAY;
        
        for (const neighbor of graph[node]) {
            if (dfs(neighbor)) return true;
        }
        
        colors[node] = BLACK;
        return false;
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === WHITE && dfs(i)) {
            return true;
        }
    }
    
    return false;
}
```

### Topological Sort
```javascript
function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];
    
    function dfs(node) {
        visited.add(node);
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        
        stack.push(node);
    }
    
    for (let i = 0; i < graph.length; i++) {
        if (!visited.has(i)) {
            dfs(i);
        }
    }
    
    return stack.reverse();
}
```

### Strongly Connected Components (Kosaraju's)
```javascript
function kosaraju(graph) {
    const n = graph.length;
    const visited = new Set();
    const order = [];
    const reverseGraph = Array(n).fill().map(() => []);
    
    // Build reverse graph
    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reverseGraph[neighbor].push(i);
        }
    }
    
    // First pass: get finish times
    function dfs1(node) {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs1(neighbor);
            }
        }
        order.push(node);
    }
    
    // Second pass: find SCCs
    function dfs2(node, component) {
        visited.add(node);
        component.push(node);
        for (const neighbor of reverseGraph[node]) {
            if (!visited.has(neighbor)) {
                dfs2(neighbor, component);
            }
        }
    }
    
    // Run first DFS
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs1(i);
        }
    }
    
    // Reset visited and run second DFS
    visited.clear();
    const components = [];
    
    for (let i = order.length - 1; i >= 0; i--) {
        const node = order[i];
        if (!visited.has(node)) {
            const component = [];
            dfs2(node, component);
            components.push(component);
        }
    }
    
    return components;
}
```

## Optimization Techniques

### Memoization in DFS
```javascript
function dfsWithMemo(node, memo = new Map()) {
    if (memo.has(node)) {
        return memo.get(node);
    }
    
    let result = 0;
    // ... DFS logic ...
    
    memo.set(node, result);
    return result;
}
```

### Early Termination
```javascript
function dfsEarlyReturn(graph, start, target) {
    const visited = new Set();
    
    function dfs(node) {
        if (node === target) return true;
        
        visited.add(node);
        
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor) && dfs(neighbor)) {
                return true; // Early termination
            }
        }
        
        return false;
    }
    
    return dfs(start);
}
```

## Practice Problems
1. Number of Islands
2. Word Search
3. Surrounded Regions
4. Course Schedule
5. Pacific Atlantic Water Flow
6. Number of Provinces
7. Find All Paths
8. Maximum Depth of Binary Tree
9. Path Sum
10. Clone Graph
11. Course Schedule II
12. Redundant Connection
13. Accounts Merge
14. Keys and Rooms
15. Network Delay Time
