# Tree Traversal Pattern

## Overview
Tree traversal refers to the process of visiting each node in a tree data structure exactly once. There are several ways to traverse a tree, each with specific use cases and characteristics. The choice of traversal method depends on the problem requirements.

## Types of Tree Traversals

### 1. Depth-First Search (DFS)
- **Pre-order**: Root → Left → Right
- **In-order**: Left → Root → Right  
- **Post-order**: Left → Right → Root

### 2. Breadth-First Search (BFS)
- **Level-order**: Process nodes level by level from left to right

## When to Use Each Traversal

### Pre-order Traversal
- Copy/Clone a tree
- Serialize tree structure
- Create prefix expressions
- Print directory structure

### In-order Traversal
- Get sorted order (for Binary Search Trees)
- Validate BST
- Find kth smallest element in BST
- Convert BST to sorted array

### Post-order Traversal
- Delete entire tree
- Calculate height/depth
- Evaluate postfix expressions
- Get directory sizes

### Level-order Traversal
- Print tree level by level
- Find minimum depth
- Connect level order siblings
- Zigzag level order traversal

## Common Problems
- Binary Tree Level Order Traversal
- Binary Tree Zigzag Level Order Traversal
- Binary Tree Right Side View
- Binary Tree Left Side View
- Average of Levels in Binary Tree
- Minimum Depth of Binary Tree
- Maximum Depth of Binary Tree
- Path Sum
- Path Sum II

## Time Complexity
- **All traversals**: O(n) where n is number of nodes
- Each node is visited exactly once

## Space Complexity
- **DFS (Recursive)**: O(h) where h is height of tree
- **DFS (Iterative)**: O(h) for stack
- **BFS (Level-order)**: O(w) where w is maximum width

## Implementation Patterns

### Pre-order Traversal
```javascript
function preorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        result.push(node.val);  // Process root first
        dfs(node.left);         // Then left
        dfs(node.right);        // Then right
    }
    
    dfs(root);
    return result;
}
```

### In-order Traversal
```javascript
function inorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        dfs(node.left);         // Process left first
        result.push(node.val);  // Then root
        dfs(node.right);        // Then right
    }
    
    dfs(root);
    return result;
}
```

### Post-order Traversal
```javascript
function postorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        dfs(node.left);         // Process left first
        dfs(node.right);        // Then right
        result.push(node.val);  // Then root
    }
    
    dfs(root);
    return result;
}
```

### Level-order Traversal (BFS)
```javascript
function levelOrder(root) {
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
        
        result.push(currentLevel);
    }
    
    return result;
}
```

## Advanced Patterns

### Iterative Traversals
```javascript
// Iterative Pre-order
function preorderIterative(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return result;
}

// Iterative In-order
function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    
    return result;
}
```

### Morris Traversal (O(1) Space)
```javascript
function inorderMorris(root) {
    const result = [];
    let current = root;
    
    while (current) {
        if (!current.left) {
            result.push(current.val);
            current = current.right;
        } else {
            let predecessor = current.left;
            while (predecessor.right && predecessor.right !== current) {
                predecessor = predecessor.right;
            }
            
            if (!predecessor.right) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }
    
    return result;
}
```

## Specialized Traversals

### N-ary Tree Level Order
```javascript
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
```

### Vertical Order Traversal
```javascript
function verticalTraversal(root) {
    if (!root) return [];
    
    const columnTable = new Map();
    const queue = [{ node: root, row: 0, col: 0 }];
    
    while (queue.length > 0) {
        const { node, row, col } = queue.shift();
        
        if (!columnTable.has(col)) {
            columnTable.set(col, []);
        }
        columnTable.get(col).push({ val: node.val, row });
        
        if (node.left) queue.push({ node: node.left, row: row + 1, col: col - 1 });
        if (node.right) queue.push({ node: node.right, row: row + 1, col: col + 1 });
    }
    
    // Sort columns and return result
    const sortedColumns = Array.from(columnTable.keys()).sort((a, b) => a - b);
    return sortedColumns.map(col => 
        columnTable.get(col).sort((a, b) => a.row - b.row || a.val - b.val).map(item => item.val)
    );
}
```

## Practice Problems
1. Binary Tree Level Order Traversal
2. Binary Tree Zigzag Level Order Traversal
3. Binary Tree Right Side View
4. Binary Tree Left Side View
5. Average of Levels in Binary Tree
6. Minimum Depth of Binary Tree
7. Maximum Depth of Binary Tree
8. Path Sum
9. Path Sum II
10. Binary Tree Vertical Order Traversal
