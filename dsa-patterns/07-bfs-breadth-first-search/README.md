# Breadth-First Search (BFS) Pattern

## Overview
Breadth-First Search is a graph traversal algorithm that explores all nodes at the current depth level before moving to nodes at the next depth level. It uses a queue (FIFO) data structure and guarantees finding the shortest path in unweighted graphs.

## When to Use BFS
- **Shortest Path**: Finding minimum distance in unweighted graphs
- **Level Processing**: Processing nodes level by level
- **Connected Components**: Finding all reachable nodes from a source
- **Tree Traversal**: Level order traversal in trees
- **Minimum Steps**: Problems requiring minimum number of steps
- **Word Ladder**: Finding shortest transformation sequence
- **Grid Problems**: Finding shortest path in 2D grids

## BFS Characteristics
- **Queue-based**: Uses FIFO queue for node processing
- **Level-by-level**: Processes all nodes at current level before next level
- **Shortest Path**: Guarantees shortest path in unweighted graphs
- **Memory Intensive**: Uses O(w) space where w is maximum width

## Common Problems
- Binary Tree Level Order Traversal
- Binary Tree Level Order Traversal II
- Binary Tree Right Side View
- Word Ladder
- Rotting Oranges
- Number of Islands (BFS approach)
- Shortest Path in Binary Matrix
- Open the Lock
- Perfect Squares
- Minimum Genetic Mutation

## Time Complexity
- **General**: O(V + E) where V is vertices and E is edges
- **Grid Problems**: O(m × n) where m×n is grid size
- **Tree Problems**: O(n) where n is number of nodes

## Space Complexity
- **Queue**: O(w) where w is maximum width/diameter
- **Visited Array**: O(V) for graph problems
- **Overall**: O(V) in worst case

## Implementation Patterns

### Basic BFS Template
```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    
    visited.add(start);
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        // Process current node
        console.log(node);
        
        // Add unvisited neighbors to queue
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

### Tree Level Order Traversal
```javascript
function levelOrder(root) {
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
            
            // Add children for next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}
```

### Grid BFS with Distance
```javascript
function gridBFS(grid, start, target) {
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
```

## Advanced Patterns

### BFS with Path Reconstruction
```javascript
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
```

### Multi-source BFS
```javascript
function multiSourceBFS(grid, sources) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    
    // Add all sources to queue
    for (const source of sources) {
        queue.push({ ...source, time: 0 });
        visited[source.row][source.col] = true;
    }
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let maxTime = 0;
    
    while (queue.length > 0) {
        const { row, col, time } = queue.shift();
        maxTime = Math.max(maxTime, time);
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                !visited[newRow][newCol] && 
                grid[newRow][newCol] === 1) {
                
                visited[newRow][newCol] = true;
                queue.push({ row: newRow, col: newCol, time: time + 1 });
            }
        }
    }
    
    return maxTime;
}
```

### Bidirectional BFS
```javascript
function bidirectionalBFS(graph, start, end) {
    if (start === end) return [start];
    
    let forwardSet = new Set([start]);
    let backwardSet = new Set([end]);
    const visited = new Set();
    
    while (forwardSet.size > 0 && backwardSet.size > 0) {
        // Expand smaller set
        if (forwardSet.size > backwardSet.size) {
            [forwardSet, backwardSet] = [backwardSet, forwardSet];
        }
        
        const nextSet = new Set();
        
        for (const node of forwardSet) {
            visited.add(node);
            
            for (const neighbor of graph[node]) {
                if (backwardSet.has(neighbor)) {
                    // Found intersection
                    return reconstructPath(node, neighbor);
                }
                
                if (!visited.has(neighbor)) {
                    nextSet.add(neighbor);
                }
            }
        }
        
        forwardSet = nextSet;
    }
    
    return null; // No path found
}
```

## Specialized Applications

### Word Ladder BFS
```javascript
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [beginWord];
    let level = 1;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const word = queue.shift();
            
            if (word === endWord) return level;
            
            // Try all possible one-character changes
            for (let j = 0; j < word.length; j++) {
                for (let c = 'a'; c <= 'z'; c++) {
                    const newWord = word.substring(0, j) + c + word.substring(j + 1);
                    
                    if (wordSet.has(newWord)) {
                        queue.push(newWord);
                        wordSet.delete(newWord); // Avoid revisiting
                    }
                }
            }
        }
        
        level++;
    }
    
    return 0;
}
```

### Binary Tree Right Side View
```javascript
function rightSideView(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            // Last node in level (rightmost)
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
}
```

### Rotting Oranges
```javascript
function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;
    
    // Find all rotten oranges and count fresh ones
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]); // [row, col, time]
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let maxTime = 0;
    
    while (queue.length > 0) {
        const [row, col, time] = queue.shift();
        maxTime = Math.max(maxTime, time);
        
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            
            if (newRow >= 0 && newRow < rows && 
                newCol >= 0 && newCol < cols && 
                grid[newRow][newCol] === 1) {
                
                grid[newRow][newCol] = 2;
                freshCount--;
                queue.push([newRow, newCol, time + 1]);
            }
        }
    }
    
    return freshCount === 0 ? maxTime : -1;
}
```

## BFS vs DFS Comparison

| Aspect | BFS | DFS |
|--------|-----|-----|
| **Data Structure** | Queue (FIFO) | Stack (LIFO) |
| **Memory Usage** | O(w) - width | O(h) - height |
| **Shortest Path** | Guaranteed | Not guaranteed |
| **Use Case** | Level processing | Deep exploration |
| **Implementation** | Iterative | Recursive/Iterative |

## Practice Problems
1. Binary Tree Level Order Traversal
2. Binary Tree Level Order Traversal II
3. Binary Tree Right Side View
4. Word Ladder
5. Rotting Oranges
6. Shortest Path in Binary Matrix
7. Open the Lock
8. Perfect Squares
9. Minimum Genetic Mutation
10. Number of Islands (BFS approach)
11. Binary Tree Zigzag Level Order Traversal
12. Average of Levels in Binary Tree
13. Minimum Depth of Binary Tree
14. Find Bottom Left Tree Value
15. All Nodes Distance K in Binary Tree
