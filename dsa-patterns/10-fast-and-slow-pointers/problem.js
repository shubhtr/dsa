/**
 * Problem: Linked List Cycle
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * 
 * There is a cycle in a linked list if there is some node in the list that can be reached
 * again by continuously following the next pointer. Internally, pos is used to denote the
 * index of the node that tail's next pointer is connected to. Note that pos is not passed
 * as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list where the tail connects to the 1st node (0-indexed).
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list where the tail connects to the 0th node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * Constraints:
 * - The number of the nodes in the list is in the range [0, 10^4]
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked-list
 */

// Definition for singly-linked list
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    // TODO: Implement Floyd's Cycle Detection Algorithm (Tortoise and Hare)
    // Hint: Use two pointers - slow (moves 1 step) and fast (moves 2 steps)
    // If there's a cycle, fast will eventually catch up to slow
    
    return false; // Placeholder
}

function detectCycle(head) {
    // TODO: Find the node where the cycle begins
    // Hint: After detecting cycle, reset one pointer to head
    // Move both pointers one step at a time until they meet
    
    return null; // Placeholder
}

function findCycleLength(head) {
    // TODO: Find the length of the cycle
    // Hint: After detecting cycle, keep one pointer stationary
    // Move other pointer until it comes back to stationary pointer
    
    return 0; // Placeholder
}

// Helper function to create linked list with cycle
function createLinkedListWithCycle(values, cyclePos) {
    if (values.length === 0) return null;
    
    const head = new ListNode(values[0]);
    let current = head;
    let cycleNode = cyclePos === 0 ? head : null;
    
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
        
        if (i === cyclePos) {
            cycleNode = current;
        }
    }
    
    // Create cycle if cyclePos is valid
    if (cyclePos >= 0 && cycleNode) {
        current.next = cycleNode;
    }
    
    return head;
}

// Test cases
const list1 = createLinkedListWithCycle([3, 2, 0, -4], 1); // Has cycle
const list2 = createLinkedListWithCycle([1, 2], 0); // Has cycle
const list3 = createLinkedListWithCycle([1], -1); // No cycle
const list4 = createLinkedListWithCycle([1, 2, 3, 4], -1); // No cycle

console.log("Test Case 1 (has cycle):", hasCycle(list1)); // Expected: true
console.log("Test Case 2 (has cycle):", hasCycle(list2)); // Expected: true
console.log("Test Case 3 (no cycle):", hasCycle(list3)); // Expected: false
console.log("Test Case 4 (no cycle):", hasCycle(list4)); // Expected: false

console.log("\nDetect cycle start:");
console.log("Test Case 1:", detectCycle(list1)?.val); // Expected: 2
console.log("Test Case 2:", detectCycle(list2)?.val); // Expected: 1

console.log("\nCycle length:");
console.log("Test Case 1:", findCycleLength(list1)); // Expected: 3
console.log("Test Case 2:", findCycleLength(list2)); // Expected: 2
