# Monotonic Stack Pattern

## Overview
A monotonic stack is a stack data structure that maintains elements in either strictly increasing or strictly decreasing order. This pattern is particularly useful for solving problems involving finding the next/previous greater or smaller elements efficiently.

## When to Use Monotonic Stack
- **Next/Previous Greater Element**: Find next greater element to the right/left
- **Next/Previous Smaller Element**: Find next smaller element to the right/left
- **Range Queries**: Find maximum/minimum in sliding windows
- **Area Problems**: Largest rectangle in histogram, trapping rain water
- **Optimization**: Maintain optimal elements for future processing

## Pattern Characteristics
- **Sorted Order**: Elements maintained in increasing or decreasing order
- **Efficient Processing**: Each element pushed and popped at most once
- **Linear Time**: O(n) time complexity for most problems
- **Space Trade-off**: Uses O(n) space for the stack

## Common Problems
- Daily Temperatures
- Next Greater Element
- Largest Rectangle in Histogram
- Trapping Rain Water
- Stock Span Problem
- Next Greater Element II (Circular)
- Remove Duplicate Letters
- Maximum Score of a Good Subarray

## Time Complexity
- **Most Problems**: O(n) - each element processed once
- **Push/Pop Operations**: Each element pushed and popped at most once
- **Overall**: O(n) where n is the number of elements

## Space Complexity
- **Stack Space**: O(n) in worst case
- **Additional Space**: O(1) to O(n) depending on problem requirements

## Implementation Patterns

### Decreasing Stack (Next Greater Element)
```javascript
function nextGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = []; // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // While current element is greater than stack top
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}
```

### Increasing Stack (Next Smaller Element)
```javascript
function nextSmallerElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
        // While current element is smaller than stack top
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}
```

### Daily Temperatures Pattern
```javascript
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    
    return result;
}
```

## Advanced Patterns

### Largest Rectangle in Histogram
```javascript
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    
    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = i === heights.length ? 0 : heights[i];
        
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}
```

### Trapping Rain Water
```javascript
function trap(height) {
    const stack = [];
    let water = 0;
    
    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const bottom = stack.pop();
            
            if (stack.length === 0) break;
            
            const left = stack[stack.length - 1];
            const right = i;
            const width = right - left - 1;
            const h = Math.min(height[left], height[right]) - height[bottom];
            water += width * h;
        }
        
        stack.push(i);
    }
    
    return water;
}
```

### Circular Array Processing
```javascript
function nextGreaterElementsCircular(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];
    
    // Process array twice to handle circular nature
    for (let i = 0; i < 2 * n; i++) {
        const index = i % n;
        
        while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[index];
        }
        
        if (i < n) {
            stack.push(index);
        }
    }
    
    return result;
}
```

### Remove Duplicate Letters
```javascript
function removeDuplicateLetters(s) {
    const stack = [];
    const seen = new Set();
    const lastIndex = new Map();
    
    // Record last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (seen.has(char)) continue;
        
        // Remove characters that are greater and will appear later
        while (stack.length > 0 && 
               char < stack[stack.length - 1] && 
               lastIndex.get(stack[stack.length - 1]) > i) {
            seen.delete(stack.pop());
        }
        
        stack.push(char);
        seen.add(char);
    }
    
    return stack.join('');
}
```

## Specialized Applications

### Stock Span Problem
```javascript
function stockSpan(prices) {
    const spans = [];
    const stack = []; // Store indices
    
    for (let i = 0; i < prices.length; i++) {
        let span = 1;
        
        // Count consecutive days with price <= current price
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            span += spans[stack.pop()];
        }
        
        spans.push(span);
        stack.push(i);
    }
    
    return spans;
}
```

### Maximum Score of a Good Subarray
```javascript
function maximumScore(nums, k) {
    const stack = [];
    let maxScore = 0;
    
    for (let i = 0; i <= nums.length; i++) {
        const currentHeight = i === nums.length ? 0 : nums[i];
        
        while (stack.length > 0 && currentHeight < nums[stack[stack.length - 1]]) {
            const height = nums[stack.pop()];
            const left = stack.length === 0 ? -1 : stack[stack.length - 1];
            const right = i;
            
            // Check if k is within this subarray
            if (left < k && k < right) {
                const width = right - left - 1;
                maxScore = Math.max(maxScore, height * width);
            }
        }
        
        stack.push(i);
    }
    
    return maxScore;
}
```

### Previous Greater/Smaller Elements
```javascript
function previousGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements smaller than or equal to current
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        
        stack.push(nums[i]);
    }
    
    return result;
}

function previousSmallerElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements greater than or equal to current
        while (stack.length > 0 && stack[stack.length - 1] >= nums[i]) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        
        stack.push(nums[i]);
    }
    
    return result;
}
```

## Optimization Techniques

### Space Optimization
```javascript
function nextGreaterElementsOptimized(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Process all elements that current element is greater than
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        
        // Only push if we haven't found next greater yet
        if (i < nums.length - 1) {
            stack.push(i);
        }
    }
    
    return result;
}
```

### Early Termination
```javascript
function dailyTemperaturesOptimized(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        // Early termination if stack is empty
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        
        // Only push if there might be a future warmer day
        if (i < temperatures.length - 1) {
            stack.push(i);
        }
    }
    
    return result;
}
```

## Common Pitfalls

### Wrong Stack Order
```javascript
// WRONG - using increasing stack for next greater
function wrongNextGreater(nums) {
    const stack = [];
    // This won't work correctly for next greater element
}

// RIGHT - use decreasing stack for next greater
function correctNextGreater(nums) {
    const stack = [];
    // Decreasing stack maintains elements that need next greater
}
```

### Not Handling Edge Cases
```javascript
// WRONG - doesn't handle empty stack
function wrongProcess(stack, current) {
    while (stack.length > 0 && current > stack[stack.length - 1]) {
        stack.pop();
    }
    // Missing check for empty stack
}

// RIGHT - handle edge cases
function correctProcess(stack, current) {
    while (stack.length > 0 && current > stack[stack.length - 1]) {
        const element = stack.pop();
        // Process element safely
    }
}
```

## Practice Problems
1. Daily Temperatures
2. Next Greater Element
3. Next Greater Element II (Circular)
4. Largest Rectangle in Histogram
5. Trapping Rain Water
6. Stock Span Problem
7. Remove Duplicate Letters
8. Maximum Score of a Good Subarray
9. Next Smaller Element
10. Previous Greater Element
11. Previous Smaller Element
12. Sum of Subarray Minimums
13. Sum of Subarray Ranges
14. Maximum Width Ramp
15. Online Stock Span
