/**
 * Problem: Binary Tree Level Order Traversal II
 * 
 * Given the root of a binary tree, return the bottom-up level order traversal
 * of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[15,7],[9,20],[3]]
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

function levelOrderBottom(root) {
    // TODO: Implement BFS to get level order traversal from bottom to top
    // Hint: Use queue for BFS, then reverse the result
    // Or use stack/array and unshift to build result from bottom
    
    return []; // Placeholder
}

function levelOrderBottomDFS(root) {
    // TODO: Implement using DFS with level tracking
    // Hint: Use recursion with level parameter
    // Build result array and reverse at the end
    
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

console.log("Test Case 1 (BFS):", levelOrderBottom(tree1)); // Expected: [[15,7],[9,20],[3]]
console.log("Test Case 2 (BFS):", levelOrderBottom(tree2)); // Expected: [[1]]
console.log("Test Case 3 (BFS):", levelOrderBottom(tree3)); // Expected: []

console.log("\nTest Case 1 (DFS):", levelOrderBottomDFS(tree1)); // Expected: [[15,7],[9,20],[3]]
console.log("Test Case 2 (DFS):", levelOrderBottomDFS(tree2)); // Expected: [[1]]
