/**
 * Solution: Overlapping Intervals Problems
 * 
 * Time Complexity: O(n log n) - sorting dominates
 * Space Complexity: O(1) - excluding output array
 */

// Approach 1: Merge Intervals
function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        
        // Check if intervals overlap
        if (current[0] <= last[1]) {
            // Merge intervals
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, add new interval
            result.push(current);
        }
    }
    
    return result;
}

// Approach 2: Insert Interval
function insertInterval(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add all intervals that end before new interval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}

// Approach 3: Erase Overlapping Intervals
function eraseOverlapIntervals(intervals) {
    if (intervals.length <= 1) return 0;
    
    // Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // Overlapping interval, remove it
            count++;
        } else {
            // Non-overlapping, update end
            end = intervals[i][1];
        }
    }
    
    return count;
}

// Approach 4: Interval Intersection
function intervalIntersection(firstList, secondList) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < firstList.length && j < secondList.length) {
        const start = Math.max(firstList[i][0], secondList[j][0]);
        const end = Math.min(firstList[i][1], secondList[j][1]);
        
        if (start <= end) {
            result.push([start, end]);
        }
        
        // Move pointer of interval that ends first
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
}

// Additional Interval Patterns

// Meeting Rooms
function canAttendMeetings(intervals) {
    if (intervals.length <= 1) return true;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }
    
    return true;
}

// Meeting Rooms II
function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    
    // Sort by start time
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);
    
    let rooms = 0;
    let endIndex = 0;
    
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[endIndex]) {
            rooms++;
        } else {
            endIndex++;
        }
    }
    
    return rooms;
}

// Meeting Rooms II (using heap)
function minMeetingRoomsHeap(intervals) {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const heap = [intervals[0][1]]; // Min heap of end times
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= heap[0]) {
            heap[0] = intervals[i][1];
            heapifyDown(heap, 0);
        } else {
            heap.push(intervals[i][1]);
            heapifyUp(heap, heap.length - 1);
        }
    }
    
    return heap.length;
}

// Minimum Number of Arrows to Burst Balloons
function findMinArrowShots(points) {
    if (points.length === 0) return 0;
    
    // Sort by end position
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1;
    let end = points[0][1];
    
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }
    
    return arrows;
}

// Employee Free Time
function employeeFreeTime(schedule) {
    const allIntervals = [];
    
    // Flatten all intervals
    for (const employee of schedule) {
        for (const interval of employee) {
            allIntervals.push(interval);
        }
    }
    
    // Sort by start time
    allIntervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [allIntervals[0]];
    
    // Merge overlapping intervals
    for (let i = 1; i < allIntervals.length; i++) {
        const current = allIntervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    // Find free time gaps
    const freeTime = [];
    for (let i = 1; i < merged.length; i++) {
        freeTime.push([merged[i - 1][1], merged[i][0]]);
    }
    
    return freeTime;
}

// Insert Interval (Optimized)
function insertIntervalOptimized(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;
    
    // Add intervals before newInterval
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals with newInterval
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}

// Range Addition
function getModifiedArray(length, updates) {
    const result = new Array(length).fill(0);
    
    for (const [start, end, inc] of updates) {
        result[start] += inc;
        if (end + 1 < length) {
            result[end + 1] -= inc;
        }
    }
    
    // Convert to prefix sum
    for (let i = 1; i < length; i++) {
        result[i] += result[i - 1];
    }
    
    return result;
}

// Car Pooling
function carPooling(trips, capacity) {
    const events = [];
    
    for (const [passengers, start, end] of trips) {
        events.push([start, passengers]);
        events.push([end, -passengers]);
    }
    
    events.sort((a, b) => a[0] - b[0]);
    
    let currentPassengers = 0;
    
    for (const [time, change] of events) {
        currentPassengers += change;
        if (currentPassengers > capacity) {
            return false;
        }
    }
    
    return true;
}

// Heap helper functions
function heapifyUp(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[index] >= heap[parentIndex]) break;
        
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
    }
}

function heapifyDown(heap, index) {
    while (true) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        
        if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
            smallest = leftChild;
        }
        
        if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
            smallest = rightChild;
        }
        
        if (smallest === index) break;
        
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

// Test cases
console.log("=== Merge Intervals ===");
console.log("Test Case 1:", merge([[1,3],[2,6],[8,10],[15,18]])); 
// Expected: [[1,6],[8,10],[15,18]]

console.log("Test Case 2:", merge([[1,4],[4,5]])); 
// Expected: [[1,5]]

console.log("Test Case 3:", merge([[1,4],[2,3]])); 
// Expected: [[1,4]]

console.log("\n=== Insert Interval ===");
console.log("Test Case 1:", insertInterval([[1,3],[6,9]], [2,5])); 
// Expected: [[1,5],[6,9]]

console.log("Test Case 2:", insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); 
// Expected: [[1,2],[3,10],[12,16]]

console.log("\n=== Erase Overlapping Intervals ===");
console.log("Test Case 1:", eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); 
// Expected: 1

console.log("Test Case 2:", eraseOverlapIntervals([[1,2],[1,2],[1,2]])); 
// Expected: 2

console.log("\n=== Interval Intersection ===");
console.log("Test Case 1:", intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]])); 
// Expected: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

console.log("\n=== Meeting Rooms ===");
console.log("Can attend meetings [[0,30],[5,10],[15,20]]:", canAttendMeetings([[0,30],[5,10],[15,20]])); // Expected: false

console.log("\n=== Meeting Rooms II ===");
console.log("Min meeting rooms [[0,30],[5,10],[15,20]]:", minMeetingRooms([[0,30],[5,10],[15,20]])); // Expected: 2

console.log("\n=== Minimum Arrows ===");
console.log("Min arrows [[10,16],[2,8],[1,6],[7,12]]:", findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // Expected: 2

console.log("\n=== Car Pooling ===");
console.log("Car pooling trips=[[2,1,5],[3,3,7]], capacity=4:", carPooling([[2,1,5],[3,3,7]], 4)); // Expected: false

/**
 * Key Insights:
 * 1. Sort intervals by start time or end time depending on problem
 * 2. Use greedy approach for optimization problems
 * 3. Two pointers technique for interval intersection
 * 4. Merge overlapping intervals by comparing start and end times
 * 5. Use heap for meeting rooms problems
 * 6. Event-based approach for car pooling and range updates
 * 
 * Interval Patterns:
 * - Merge overlapping intervals
 * - Insert new interval
 * - Remove minimum intervals to make non-overlapping
 * - Find intersection of interval lists
 * - Meeting room scheduling
 * - Balloon bursting (greedy)
 * - Employee free time
 * - Range updates with difference array
 * 
 * Sorting Strategies:
 * - By start time: for merging and insertion
 * - By end time: for greedy optimization
 * - By both: for complex problems
 * 
 * Common Operations:
 * - Overlap detection: a.start <= b.end && b.start <= a.end
 * - Merge: [min(a.start, b.start), max(a.end, b.end)]
 * - Intersection: [max(a.start, b.start), min(a.end, b.end)]
 */
