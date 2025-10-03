/**
 * Problem: Binary Tree Level Order Traversal
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 2000]
 * - -1000 <= Node.val <= 1000
 */

// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function levelOrder(root) {
    // TODO: Implement level order traversal using BFS
    // Hint: Use a queue to process nodes level by level
    // Keep track of current level size to separate levels
    
    return []; // Placeholder
}

function levelOrderRecursive(root) {
    // TODO: Implement level order traversal using DFS
    // Hint: Use recursion with level parameter
    // Maintain result array and add nodes to appropriate level
    
    return []; // Placeholder
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

console.log("Test Case 1 (BFS):", levelOrder(tree1)); // Expected: [[3],[9,20],[15,7]]
console.log("Test Case 2 (BFS):", levelOrder(tree2)); // Expected: [[1]]
console.log("Test Case 3 (BFS):", levelOrder(tree3)); // Expected: []

console.log("\nTest Case 1 (DFS):", levelOrderRecursive(tree1)); // Expected: [[3],[9,20],[15,7]]
console.log("Test Case 2 (DFS):", levelOrderRecursive(tree2)); // Expected: [[1]]
console.log("Test Case 3 (DFS):", levelOrderRecursive(tree3)); // Expected: []
