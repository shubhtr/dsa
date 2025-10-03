# Fast and Slow Pointers Pattern

## Overview
The Fast and Slow Pointers pattern (also known as Floyd's Cycle Detection Algorithm or "Tortoise and Hare") uses two pointers moving at different speeds to solve problems involving linked lists, particularly cycle detection and finding specific positions.

## When to Use Fast-Slow Pointers
- **Cycle Detection**: Determine if a linked list has a cycle
- **Find Middle Element**: Locate the middle node in a linked list
- **Find kth from End**: Locate the kth node from the end
- **Palindrome Detection**: Check if a linked list is a palindrome
- **Intersection Detection**: Find intersection of two linked lists
- **Reorder Lists**: Rearrange linked list elements

## Pattern Characteristics
- **Two Pointers**: One moves at normal speed, other moves faster
- **Cycle Detection**: Fast pointer catches up to slow pointer if cycle exists
- **Constant Space**: Uses O(1) additional space
- **Linear Time**: O(n) time complexity in most cases

## Common Problems
- Linked List Cycle
- Linked List Cycle II
- Middle of the Linked List
- Remove Nth Node From End of List
- Palindrome Linked List
- Reorder List
- Intersection of Two Linked Lists
- Happy Number
- Find the Duplicate Number

## Time Complexity
- **Cycle Detection**: O(n) - fast pointer visits each node at most twice
- **Find Middle**: O(n/2) - approximately O(n)
- **kth from End**: O(n) - traverse list once
- **Palindrome Check**: O(n) - traverse and reverse

## Space Complexity
- **Most Problems**: O(1) - only using two pointers
- **Some Variations**: O(1) to O(n) depending on approach

## Implementation Patterns

### Basic Cycle Detection
```javascript
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}
```

### Find Cycle Start
```javascript
function detectCycle(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    
    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // Find cycle start
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    
    return null;
}
```

### Find Middle Node
```javascript
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
```

### Find kth from End
```javascript
function findKthFromEnd(head, k) {
    let slow = head;
    let fast = head;
    
    // Move fast k steps ahead
    for (let i = 0; i < k; i++) {
        if (!fast) return null;
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

## Advanced Patterns

### Palindrome Linked List
```javascript
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
    
    // Compare halves
    let left = head;
    let right = prev;
    
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
}
```

### Reorder Linked List
```javascript
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
    
    // Merge halves
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
```

### Intersection of Two Linked Lists
```javascript
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
    
    let a = headA;
    let b = headB;
    
    // When one reaches end, redirect to other list
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    
    return a;
}
```

### Remove Nth Node from End
```javascript
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let slow = dummy;
    let fast = dummy;
    
    // Move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove nth node
    slow.next = slow.next.next;
    
    return dummy.next;
}
```

## Specialized Applications

### Happy Number
```javascript
function isHappy(n) {
    function getNext(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    
    let slow = n;
    let fast = n;
    
    do {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    } while (slow !== fast && fast !== 1);
    
    return fast === 1;
}
```

### Find Duplicate Number
```javascript
function findDuplicate(nums) {
    // Treat array as linked list where nums[i] points to index nums[i]
    let slow = nums[0];
    let fast = nums[0];
    
    // Find intersection point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Find entrance to cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

### Circular Array Loop
```javascript
function circularArrayLoop(nums) {
    const n = nums.length;
    
    function getNext(i) {
        return ((i + nums[i]) % n + n) % n;
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;
        
        let slow = i;
        let fast = i;
        
        // Check if direction is same
        while (nums[fast] * nums[getNext(fast)] > 0) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
            
            if (slow === fast) {
                // Check if cycle length > 1
                if (getNext(slow) === slow) break;
                return true;
            }
        }
        
        // Mark visited elements
        let curr = i;
        while (nums[curr] * nums[getNext(curr)] > 0) {
            const next = getNext(curr);
            nums[curr] = 0;
            curr = next;
        }
    }
    
    return false;
}
```

## Mathematical Insight

### Why Fast-Slow Pointers Work
- **No Cycle**: Fast pointer reaches end before slow pointer
- **With Cycle**: Fast pointer catches up to slow pointer within the cycle
- **Mathematical Proof**: 
  - When they meet, slow has moved distance `d`
  - Fast has moved distance `2d`
  - Cycle length `c` = `2d - d = d`
  - Distance from head to cycle start = `d - c`

### Cycle Length Calculation
```javascript
function getCycleLength(slow, fast) {
    let length = 1;
    let current = slow.next;
    
    while (current !== slow) {
        current = current.next;
        length++;
    }
    
    return length;
}
```

## Common Pitfalls

### Off-by-One Errors
```javascript
// WRONG - might miss cycle detection
while (fast.next && fast.next.next) {
    // ...
}

// RIGHT - proper boundary checking
while (fast && fast.next) {
    // ...
}
```

### Not Handling Edge Cases
```javascript
// WRONG - doesn't handle empty list
function hasCycle(head) {
    let slow = head;
    let fast = head;
    // ...
}

// RIGHT - handle edge cases
function hasCycle(head) {
    if (!head || !head.next) return false;
    // ...
}
```

## Practice Problems
1. Linked List Cycle
2. Linked List Cycle II
3. Middle of the Linked List
4. Remove Nth Node From End of List
5. Palindrome Linked List
6. Reorder List
7. Intersection of Two Linked Lists
8. Happy Number
9. Find the Duplicate Number
10. Circular Array Loop
11. Find the Start of Cycle
12. Detect and Remove Cycle
13. Find Cycle Length
14. Merge Two Sorted Lists
15. Reverse Linked List
