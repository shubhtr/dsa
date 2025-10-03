/**
 * Solution: Binary Tree Level Order Traversal
 * 
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(w) - where w is maximum width of tree (for BFS)
 *                   O(h) - where h is height of tree (for DFS recursion)
 */

// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Approach 1: BFS using Queue (Iterative)
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
            
            // Add children to queue for next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Approach 2: DFS using Recursion
function levelOrderRecursive(root) {
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
    return result;
}

// Approach 3: BFS with Deque (More Efficient)
function levelOrderDeque(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // Use shift for FIFO
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Approach 4: BFS with Level Tracking (Alternative)
function levelOrderWithLevel(root) {
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

// Additional Tree Traversal Patterns

// Pre-order Traversal (Root, Left, Right)
function preorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    return result;
}

// In-order Traversal (Left, Root, Right)
function inorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    
    dfs(root);
    return result;
}

// Post-order Traversal (Left, Right, Root)
function postorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
    
    dfs(root);
    return result;
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
const tree4 = createTree([1, 2, 3, 4, 5, 6, 7]);

console.log("=== Level Order Traversal (BFS) ===");
console.log("Test Case 1:", levelOrder(tree1)); // Expected: [[3],[9,20],[15,7]]
console.log("Test Case 2:", levelOrder(tree2)); // Expected: [[1]]
console.log("Test Case 3:", levelOrder(tree3)); // Expected: []

console.log("\n=== Level Order Traversal (DFS Recursive) ===");
console.log("Test Case 1:", levelOrderRecursive(tree1)); // Expected: [[3],[9,20],[15,7]]
console.log("Test Case 2:", levelOrderRecursive(tree2)); // Expected: [[1]]
console.log("Test Case 3:", levelOrderRecursive(tree3)); // Expected: []

console.log("\n=== Other Traversal Methods ===");
console.log("Pre-order:", preorderTraversal(tree1)); // Expected: [3,9,20,15,7]
console.log("In-order:", inorderTraversal(tree1)); // Expected: [9,3,15,20,7]
console.log("Post-order:", postorderTraversal(tree1)); // Expected: [9,15,7,20,3]

/**
 * Key Insights:
 * 1. Level order traversal can be done with BFS (queue) or DFS (recursion)
 * 2. BFS approach: Process nodes level by level using queue
 * 3. DFS approach: Use recursion with level parameter
 * 4. Track level size in BFS to separate levels
 * 5. Create result arrays dynamically as needed
 * 
 * Traversal Types:
 * - Pre-order: Process root before children
 * - In-order: Process left, root, right (gives sorted order for BST)
 * - Post-order: Process children before root
 * - Level-order: Process level by level (BFS)
 * 
 * Use Cases:
 * - Pre-order: Copy tree, serialize tree
 * - In-order: Get sorted order (BST), validate BST
 * - Post-order: Delete tree, calculate height
 * - Level-order: Print tree level by level, find minimum depth
 */
