/**
 * Solution: Linked List Cycle Detection
 * 
 * Time Complexity: O(n) - linear time
 * Space Complexity: O(1) - constant space
 */

// Definition for singly-linked list
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Approach 1: Floyd's Cycle Detection (Tortoise and Hare)
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    // Move slow one step and fast two steps
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        // If they meet, there's a cycle
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Approach 2: Find the node where cycle begins
function detectCycle(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    
    // First phase: detect if cycle exists
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // Cycle detected, now find the start
            slow = head;
            
            // Move both pointers one step at a time
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            
            return slow; // This is the cycle start
        }
    }
    
    return null; // No cycle
}

// Approach 3: Find cycle length
function findCycleLength(head) {
    if (!head || !head.next) return 0;
    
    let slow = head;
    let fast = head;
    
    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // Cycle detected, now calculate length
            let length = 1;
            let current = slow.next;
            
            while (current !== slow) {
                current = current.next;
                length++;
            }
            
            return length;
        }
    }
    
    return 0; // No cycle
}

// Additional Fast-Slow Pointer Patterns

// Find Middle of Linked List
function findMiddle(head) {
    if (!head) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Find kth Node from End
function findKthFromEnd(head, k) {
    let slow = head;
    let fast = head;
    
    // Move fast k steps ahead
    for (let i = 0; i < k; i++) {
        if (!fast) return null;
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// Palindrome Linked List
function isPalindrome(head) {
    if (!head || !head.next) return true;
    
    // Find middle
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let prev = null;
    let current = slow;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    // Compare first half with reversed second half
    let left = head;
    let right = prev;
    
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
}

// Remove Nth Node from End
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let slow = dummy;
    let fast = dummy;
    
    // Move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove the nth node
    slow.next = slow.next.next;
    
    return dummy.next;
}

// Reorder Linked List
function reorderList(head) {
    if (!head || !head.next) return;
    
    // Find middle
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    let prev = null;
    let current = slow;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    // Merge two halves
    let first = head;
    let second = prev;
    
    while (second.next) {
        const temp1 = first.next;
        const temp2 = second.next;
        
        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2;
    }
}

// Detect and Remove Cycle
function removeCycle(head) {
    if (!head || !head.next) return;
    
    let slow = head;
    let fast = head;
    
    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // Find cycle start
            slow = head;
            let prev = null;
            
            while (slow !== fast) {
                prev = fast;
                slow = slow.next;
                fast = fast.next;
            }
            
            // Remove cycle
            if (prev) {
                prev.next = null;
            }
            return;
        }
    }
}

// Intersection of Two Linked Lists
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
    
    let a = headA;
    let b = headB;
    
    // When one pointer reaches end, redirect to other list
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    
    return a;
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

// Helper function to print linked list (for debugging)
function printLinkedList(head, maxNodes = 10) {
    const values = [];
    let current = head;
    let count = 0;
    
    while (current && count < maxNodes) {
        values.push(current.val);
        current = current.next;
        count++;
    }
    
    return values;
}

// Test cases
const list1 = createLinkedListWithCycle([3, 2, 0, -4], 1); // Has cycle
const list2 = createLinkedListWithCycle([1, 2], 0); // Has cycle
const list3 = createLinkedListWithCycle([1], -1); // No cycle
const list4 = createLinkedListWithCycle([1, 2, 3, 4], -1); // No cycle

console.log("=== Cycle Detection ===");
console.log("Test Case 1 (has cycle):", hasCycle(list1)); // Expected: true
console.log("Test Case 2 (has cycle):", hasCycle(list2)); // Expected: true
console.log("Test Case 3 (no cycle):", hasCycle(list3)); // Expected: false
console.log("Test Case 4 (no cycle):", hasCycle(list4)); // Expected: false

console.log("\n=== Detect Cycle Start ===");
console.log("Test Case 1:", detectCycle(list1)?.val); // Expected: 2
console.log("Test Case 2:", detectCycle(list2)?.val); // Expected: 1

console.log("\n=== Find Cycle Length ===");
console.log("Test Case 1:", findCycleLength(list1)); // Expected: 3
console.log("Test Case 2:", findCycleLength(list2)); // Expected: 2

console.log("\n=== Find Middle Node ===");
const list5 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Middle of [1,2,3,4,5]:", findMiddle(list5)?.val); // Expected: 3

console.log("\n=== Find kth from End ===");
console.log("2nd from end of [1,2,3,4,5]:", findKthFromEnd(list5, 2)?.val); // Expected: 4

console.log("\n=== Palindrome Check ===");
const palindrome = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
const notPalindrome = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(1))));
console.log("Is [1,2,2,1] palindrome:", isPalindrome(palindrome)); // Expected: true
console.log("Is [1,2,3,1] palindrome:", isPalindrome(notPalindrome)); // Expected: false

/**
 * Key Insights:
 * 1. Fast-slow pointers are perfect for cycle detection
 * 2. If there's a cycle, fast pointer will eventually meet slow pointer
 * 3. After detecting cycle, can find cycle start by resetting one pointer
 * 4. Can calculate cycle length by keeping one pointer stationary
 * 5. Useful for finding middle, kth from end, and palindrome checking
 * 
 * Fast-Slow Pointer Applications:
 * - Cycle detection in linked lists
 * - Finding middle node
 * - Finding kth node from end
 * - Palindrome checking
 * - Reordering linked lists
 * - Intersection of two lists
 * 
 * Why it works:
 * - If no cycle: fast reaches end before slow
 * - If cycle exists: fast catches up to slow within cycle
 * - Mathematical proof: fast moves 2x speed of slow
 * - When they meet, slow has moved distance = cycle length
 */
