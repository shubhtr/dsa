/**
 * Problem: Merge Intervals
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 * Constraints:
 * - 1 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= starti <= endi <= 10^4
 */

function merge(intervals) {
    // TODO: Implement merge intervals algorithm
    // Hint: Sort intervals by start time, then merge overlapping intervals
    // Two intervals overlap if current.start <= previous.end
    
    return []; // Placeholder
}

function insertInterval(intervals, newInterval) {
    // TODO: Insert new interval and merge if necessary
    // Hint: Add new interval, sort, then merge
    
    return []; // Placeholder
}

function eraseOverlapIntervals(intervals) {
    // TODO: Find minimum number of intervals to remove to make non-overlapping
    // Hint: Use greedy approach - sort by end time, keep intervals with earliest end
    
    return 0; // Placeholder
}

function intervalIntersection(firstList, secondList) {
    // TODO: Find intersection of two interval lists
    // Hint: Use two pointers to find overlapping intervals
    
    return []; // Placeholder
}

// Test cases
console.log("Test Case 1:", merge([[1,3],[2,6],[8,10],[15,18]])); 
// Expected: [[1,6],[8,10],[15,18]]

console.log("Test Case 2:", merge([[1,4],[4,5]])); 
// Expected: [[1,5]]

console.log("Test Case 3:", merge([[1,4],[2,3]])); 
// Expected: [[1,4]]

console.log("\nInsert interval:");
console.log("Test Case 1:", insertInterval([[1,3],[6,9]], [2,5])); 
// Expected: [[1,5],[6,9]]

console.log("Test Case 2:", insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); 
// Expected: [[1,2],[3,10],[12,16]]

console.log("\nErase overlapping intervals:");
console.log("Test Case 1:", eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); 
// Expected: 1

console.log("Test Case 2:", eraseOverlapIntervals([[1,2],[1,2],[1,2]])); 
// Expected: 2

console.log("\nInterval intersection:");
console.log("Test Case 1:", intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]])); 
// Expected: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
