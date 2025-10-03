/**
 * Problem: Daily Temperatures
 * 
 * Given an array of integers temperatures representing the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait
 * after the ith day to get a warmer temperature. If there is no future day for which
 * this is possible, keep answer[i] == 0 instead.
 * 
 * Example 1:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * 
 * Example 2:
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 * 
 * Example 3:
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 * 
 * Constraints:
 * - 1 <= temperatures.length <= 10^5
 * - 30 <= temperatures[i] <= 100
 */

function dailyTemperatures(temperatures) {
    // TODO: Implement using monotonic stack
    // Hint: Use a stack to store indices of temperatures
    // Keep stack in decreasing order (monotonic decreasing)
    // When current temperature > stack top, pop and calculate days
    
    return []; // Placeholder
}

function dailyTemperaturesBruteForce(temperatures) {
    // TODO: Implement using brute force approach
    // Hint: For each temperature, look ahead to find next warmer day
    
    return []; // Placeholder
}

function nextGreaterElement(nums1, nums2) {
    // TODO: Find next greater element for each element in nums1 within nums2
    // Hint: Use monotonic stack to find next greater element for each position in nums2
    
    return []; // Placeholder
}

// Test cases
console.log("Test Case 1:", dailyTemperatures([73,74,75,71,69,72,76,73])); 
// Expected: [1,1,4,2,1,1,0,0]

console.log("Test Case 2:", dailyTemperatures([30,40,50,60])); 
// Expected: [1,1,1,0]

console.log("Test Case 3:", dailyTemperatures([30,60,90])); 
// Expected: [1,1,0]

console.log("\nBrute force approach:");
console.log("Test Case 1:", dailyTemperaturesBruteForce([73,74,75,71,69,72,76,73])); 
// Expected: [1,1,4,2,1,1,0,0]

console.log("\nNext Greater Element:");
console.log("nums1=[4,1,2], nums2=[1,3,4,2]:", nextGreaterElement([4,1,2], [1,3,4,2])); 
// Expected: [-1,3,-1]
