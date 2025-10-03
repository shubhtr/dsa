/**
 * Solution: Monotonic Stack Problems
 * 
 * Time Complexity: O(n) - each element pushed and popped at most once
 * Space Complexity: O(n) - for the stack
 */

// Approach 1: Monotonic Stack
function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // Store indices
    
    for (let i = 0; i < temperatures.length; i++) {
        // While current temperature is warmer than stack top
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        
        stack.push(i);
    }
    
    return result;
}

// Approach 2: Brute Force (for comparison)
function dailyTemperaturesBruteForce(temperatures) {
    const result = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        let days = 0;
        let found = false;
        
        for (let j = i + 1; j < temperatures.length; j++) {
            days++;
            if (temperatures[j] > temperatures[i]) {
                found = true;
                break;
            }
        }
        
        result.push(found ? days : 0);
    }
    
    return result;
}

// Next Greater Element
function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const nextGreater = new Map();
    
    // Build next greater map for nums2
    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop(), num);
        }
        stack.push(num);
    }
    
    // Build result for nums1
    return nums1.map(num => nextGreater.get(num) || -1);
}

// Additional Monotonic Stack Patterns

// Next Greater Element (circular array)
function nextGreaterElements(nums) {
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

// Largest Rectangle in Histogram
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

// Trapping Rain Water
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

// Next Smaller Element
function nextSmallerElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] < nums[stack[stack.length - 1]]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}

// Previous Greater Element
function previousGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
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

// Previous Smaller Element
function previousSmallerElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < nums.length; i++) {
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

// Maximum Score of a Good Subarray
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

// Remove Duplicate Letters
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

// Test cases
console.log("=== Daily Temperatures ===");
console.log("Test Case 1:", dailyTemperatures([73,74,75,71,69,72,76,73])); 
// Expected: [1,1,4,2,1,1,0,0]

console.log("Test Case 2:", dailyTemperatures([30,40,50,60])); 
// Expected: [1,1,1,0]

console.log("Test Case 3:", dailyTemperatures([30,60,90])); 
// Expected: [1,1,0]

console.log("\n=== Brute Force Comparison ===");
console.log("Test Case 1:", dailyTemperaturesBruteForce([73,74,75,71,69,72,76,73])); 
// Expected: [1,1,4,2,1,1,0,0]

console.log("\n=== Next Greater Element ===");
console.log("nums1=[4,1,2], nums2=[1,3,4,2]:", nextGreaterElement([4,1,2], [1,3,4,2])); 
// Expected: [-1,3,-1]

console.log("\n=== Next Greater Elements (Circular) ===");
console.log("[1,2,1]:", nextGreaterElements([1,2,1])); // Expected: [2,-1,2]

console.log("\n=== Largest Rectangle in Histogram ===");
console.log("[2,1,5,6,2,3]:", largestRectangleArea([2,1,5,6,2,3])); // Expected: 10

console.log("\n=== Trapping Rain Water ===");
console.log("[0,1,0,2,1,0,1,3,2,1,2,1]:", trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6

console.log("\n=== Next Smaller Elements ===");
console.log("[4,5,2,10,8]:", nextSmallerElements([4,5,2,10,8])); // Expected: [2,2,-1,8,-1]

console.log("\n=== Previous Greater Elements ===");
console.log("[4,5,2,10,8]:", previousGreaterElements([4,5,2,10,8])); // Expected: [-1,-1,5,-1,10]

console.log("\n=== Previous Smaller Elements ===");
console.log("[4,5,2,10,8]:", previousSmallerElements([4,5,2,10,8])); // Expected: [-1,4,-1,2,2]

console.log("\n=== Remove Duplicate Letters ===");
console.log("bcabc:", removeDuplicateLetters("bcabc")); // Expected: "abc"
console.log("cbacdcbc:", removeDuplicateLetters("cbacdcbc")); // Expected: "acdb"

/**
 * Key Insights:
 * 1. Monotonic stack maintains elements in sorted order
 * 2. Decreasing stack: find next greater element
 * 3. Increasing stack: find next smaller element
 * 4. Each element pushed and popped at most once: O(n) time
 * 5. Useful for "next/previous greater/smaller" problems
 * 
 * Monotonic Stack Applications:
 * - Next/Previous Greater/Smaller Element
 * - Largest Rectangle in Histogram
 * - Trapping Rain Water
 * - Daily Temperatures
 * - Stock Span Problem
 * - Remove Duplicate Letters
 * - Maximum Score problems
 * 
 * Stack Properties:
 * - Decreasing: stack[i] >= stack[i+1]
 * - Increasing: stack[i] <= stack[i+1]
 * - Elements are processed in order
 * - Maintains relative ordering
 */
